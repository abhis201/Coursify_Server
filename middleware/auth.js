const jwt = require('jsonwebtoken')
require("dotenv").config('../.env');

const SECRET = process.env.SECRET

const authenticateJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.split(' ')[1];
      jwt.verify(token, SECRET, (err, user) => {
        if (err) {
          return res.status(403).send(err);
        }
        req.user = user;
        next();
      });
    } else {
      res.sendStatus(401);
    }
};

module.exports = {
  SECRET, authenticateJwt
}