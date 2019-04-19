const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const bycript = require('bycript');
{
    const key = "secretKey"
    const saltRounds = 10;
    const myPlaintextPassword = 's0/\/\P4$$w0rD';

    router.post('/signup', (req, res) => {
        let userData = req.body;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(userData.password, salt, function (err, hash) {
                if (err)
                    res.status(500).send("encryption error");
                userData.password = hash;
            });
        });
        req.dbcollect.insertOne(req.body)
            .then(data => {
                res.status(200).json({ success: true })
            })
            .catch(err => {
                res.status(400).json({ success: false })
            });
    });

    router.post('/signin', (req, res) => {
        let loginData = req.body;
        bcrypt.genSalt(saltRounds, function (err, salt) {
            bcrypt.hash(loginData.password, salt, function (err, hash) {
                if (err)
                    res.status(500).send("encryption error");
                loginData.password = hash;
            });
        });

        req.dbcollect.findOne({
            "user.email": loginData.username,
            "password": loginData.password
        }).then(data => {
            if (data) {
                var token = jwt.sign(data.user, key, { expiresIn: 60 * 60 });
                res.status(200).json({ success: true, token: token })
            } else {
                res.status(403).json({ success: false, message: "Username or passwort doesn't match" });
            }
        }).catch(error => {
            res.status(400).json({ success: false, message: "User not found" });
        })
    });

    router.get('/api', (req, res) => {
        var decoded = jwt.verify(req.headers['authorization'], key);
        req.dbcollect.findOne({
            "user.email": decoded.email
        }).then(data => {
            if (data)
                res.status(200).json({ success: true, user: data.user })
            else
                res.status(403).json({ success: false, message: "User data not found" });

        }).catch(error => {
            res.status(400).json({ success: false, message: "Data Not found" });
        })
    })
}

module.exports = router;