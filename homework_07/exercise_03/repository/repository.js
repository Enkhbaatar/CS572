let Grade = require("../model/grade");
class Repostory {
  init(db) {
    this.db = db;
    this.grades = [];
    this.grades.push(new Grade(1, "Asaad Saad", "MWA", "100"));
    this.grades.push(new Grade(2, "Enkhbaatar Tumenbayar", "MWA", "100"));
    this.grades.push(new Grade(3, "Elise", "WAA", "95"));
  }

  getAllGrades() {
    return new Promise(resolve => {
      return resolve(this.grades);
    });
  }

  getGradeById(id) {
    return new Promise((resolve, reject) => {
      this.grades.forEach(grade => {
        if (grade.id == id) return resolve(grade);
      });
      return reject("Not Found");
    });
  }

  insertGrade(grade) {
    return new Promise(resolve => {
      this.grades.push(grade);
      return resolve("Success");
    });
  }

  deleteGrade(id) {
    return new Promise((resolve, reject) => {
      for (let i = 0; i < this.grades.length; i++) {
        if ((this.grades[i].id = id)) {
          this.grades.splice(i, 1);
          return resolve("Grade Deleted");
        }
      }
      return reject("Not Found");
    });
  }
}

module.exports = new Repostory();
