function calculatePrice1(drinkType, size, whippedCream) {
    let basePrice = 2.0; // Base price for a small hot drink without cream

    // Adjust price based on drink type
    if (drinkType === 'blended') {
        basePrice += 1;
    }

    // Adjust price based on size
    if (size === 'M') {
        basePrice += 0.5;
    } else if (size === 'L') {
        if (drinkType === 'cold' || drinkType === 'blended') {
        basePrice += 1;
        } else {
        // L size is only available for cold and blended drinks
        console.error('L size is not available for this drink type.');
        return null;
        }
    }

    // Adjust price based on whipped cream topping
    if (whippedCream) {
        basePrice += 0.5;
    }

    return basePrice;
}

function calculatePrice2(drinkType, size, whippedCream) {
    let basePrice = 2.0; // Base price for a small hot drink without cream

    // Adjust price based on drink type
    if (drinkType === 'blended') {
        basePrice += 1;
    }
    else if (drinkType === 'milk tea'){
        basePrice = 2.25;
    }

    // Adjust price based on size
    if (size === 'M') {
        basePrice += 0.5;
    } else if (size === 'L') {
        if (drinkType === 'cold' || drinkType === 'blended') {
        basePrice += 1;
        } else {
            // L size is only available for cold and blended drinks
            console.error('L size is not available for this drink type.');
            return null;
        }
    }
    else if (size === 'XL'){
        basePrice += 1.5;
    }

    // Adjust price based on whipped cream topping
    if (whippedCream) {
        basePrice += 0.5;
    }

    return basePrice;
}

function calculatePrice3(drinkType, size, whippedCream, chocolateSaucePumps) {
    let basePrice = 2.0; // Base price for a small hot drink without cream

    // Adjust price based on drink type
    if (drinkType === 'blended') {
        basePrice += 1;
    }
    else if (drinkType === 'milk tea'){
        basePrice = 2.25;
    }

    // Adjust price based on size
    if (size === 'M') {
        basePrice += 0.5;
    } else if (size === 'L') {
        if (drinkType === 'cold' || drinkType === 'blended') {
        basePrice += 1;
        } else {
            // L size is only available for cold and blended drinks
            console.error('L size is not available for this drink type.');
            return null;
        }
    }
    else if (size === 'XL'){
        basePrice += 1.5;
    }

    // Adjust price based on whipped cream topping
    if (whippedCream) {
        basePrice += 0.5;
    }

    // Price adjustment based on chocolate sauce
    if (drinkType == 'hot') {
        if (chocolateSaucePumps > 6){
            console.error('Only be added to a maximum of 6 pumps.')
            return null;
        }
        else if (chocolateSaucePumps > 2){
            basePrice += (chocolateSaucePumps - 2) * 0.5;
        }
    }
    else if (chocolateSaucePumps > 0) {
        console.error("Chocolate sauce can only be added to hot drinks.");
        return null;
    }

    return basePrice;
}

function calculatePrice4(drinkType, size, whippedCream, chocolateSaucePumps, breakfastItem, sandwich) {
    let basePrice = 2.0; // Base price for a small hot drink without cream

    // Adjust price based on drink type
    if (drinkType === 'blended') {
        basePrice += 1;
    }
    else if (drinkType === 'milk tea'){
        basePrice = 2.25;
    }

    // Adjust price based on size
    if (size === 'M') {
        basePrice += 0.5;
    } else if (size === 'L') {
        if (drinkType === 'cold' || drinkType === 'blended') {
        basePrice += 1;
        } else {
            // L size is only available for cold and blended drinks
            console.error('L size is not available for this drink type.');
            return null;
        }
    }
    else if (size === 'XL'){
        basePrice += 1.5;
    }

    // Adjust price based on whipped cream topping
    if (whippedCream) {
        basePrice += 0.5;
    }

    // Price adjustment based on chocolate sauce
    if (drinkType == 'hot') {
        if (chocolateSaucePumps > 6){
            console.error('Only be added to a maximum of 6 pumps.')
            return null;
        }
        else if (chocolateSaucePumps > 2){
            basePrice += (chocolateSaucePumps - 2) * 0.5;
        }
    }
    else if (chocolateSaucePumps > 0) {
        console.error("Chocolate sauce can only be added to hot drinks.");
        return null;
    }

    // Adjust prices based on breakfast items
    if (breakfastItem){
        basePrice += 3;
        if (sandwich === 'egg' || sandwich === 'turkey')
            basePrice += 1;
    }

    return basePrice;
}

function calculatePrice5(items){
    let totalPrice = 0.0;

    const priceBreakdown = items.map((item, index) => {
        let itemPrice = calculatePrice4(item.drinkType, 
                                        item.size, 
                                        item.whippedCream, 
                                        item.chocolateSaucePumps, 
                                        item.breakfastItem, 
                                        item.sandwich);
        
        totalPrice += itemPrice;
        return {
            itemId: index + 1,
            itemPrice: itemPrice
        };
    });

    // The tax percentage
    const taxPercent = 0.0725;

    // Calculate the total price including tax
    const totalPriceWithTax = totalPrice * (1 + taxPercent);

    // Return the total price and the price breakdown for each item
    return {
        totalPrice: totalPriceWithTax,
        priceBreakdown: priceBreakdown,
    };
}

module.exports = {
    calculatePrice1,
    calculatePrice2,
    calculatePrice3,
    calculatePrice4,
    calculatePrice5,
}