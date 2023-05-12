const calculatePrice = require('./Calculating/calculate_price');

// Testcase function calculatePrice1
console.log('Calculate Price 1:', calculatePrice.calculatePrice1('cold', 'M', true)); // 3
console.log('Calculate Price 1:', calculatePrice.calculatePrice1('hot', 'L', true)); // null

// Testcase function calculatePrice5
const items = [
    {
        drinkType: 'cold', 
        size: 'M', 
        whippedCream: true, 
        chocolateSaucePumps: 0, 
        breakfastItem: true, 
        sandwich: null
    },

    {
        drinkType: 'hot', 
        size: 'XL', 
        whippedCream: true, 
        chocolateSaucePumps: 3, 
        breakfastItem: true, 
        sandwich: 'egg'
    }

]

console.log('Price of the order: ', calculatePrice.calculatePrice5(items));