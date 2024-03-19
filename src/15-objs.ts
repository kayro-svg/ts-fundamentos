(()=>{
type Sizes = 'S' | 'M' | 'L' | 'XL';
type Product = { //objeto como tipo
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}
const products: Product[] = [];

const addProduct = (data: Product) => {
products.push(data);
}

addProduct({
  title: 'pro1',
  createdAt: new Date(1996,2,5),
  stock: 20
});

addProduct({
  title: 'pro1',
  createdAt: new Date(1996,2,5),
  stock: 20,
  size: 'L'
});

console.log(products);
products.push({
  title: 'Prod3',
  createdAt: new Date(1992,23,2),
  stock: 50,
  size: "L"
})
})();
