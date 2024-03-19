(()=>{
let userId: string | number;
userId = 12312;
userId = 'si';


function greeting(myText: string | number) {
if (typeof myText == 'string') { //de acuerdo al tipado que entre ejecuta una u otra accion
  console.log(`string ${myText.toLocaleLowerCase()}`);
}else{
  console.log(`number ${myText.toFixed(2)}`);
}
}

greeting('Kayro');
greeting(12412.23232);


})();
