export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = { //objeto como tipo
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes
};
