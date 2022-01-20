const items = {
  yoga: { price: 100 },
  spin: { price: 80 },
  boxing: { price: 60 },
  spa: { price: "50" },
};

const itemsArray = Object.entries(items);

const basket = [];

const addItemToBasket = (className) => {
  const individualItem = itemsArray.find((item) => item.includes(className));
  basket.push(individualItem);

  console.log(basket);
};

const calculateBasketPrice = () => {
  const basketTotal = [];

  basket.forEach((item) =>
    item.forEach((a) => {
      if (a.price != undefined) {
        basketTotal.push(a.price);
      }
    })
  );

  const price = basketTotal.reduce((total, price) => total + price, 0);

  console.log(price);
};

const removeItemFromBasket = (className) => {
  basket.splice(
    basket.findIndex((item) => item.includes(className)),
    1
  );

  console.log(basket);
};

const testScript = () => {
  addItemToBasket("yoga");
  addItemToBasket("spin");
  addItemToBasket("boxing");
  calculateBasketPrice();
  removeItemFromBasket("spin");
  calculateBasketPrice();
};

testScript();
