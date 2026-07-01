const express = require("express");
const router = express.Router();

const Student = require("../models/Student");

router.post("/", async (req, res) => {
    try {

        const { name, email, password } = req.body;

        const student = new Student({
            name,
            email,
            password
        });

        await student.save();

        res.status(201).json({
            success: true,
            message: "User created successfully",
            student
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }
});

module.exports = router;