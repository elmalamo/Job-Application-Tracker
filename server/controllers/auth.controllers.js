import pool from "../database/db.js";
import bcrypt from "bcryptjs";
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


export const login = (req, res) => {
  res.json({
    message: "Login controller working",
  });
};

export const logout = (req, res) => {
  res.json({
    message: "Logout controller working",
  });
};
