{
  const os = require("os");
  const { Observable } = require("rxjs");

  const observable = new Observable(observer => {
    console.log("Checking your system");
    if (os.totalmem() < Math.pow(2, 32)) {
      observer.next("This app needs at least 4GB of RAM");
      observer.complete();
    } else if (os.cpus().length < 2) {
      observer.next("Process is not supported");
      observer.complete();
    } else {
      observer.next("System is checked suscessfully");
      observer.complete();
    }
  });

  function checkSystem() {
    observable.subscribe({
      next: value => console.log(value)
    });
  }

  checkSystem();
}
