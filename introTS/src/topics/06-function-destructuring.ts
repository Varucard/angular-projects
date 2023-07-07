export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Motorola Moto G41',
  price: 150.0
}

const tablet: Product = {
  description: 'iPad Air',
  price: 250.0
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

// function taxCalculation({tax, products}: TaxCalculationOptions): [number, number] {
export function taxCalculation(options: TaxCalculationOptions): [number, number] {

  const {tax, products} = options;

  let total = 0;

  products.forEach( ({price}) => {total += price; });

  return [total, total * tax];
}

const shoppingCart = [phone, tablet];
const tax = 21;

const [total, taxResolve] = taxCalculation({
  products: shoppingCart,
  tax,
});

// console.log('Total', total);
// console.log('Total', taxResolve);