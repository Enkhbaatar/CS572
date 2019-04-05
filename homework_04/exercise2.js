import { createServer } from "http";
import { parse } from "url";
import { fork } from "child_process";
import { join } from "path";
{
  createServer(function(req, res) {
    res.writeHead(200, {
      "Content-type": "text/plain"
    });
    const exerciseURL = parse(req.url, true);
    if (exerciseURL.query.url) {
      const filePath = join(__dirname, exerciseURL.query.url);
      const childProcess = fork("filereader.js");
      childProcess.send(filePath);
      childProcess.on("message", message =>
        message ? res.end(message) : res.end()
      );
    }
  }).listen(5000, () => console.log("listening on 5000"));
}
