(() => { // uso de funciones, arrow functions

  type Sizes = 'S' | 'M' | 'L' | 'XL';


  function createProducttoJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const producto1 = createProducttoJson('P1', new Date(), 12, 'L');
  console.log(producto1);
  console.log(producto1.title);
  console.log(producto1.stock);

  const createProducttoJsonV2 = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }
  const producto2 = createProducttoJsonV2('P2', new Date(), 12 );
  console.log(producto2);
  console.log(producto2.title);
  console.log(producto2.stock);
  console.log(producto2.size);
})();
