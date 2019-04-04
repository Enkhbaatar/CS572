const EventEmitter = require("events");
class Gym extends EventEmitter {
  constructor() {
    super();
    this.message = "Athlete is working out";
    //Question 2
    this.on("boom", data => {
      console.log(data);
    });
  }

  //Question 1
  visit() {
    setInterval(() => {
      this.emit("boom", this.message);
    }, 1000);
  }
}

var gym = new Gym();
gym.visit();
