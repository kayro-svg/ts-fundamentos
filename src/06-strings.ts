(() =>{
let productTitle = 'My amazing Product';


productTitle = 'My product change';
console.log('productTitle', productTitle);

 const productDescription = "My product change";
 console.log('productDescription', productDescription);

 let productPrice =100;
 let isNew: boolean = false;

 const summary = `
 title: ${productTitle}
 description: ${productDescription}
 price: ${productPrice}
 isNew: ${isNew}
 `;
 console.log(summary);
})();
