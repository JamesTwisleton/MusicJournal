function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        console.log('token is');
        console.log(req.token);
        next();
    } else {
        res.sendStatus(403);
    }
}

export default verifyToken;