(() =>{ // generalmente ANY no es normalmente usado en el ambito del desarrollo e ingenieria
let myDynamicVar: any;
myDynamicVar = 100;
myDynamicVar = null;
myDynamicVar = {};
myDynamicVar = '';

myDynamicVar = 'hola';
//forzar una variable a que sea tipo string, haciendo un CAST: transformar de un tipo a otro
const rta = (myDynamicVar as string).toLocaleLowerCase(); // al transformarlo a string ya me da todas las funciones disponibles para un string
console.log(rta);


//de igual forma funciona para transformar la variable a number
myDynamicVar = 1212;
// <number> : forma en ts para realizar casts, y de esta forma se puede definir el tipo
const rta2 = (<number>myDynamicVar).toFixed();
console.log(rta2);
})();
