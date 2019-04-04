const http = require("http");
const path = require("path");
const fs = require("fs");

http
  .createServer(function(req, res) {
    const largeFilePath = path.join(__dirname, "297MBFile.txt");
    let fileSync = fs.readFileSync(largeFilePath);
    //let file = fs.readFile(largeFilePath);
    const stream = fs.createReadStream(largeFilePath);

    res.writeHead(200, { "Content-Type": "application/json" });
    var obj = {
      response: "success"
    };
    res.end(JSON.stringify(obj));
  })
  .listen(5000, () => console.log("listening on 5000"));
