import { application } from "express";
import pool from "../database/db.js";
import dotenv from "dotenv";

dotenv.config();

export const createApplication = async (req, res) => {
  const userId = req.user.id;
  const company = req.body.company;
  const position = req.body.position;
  const location = req.body.location;
  const workMode = req.body.workMode;
  const status = req.body.status;
  const notes = req.body.notes;
  const appliedAt = req.body.appliedAt;

  try {
    if (!company || !position || !location || !status || !appliedAt) {
      return res.status(400).json({
        message: "Missing required fields!",
      });
    }

    const application = await pool.query(
      `INSERT INTO applications (user_id, company, position, location, work_mode, status, notes, applied_at)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING *`,
      [userId, company, position, location, workMode, status, notes, appliedAt],
    );

    res.status(201).json({
      message: "Application added successfully!",
      application: application.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

export const patchApplication = async (req, res) => {
  try {
    const userId = req.user.id;
    const applicationId = req.params.id;

    const allowedFields = [
      "company",
      "position",
      "location",
      "workMode",
      "status",
      "notes",
      "appliedAt",
    ];

    const updates = [];
    const values = [];
    let index = 1;

    for (let key of allowedFields) {
      if (req.body[key] !== undefined) {
        const dbField =
          key === "workMode"
            ? "work_mode"
            : key === "appliedAt"
              ? "applied_at"
              : key;

        updates.push(`${dbField} = $${index}`);
        values.push(req.body[key]);
        index++;
      }
    }

    if (updates.length === 0) {
      return res.status(400).json({
        message: "No fields provided for update",
      });
    }

    const query = `
            UPDATE applications
            SET ${updates.join(", ")}
            WHERE id=$${index} AND user_id=$${index + 1}
            RETURNING * `;

    values.push(applicationId, userId);

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Application not found or not authorized!",
      });
    }

    res.json({
      message: "Application updated successfully!",
      application: result.rows[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

export const deleteApplication = async (req, res) => {
  const userId = req.user.id;
  const applicationId = req.params.id;

  try {
    await pool.query("DELETE FROM applications WHERE user_id=$1 AND id=$2", [
      userId,
      applicationId,
    ]);

    res.status(201).json({
      message: "Application deleted successfully!",
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};

export const getUserApplications = async (req, res) => {
  const userId = req.user.id;

  try {
    const result = await pool.query(
        //TODO Fix the applied_At date format in json
      `SELECT id, company, position, location, work_mode, status, notes, applied_at::text 
      FROM applications
      WHERE user_id=$1 
      ORDER BY applied_at DESC`,
      [userId],
    );

    res.status(200).json({
      message: "Applications fetched successfully!",
      applications: result.rows,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error!",
    });
  }
};


// TODO Applications pagination ? no need theyh will be in columns
// TODO FIlters by role, applied date?
// TODO README 