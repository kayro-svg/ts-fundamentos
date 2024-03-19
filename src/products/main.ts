import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title:"Pro1",
  createdAt:new Date(1993,1,1),
  stock:40
});
console.log(products);

addProduct({
  title:"Pro2",
  createdAt:new Date(1993,1,1),
  stock:20,
  size:"XL"
});

addProduct({
  title:"Pro3",
  createdAt:new Date(1993,1,1),
  stock:50,
  size:"XL"
});

console.log(products);
const total = calcStock();
console.log(total);
