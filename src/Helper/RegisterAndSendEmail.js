const nodemailer = require('nodemailer');
require('dotenv').config();
/**
 * this method will check if the provided email is valid
 * then register by sending to company email
 * then send email to user
 * @param {string} email
 */


export const registerAndSendEmail = async (email) => {
    // check if email is valid
    if (!validateEmail(email)) {
        throw new Error('Invalid email');
    }
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.LOGINEMAIL,
            pass: process.env.LOGINPASSWORD
        }
    });
    const mailOptions = {
        from: process.env.EMAIL,
        to: `${email}`, /* WILL BE EXTRACTED FROM INPUT FIELD GIVEN TO BTN*/
        subject: process.env.SUBJECT,
        html: process.env.TEXT /* <html>
        <body>
        <h1>Title</h1>
        <br>
        <br>
        <br>
        <p>Info1</p>
        <p>Info2</p>
        <p>Info3</p>
        </body>
        </html>*/
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            throw new Error(error);
        }
        console.log('Email sent: ' + info.response);
    });
}
/**
 * this method will validate the email
 */
const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}