const express = require("express");
const groceriesRoute = require("./routes/groceries");

const app = express();
const PORT = 3000;
//app.use() allows us to use middle ware,express.json() allows us to parse the request body properly
app.use(express.json());
app.use(express.urlencoded());

// this is a middle ware function that logs out the routes of where/what a client has done
app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use(groceriesRoute);

app.listen(PORT, () => console.log(`Running Express Server on Port ${PORT}`));
