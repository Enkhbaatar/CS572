{
    const express = require("express");
    const cors = require("cors");
    const logger = require("morgan");
    const auth = require("./auth/auth");
    const mongoDB = require("./dbconnection/connection");

    const app = express();
    const port = 5000;

    app.use(cors());
    app.use(express.json());
    app.use(mongoDB());
    app.use('*/api', auth);
    app.use("/", require("./routes/router"));

    app.listen(port, () => console.log("listening port " + port));
}