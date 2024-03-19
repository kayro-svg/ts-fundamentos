
import { Product } from "./product.model";



export const products: Product[] = [];

export const addProduct = (data: Product) => { // funcion para agregar productos
products.push(data);
}

//funcion para sumar el stock del array
export const calcStock = ():number => {
  let total = 0;
  products.forEach((item)=> {
    total += item.stock;
  });
  return total;
};
