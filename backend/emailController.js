const nodemailer = require('nodemailer');
const env = require('dotenv');
env.config();

exports.sendMail = (req, res) => {
    let smtpTransport = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'Gmail',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USER,
            pass: process.env.PASSWORD
        },
        tls: { rejectUnauthorized: false }
    });

    const mailOptions = {
        from: process.env.USER,
        to: req.body.email,
        subject: 'Simple Mail',
        html: '<p>This is a simple email message sent using Node.js and Nodemailer.</p>'
    };

    smtpTransport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            res.status(200).send('Mail has been sent to your email. Check your mail');
        }
    });
};
