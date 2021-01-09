const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());
console.log(`cookieparser index.js ${cookieParser}`)

server.express.use((req, res, next) => {
    const { token } = req.cookies;
    console.log(`res index.js ${res.cookies}`)
    console.log(`token index.js ${token}`);

    if (token) {
        const { userId } = jwt.verify(token, process.env.APP_SECRET);

        req.userId = userId;
    }
    next();
})

// Create Middleware that populates user on each request
server.express.use(async (req, res, next) => {
    // if they aren't logged in, skip this.
    if (!req.userId) return next();
    const user = await db.query.user(
        { where: { id: req.userId } }, '{id, permissions, email, name}'
    );
    req.user = user;
    next();
})

server.start(
    {
        cors: {
            credentials: true,
            origin: process.env.FRONTEND_URL
        },
    },
    deets => {
        console.log(`Server is running on http://localhost:${deets.port}`);
    }
);