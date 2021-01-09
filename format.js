cookieparser index.js function cookieParser(secret, options) {
    return function cookieParser(req, res, next) {
        if (req.cookies) {
            return next();
        }
        var cookies = req.headers.cookie;
        var secrets = !secret || Array.isArray(secret)
            ? (secret || [])
            : [secret];
        req.secret = secrets[0];
        req.cookies = Object.create(null);
        req.signedCookies = Object.create(null);
        // no cookies
        if (!cookies) {
            return next();
        }
        req.cookies = cookie.parse(cookies, options);
        // parse signed cookies
        if (secrets.length !== 0) {
            req.signedCookies = signedCookies(req.cookies, secrets);
            req.signedCookies = JSONCookies(req.signedCookies);
        }
        // parse JSON cookies
        req.cookies = JSONCookies(req.cookies);
        next();
    };
}

cookieparser index.js function cookieParser(secret, options) {
    re
    if (req.cookies) {
        return next();
    }
    var cookies = req.headers.cookie;
    var secrets = !secret || Array.isArray(secret)
        ? (secret || [])
        : [secret];
    req.secret = secrets[0];
    req.cookies = Object.create(null); 2021 - 01 - 09T22: 21: 58.375462 + 00: 00 app[web.1]: req.signedCookies = Object.create(null);
    // no cookies
    if (!cookies) {
        return next();
    }
    req.cookies = cookie.parse(cookies, options);
    // parse signed cookies
    if (secrets.length !== 0) {
        req.signedCookies = signedCookies(req.cookies, secrets);
        req.signedCookies = JSONCookies(req.signedCookies);
    }
    // parse JSON cookies
    req.cookies = JSONCookies(req.cookies);
    next();
};
}