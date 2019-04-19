const express = require("express");
const router = express.Router();
let jwt = require('jsonwebtoken');

const key = "secretKey"
router.all('/', (req, res, next) => {
    jwt.verify(req.headers['authorization'], key, function (err, decoded) {
        if (err)
            res.status(401).send(err)
        next();
    });
});

module.exports = router;