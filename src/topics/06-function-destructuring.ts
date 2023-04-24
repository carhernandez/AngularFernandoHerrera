


export interface Product {

description: string;
price:number;
}

interface TaxCalculationOptions{
    tax:number;
    products: Product[];
}

const phone:Product={
    description: "Nokia A1",
    price: 150.0
}

const tablet:Product={
    description: "iPad Air",
    price: 250.0
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

//function taxCalculation(options: TaxCalculationOptions):[number,number]{
//function taxCalculation({tax, products}: TaxCalculationOptions):[number,number]{
export function taxCalculation(options: TaxCalculationOptions):[number,number]{

    const {tax, products}= options;


    let total = 0;

    products.forEach( ({price}) =>{
        total += price;
    });

    return [total, total * tax];
}


export const [total, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});

console.log('Total', total);
console.log('Tax', taxTotal);



