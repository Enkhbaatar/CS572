import { createReadStream } from "fs";

const fileReader = path => {
  console.log(path);
  const stream = createReadStream(path);
  stream.on("data", chunk => {
    process.send(chunk.toString());
  });
  stream.on("end", () => {
    process.send(null);
  });
};

process.on("message", path => {
  fileReader(path);
});
