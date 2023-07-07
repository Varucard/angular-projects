import {Product, taxCalculation} from './06-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: 'Motorola',
    price: 100
  },
  {
    description: 'Ipad',
    price: 150
  }
];

const [total, tax] = taxCalculation({tax: 21, products: shoppingCart});

console.log('Total', total);
console.log('Tax', tax);