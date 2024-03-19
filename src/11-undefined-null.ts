(()=>{
  let number: number;
  let myString: string;

  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;

  function hiOG(name: string | null){
    let hello = 'Hola ';
    if (name) {
      hello += name.toLowerCase();
    }else{
      hello +='nobody';
    }
    console.log(hello);
  }

  function hi(name: string | null){ // misma funcion que la anterior pero con codigo mas limpio
    let hello = 'Hola ';
    hello += name?.toLowerCase() || 'nobody'; //forma abrebiada de un if: si la expresion 'name?.toLowerCase()' no existe, entonces se convierte en null (la otra opcion)
    console.log(hello);
  }

  hi('Nicolas');
  hi(null);

  hiOG('NicolasOG');
  hiOG(null);
})();
