{
  const { from } = rxjs;
  console.log("================Excercise 1================");
  //ES6
  String.prototype.filterWords = function(bannedWords) {
    return this.split(/\s/gm)
      .map(word => (bannedWords.includes(word) ? "***" : word))
      .join(" ");
  };

  console.log("ES6: This house in nice".filterWords(["house", "nice"]));

  //Promise
  const promiseFilter = function(bannedWords) {
    return new Promise(function(resolve, reject) {
      resolve("This house in nice".filterWords(["house", "nice"]));
    });
  };
  promiseFilter().then(value => {
    console.log("Promise: " + value);
  });

  //Async/Await
  async function filterWordsAsync() {
    let result = await promiseFilter();
    console.log("Async: " + result);
  }
  filterWordsAsync();

  //Observable
  from(promiseFilter()).subscribe(e => console.log("Observable: " + e));
}
