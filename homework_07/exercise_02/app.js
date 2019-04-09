{
  const express = require("express");
  const MongoClient = require("mongodb").MongoClient;

  const app = express();
  const port = 5000;
  const dbname = "homework01";
  const username = "homework01";
  const password = "homework01";
  const client = new MongoClient(
    `mongodb://${username}:${password}@ds233806.mlab.com:33806/${dbname}`
  );

  app.use((req, res, next) => {
    client.connect(function(err) {
      const db = client.db(dbname);
      if (db) {
        req.db = db;
        next();
      } else {
        console.error(db);
      }
    });
  });

  app.use("/secret", require("./routes/secret"));
  app.listen(port, () => console.log("listening port " + port));
}
