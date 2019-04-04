const http = require("http");
const path = require("path");
const fs = require("fs");
const start_time = Date.now();
http
  .createServer(function(req, res) {
    const largeFile = path.join(__dirname, "minecraft.exe");
    let fileSync = fs.readFileSync(largeFile);
    //let file = fs.readFile(largeFile);
    console.log(Date.now() - start_time);
    res.end(fileSync);
    //var stream = fs.createReadStream(largeFile).pipe(res);
  })
  .listen(5000, () => console.log("listening on 5000"));
