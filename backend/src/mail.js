const nodemailer = require('nodemailer');

var transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
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
        <h1>Hello There,</h1>
        <p>${text}</p>

        <h3>- Customer Support</h3>
    </div>
`;

exports.transport = transport;
exports.makeANiceEmail = makeANiceEmail;