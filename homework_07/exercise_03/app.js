{
  const express = require("express");
  const cors = require("cors");
  const logger = require("morgan");
  const mongoDB = require("./db/dbconnection");

  const app = express();
  const port = 5000;
  app.use(cors());
  app.use(logger("access"));
  app.use(express.json());

  app.use(mongoDB());
  app.use("/api/lectures", require("./routes/route"));

  app.listen(port, () => console.log("listening port " + port));
}
