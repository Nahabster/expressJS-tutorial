const { Router } = require("express");

const router = Router();

const groceryList = [
  {
    item: "milk",
    quantity: 2,
  },
  {
    item: "cereal",
    quanity: 3,
  },
  {
    item: "butter",
    quantity: "1",
  },
];

// this send a response to our localhost3000 server, its sending back the variable containing an array called grocerList
router.get("/groceries", (req, res) => {
  res.send(groceryList);
});
// Route Parameter, :item|| this is supposed to grab the value of whatever you put for the route parameter and console.log it
router.get("/groceries/ :item", (req, res) => {
  const { item } = req.params;
  // this will go through every element of the array and return the item if the condition is true
  const groceryItem = groceryList.find((g) => g.item === item);
  res.send(groceryItem);
});
//request.body is a property that has all the properties that are inside of the request body
router.post("/groceries", (req, res) => {
  console.log(req.body);
  groceryList.push(req.body);
  res.sendStatus(201);
});
module.exports = router;
