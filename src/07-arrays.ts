(()=>{
let prices = [1,2,2,2,1,1, 'hola', true ];

prices.push(1212121);
prices = [1,2,2];

let products = ['hola', true ];
products.push(false);


let mixed: (number | string | boolean | object)[] = ['hola', true];
mixed.push(50);
mixed.push('as');
mixed.push(true);
mixed.push({});
mixed.push([]);

let numbers = [1,2,2,2,1,1];
numbers.map(item => item * 2)
})();
