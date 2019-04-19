{
    const MongoClient = require("mongodb").MongoClient;

    const dbname = "homework";
    const username = "enkhee";
    const password = "enkhee";
    const collectionName = "users";

    const uri = `mongodb+srv://${username}:${password}@mwacluster-mdjim.mongodb.net/${dbname}?retryWrites=true`;

    function dbConnection() {
        return function (req, res, next) {
            const client = new MongoClient(uri, { useNewUrlParser: true });
            client.connect(err => {
                if (err) throw err;
                const dbcollect = client.db(dbname).collection(collectionName);
                if (dbcollect) {
                    req.dbcollect = dbcollect;
                    req.dbcollect.createIndex({ "user.email": 1 })
                    next();
                } else {
                    console.error("db null");
                }
            });
        };
    }

    module.exports = dbConnection;
}
