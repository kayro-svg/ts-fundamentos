(()=>{
  //recibir objetos en una funcion
const login = (data: {email: string, password: number})=>{
  console.log(data.email,data.password);
}
login({
  email: 'kay@kay.co',
  password: 3242342
});
type Sizes = 'S' | 'M' | 'L' | 'XL';

const products: any[] = [];

const addProduct = (data: {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
}) => {
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

})();
