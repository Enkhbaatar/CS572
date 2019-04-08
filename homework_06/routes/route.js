const express = require("express");
const router = express.Router();

const repository = require("../repository/repository");

router.get("/", (request, response) => {
  if (request.query.id) {
    repository
      .getGradeById(request.query.id)
      .then(grade => response.status(200).json(grade))
      .catch(error => response.status(404).send(error));
  } else {
    repository.getAllGrades().then(grades => response.status(200).json(grades));
  }
});

router.post("/", (request, response) => {
  repository
    .insertGrade(request.body)
    .then(grade => response.status(200).json(grade))
    .catch(error => response.status(404).send(error));
});

router.delete("/:id", (request, response) => {
  repository
    .deleteGrade(request.params.id)
    .then(res => repository.status(200).send(res))
    .catch(error => response.status(404).send(error));
});

module.exports = router;
