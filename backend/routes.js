const express = require('express');
const { sendMail } = require('./emailController');
const emailRoute = express.Router();

emailRoute.post('/sendMail', sendMail);

// Dummy route to test backend connection
emailRoute.get('/dummyJson', (req, res) => {
    res.json({
        message: "Backend is connected!",
        data: {
            name: "John Doe",
            email: "vishalgejge04@gmail.com"
        }
    });
});

module.exports = emailRoute;
