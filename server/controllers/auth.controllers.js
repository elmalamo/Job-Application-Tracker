import pool from "../database/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  const saltRounds = Number(process.env.SALT_ROUNDS);

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;

  try {
    //check if given email already exists in db
    const emailExists = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    if (emailExists.rows.length > 0) {
      return res.status(409).json({
        message: "Email is already used!",
      });
    }

    // if not
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    await pool.query(
      "INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4)",
      [firstName, lastName, email, hashedPassword],
    );

    res.status(201).json({
      message: "User created successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

export const login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(400).json({
      message: "Email and password required!",
    });
  }

  try {
    //check if email doesnt exist in db
    const userExists = await pool.query("SELECT * FROM users WHERE email=$1", [
      email,
    ]);

    if (userExists.rows.length === 0) {
      return res.status(404).json({
        message: "User doens't exist!",
      });
    }

    // email exists
    const user = userExists.rows[0];

    //compare passwords

    const comparePasswords = await bcrypt.compare(password, user.password);

    if (comparePasswords) {
      //generate JWT
      const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: "1d" },
      );

      //send cookie
      res.cookie("token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
      });

      res.json({
        message: "Login successful",
        user: {
          id: user.id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        },
      });
    } else {
      return res.status(401).json({
        message: "Wrong credentials!",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false,
  });

  res.json({
    message: "Logout successful!",
  });
};

export const getLoggedInUser = async (req, res) => {
  const userId = req.user.id;

  try {
    const user = await pool.query(
      "SELECT id, first_name, last_name, email FROM users WHERE id=$1",
      [userId],
    );

    //check if user exists
    if (user.rows.length === 0) {
      return res.status(404).json({
        message: "User not found!",
      });
    }

    //if exists get user info
    res.json(user.rows[0]);
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};
