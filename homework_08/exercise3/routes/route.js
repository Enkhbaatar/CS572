const express = require("express");
const router = express.Router();
{
    router.get('/', (req, res) => {
        req.dbcollect.createIndex({ 'location': '2dsphere' });

        req.dbcollect.find({ location: { $near: { $geometry: { type: "Point", coordinates: [-91.9665342, 41.017654] }, $maxDistance: 2000 } } }).limit(3).toArray((err, arr) => {
            if (err) throw err;
            res.json(arr)
        });
    });

    router.post('/', (req, res) => {
        req.dbcollect.insertMany(req.body).then(data => res.send("Success")).catch(err => console.error(err));
    });
}

module.exports = router;