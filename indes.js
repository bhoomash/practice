const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
    { name: 'Laptop', price: 999, category: 'electronics' },
    { name: 'Book', price: 15, category: 'education' },
    { name: 'Phone', price: 699, category: 'electronics' },
    { name: 'Pen', price: 2, category: 'office' }
];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);

const electronics = products.filter(product => product.category === 'electronics');
console.log('Electronics:', electronics);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

const totalPrice = products.reduce((acc, product) => acc + product.price, 0);
console.log('Total price:', totalPrice);

const groupedByCategory = products.reduce((acc, product) => {
    if (!acc[product.category]) {
        acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
}, {});
console.log('Grouped by category:', groupedByCategory);

const expensiveTotal = products
    .filter(product => product.price > 100)
    .reduce((acc, product) => acc + product.price, 0);
console.log('Expensive items total:', expensiveTotal);
