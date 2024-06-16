const jsonServer = require('json-server');
const fs = require('fs');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router({
  Crusts: JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'Crusts.json'))),
  PizzaSize: JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'PizzaSize.json'))),
  Toppings: JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'Toppings.json')))
});
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log('JSON Server is running');
});