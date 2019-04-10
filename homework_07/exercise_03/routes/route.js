const express = require("express");
const router = express.Router();

const repository = require("../repository/repository");

router.get("/", (request, response) => {
  if (request.dbcollect) {
    if (request.query.q) {
      console.log(request.query.q);
      request.dbcollect
        .findOne({ 'lecture': request.query.q })
        .then(doc => {
          console.log(doc);
          response.status(200).json(doc);
        })
        .catch(err => response.status(404).json("Lecture is not found"));
    } else {
      request.dbcollect.find({}).toArray((err, docArray) => {
        if (err) throw err;
        response.status(200).json(docArray);
      });
    }
  } else {
  }
});

router.post("/", (request, response) => {
  if (request.dbcollect) {
    request.dbcollect
      .insert(request.body)
      .then(data => {
        response.status(200).send("Lecture saved successfuly");
      })
      .catch(err => {
        console.error(err);
        response.status(500).send(err.errmsg);
      });
  } else {
    response.status(500).send(err.errmsg);
  }
});

router.post("/search/:q", (request, response) => {
  if (request.dbcollect) {
    const result = request.dbcollect
      .findOne({ 'lecture': request.params.q })
      .then(doc => response.status(200).json(doc))
      .catch(err => response.status(404).json("Lecture is not found"));
  } else {
    response.status(500).send(err.errmsg);
  }
});

router.put("/", (request, response) => {
  console.log(require);
  if (request.dbcollect) {
    request.dbcollect
      .update({ '_id': require.body['_id'] }, request.body)
      .then(data => {
        response.status(200).UpdateOne("Update success");
      })
      .catch(err => {
        console.error(err);
        response.status(500).send(err.errmsg);
      });
  } else {
    response.status(500).send(err.errmsg);
  }
});

router.delete("/:id", (request, response) => {
  if (request.dbcollect) {
    console.log(request.params.id);
    request.dbcollect
      .remove({ '_id': request.params.id })
      .then(data => {
        response.status(200).send("Lecture is deleted");
      })
      .catch(err => {
        console.error(err);
        response.status(500).send(err.errmsg);
      });
  } else {
    response.status(500).send(err.errmsg);
  }
});

module.exports = router;
