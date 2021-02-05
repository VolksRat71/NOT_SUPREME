const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    secureConnection: process.env.MAIL_SECURE,
    port: process.env.MAIL_PORT,
    tls: {
        ciphers: process.env.MAIL_CIPHER
    },
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
            <img height="70px" src="https://raw.githubusercontent.com/VolksRat71/NOT_SUPREME/master/test_images/Nav/NotSupreme.png"/>
        </p>
        <h1>Hello There,</h1>
        <p>${text}</p>

        <h2>- Customer Support</h2>

        <p>P.S you should meet the <a href="https://nathanryan.tech/"> developer</a>! 😄</p>
    </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;