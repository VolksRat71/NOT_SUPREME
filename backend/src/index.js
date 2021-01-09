const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser());

server.express.use((req, res, next) => {
    const { token } = req.cookies;
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
    deets => {
        console.log(`Server is running on http://localhost:${deets.port}`);
    });