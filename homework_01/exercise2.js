{
  console.log("================Excercise 2================");

  function isWeekend() {
    const todayDate = new Date();
    const day = todayDate.getDate();
    let days = [
      "weekend",
      "weekday",
      "weekday",
      "weekday",
      "weekday",
      "weekday",
      "weekend"
    ];
    return days[day];
  }
  console.log(isWeekend());
}
