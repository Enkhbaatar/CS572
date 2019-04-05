{
  const express = require("express");
  const axios = require("axios");
  const app = express();

  app.set("env", "development");
  app.enable("trust proxy");
  app.enable("case sensitive routing");
  app.set("x-powered-by", false);

  const port = 5000;
  const dataURL = "https://randomuser.me/api/?results=10";

  app.listen(port, () => {
    console.log("listening port " + port);
  });

  //Handle a user get request
  app.get("/users", (req, res) => {
    getUser(res);
  });

  async function getUser(res) {
    try {
      const response = await axios.get(dataURL);
      res.set({
        "Cache-control": "private, max-age=86400",
        "Last-Modified": new Date(),
        Link:
          `<https://randomuser.me/api/?page=1&results=10>; rel="first",` +
          `<https://randomuser.me/api/?page=${response.data.info.page +
            1}&results=10&seed=${response.data.info.seed}>; rel="next",` +
          `<https://randomuser.me/api/?page=${response.data.info.page -
            1}&results=10&seed=${response.data.info.seed}>; rel="prev",`
      });
      console.error(response.data);
      res.json(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
