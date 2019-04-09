{
  const express = require("express");
  const router = express.Router();

  const projection = { _id: 0 };
  const collectionName = "data";

  router.get("/", (request, response) => {
    if (request.db) {
      const doc = request.db.collection(collectionName).findOne({}, projection);
      doc
        .then(doc => {
          var encryptor = require("simple-encryptor")(doc.key);
          var decrypted = encryptor.decrypt(doc.message);
          response.send(decrypted);
        })
        .catch(err => console.error(err));
    } else {
      response.status(500).send("Something happened");
    }
  });
  module.exports = router;
}
