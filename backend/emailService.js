const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail', // Anda bisa mengganti dengan layanan email lain
    auth: {
        user: '213100190@almaata.ac.id', // Ganti dengan email Anda
        pass: '', // Ganti dengan password email Anda
    },
});

const sendEmailNotification = (to, subject, text) => {
    const mailOptions = {
        from: 'your-email@gmail.com',
        to,
        subject,
        text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error occurred:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

module.exports = { sendEmailNotification };
