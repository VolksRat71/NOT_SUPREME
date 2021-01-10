const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

const makeANiceEmail = text => `
    <div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px
    ">
        <p align="center">
            <img height="70px" src="https://raw.githubusercontent.com/VolksRat71/NOT_SUPREME/master/test_images/NotSupreme.png"/>
        </p>
        <h1>Hello There,</h1>
        <p>${text}</p>

        <h3>- Customer Support</h3>
    </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;