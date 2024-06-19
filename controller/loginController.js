const emailValidation = require("../helpers/emailValidation");
const UserInfo = require("../models/userSchema");
const bcrypt = require('bcrypt');

async function loginController(req, res) {
    const { email, password } = req.body;

    if (!email) {
        return res.send({ error: "Email is required" });
    } else if (!emailValidation(email)) {
        return res.json({ error: "Email is not valid" });
    } else if (!password) {
        return res.send({ error: "Please enter your password" });
    }

    try {
        const existingUser = await UserInfo.findOne({ email });

        if (!existingUser) {
            return res.json({ error: 'Email is not registered' });
        }

        // Check if the user is verified
        if (!existingUser.verified) {
            return res.json({ error: 'Please verify your email before logging in' });
        }

        // Compare passwords
        bcrypt.compare(password, existingUser.password).then(function (result) {
            if (result) {
                // Passwords match, send success response
                res.json({
                    success: 'Login successful',
                    info : existingUser,
                    role: existingUser.role,
                    email: existingUser.email
                });
            } else {
                // Passwords don't match, send error response
                res.json({ error: 'Incorrect password' });
            }
        });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ error: 'An error occurred while logging in' });
    }
}

module.exports = loginController;
