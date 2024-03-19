(()=>{
  //tipar explicitamente una funcion
const calcTotal = (prices: number[]): string =>{ //se establece que el resultado si o si tiene que mostrarse como string
  let total = 0;
  prices.forEach((item) =>{
    total += item;
  });
  return total.toString();
}
//const rta = calcTotal([1,2,3,1,3]);
//console.log(rta);

const printTotal = (prices: number[]) : void =>{ // retorno explicito de void
  const rta = calcTotal(prices);
  console.log(`El total es ${rta}`);
}

printTotal([1,2,2,4,2]);
})();
