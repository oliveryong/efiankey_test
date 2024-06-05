function checkDiscount(purchaseValue) {
    if (purchaseValue >= 500) {
        return(`Purchase Value is $${purchaseValue}, discount is 10%`);
    } else if (purchaseValue >= 100 && purchaseValue < 500) {
        return(`Purchase Value is $${purchaseValue}, discount is 5%`);
    } else {
        return(`Purchase Value is $${purchaseValue}, there is no discount.`);
    }
}

// Example usage:
let purchaseValue = 5; // Example value; you can change this to test different cases
let result = checkDiscount(purchaseValue);
console.log(result);
