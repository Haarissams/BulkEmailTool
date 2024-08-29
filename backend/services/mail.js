const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // For TLS
    secure: false, // Use TLS
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS // Your Gmail app password
    }
});

const sendMail = async (mails, subject, message, template) => {
    const mailOptions = {
        from: process.env.EMAIL_USER, // Your Gmail address
        to: mails,
        subject: subject,
        text: message,
        ...(template && { html: template }) // Include HTML content if provided
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error.message);
        if (error.response) {
            console.error('Error response data:', error.response);
        }
        // More detailed error logging
        console.error('Error config:', error.config);
    }
};

module.exports = { sendMail };
