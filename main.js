const calculatePrice = require('./Calculating/calculate_price');

// Testcase function calculatePrice1
console.log('Calculate Price 1:', calculatePrice.calculatePrice1('cold', 'M', true)); // 3
console.log('Calculate Price 1:', calculatePrice.calculatePrice1('hot', 'L', true)); // null

// Testcase function calculatePrice2
console.log('Calculate Price 2:', calculatePrice.calculatePrice2('blended', 'XL', false)); // 4.5
console.log('Calculate Price 2:', calculatePrice.calculatePrice2('milk tea', 'XL', false)); // 3.75

// Testcase function calculatePrice3
console.log('Calculate Price 3:', calculatePrice.calculatePrice3('hot', 'XL', false, 2)); // 3.5
console.log('Calculate Price 3:', calculatePrice.calculatePrice3('hot', 'XL', false, 4)); // 4.5
console.log('Calculate Price 3:', calculatePrice.calculatePrice3('hot', 'XL', false, 7)); // null

// Testcase function calculatePrice4
console.log('Calculate Price 4:', calculatePrice.calculatePrice4('hot', 'XL', false, 4, false, null)); // 3.5
console.log('Calculate Price 4:', calculatePrice.calculatePrice4('hot', 'XL', false, 4, true, null)); // 7.5
console.log('Calculate Price 4:', calculatePrice.calculatePrice4('hot', 'XL', false, 4, true, 'egg')); // 8.5

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
        whippedCream: false, 
        chocolateSaucePumps: 3, 
        breakfastItem: true, 
        sandwich: 'egg'
    },

    {
        drinkType: 'blended', 
        size: 'L', 
        whippedCream: true, 
        chocolateSaucePumps: 0, 
        breakfastItem: true, 
        sandwich: null
    },

]

console.log('Price of the order: ', calculatePrice.calculatePrice5(items));