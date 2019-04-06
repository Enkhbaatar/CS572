const express = require("express");

const serveIndex = require("serve-index");
const app = express();

app.use("/", serveIndex("../node_modules", { icons: true }));

app.listen(5000, () => {
  console.log("working");
});
