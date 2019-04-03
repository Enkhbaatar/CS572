{
  function evenNumFilter(array) {
    return new Promise(function(resolve, reject) {
      resolve(array.filter(num => num % 2 == 0));
    });
  }
  //Promise Async/await
  Array.prototype.even = async function() {
    let result = await evenNumFilter(this);
    console.log(result);
  };

  //Promise
  Array.prototype.evenPromise = function() {
    let array = this;
    new Promise(function(resolve, reject) {
      resolve(array.filter(num => num % 2 == 0));
    }).then(data => console.log(data));
  };

  //setTimeOut
  Array.prototype.odd = function() {
    setTimeout(() => console.log(this.filter(num => num % 2 == 1)), 0);
  };

  console.log("start");
  [1, 2, 3, 4, 5, 6, 7, 8].evenPromise();
  [1, 2, 3, 4, 5, 6, 7, 8].even();
  [1, 2, 3, 4, 5, 6, 7, 8].odd();
  console.log("end");
}
