{
  console.log("================Excercise 3================");
  const item = {
    name: "Avocado",
    type: "Friut",
    category: "Food",
    price: 200
  };

  function applyCoupon(item) {
    return function(discount) {
      item.price -= (item.price * discount) / 100;
      return item;
    };
  }

  console.log(applyCoupon(item)(10).price === 180);
}
