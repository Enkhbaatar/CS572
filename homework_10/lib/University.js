"use strict";
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("Graduation " + this.dept + " " + year + " students");
    };
    return University;
}());
var mum = new University("MUM", "Computer science");
mum.graduation(2019);
