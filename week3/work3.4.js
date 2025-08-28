const products = [
    { price: 100, discount: 10 },
    { price: 200, discount: 15 },
    { price: 150, discount: 5 },
    { price: 300, discount: 20 },
    { price: 250, discount: 12 }
];

function calculateTotal() {
    let totalPrice = 0;
    
    products.forEach((product) => {
        let discountAmount = product.price * (product.discount / 100);
        let priceAfterDiscount = product.price - discountAmount;
        totalPrice = totalPrice + priceAfterDiscount;
    });
    
    console.log(`Total price after discount: $${totalPrice.toFixed(2)}`);
}

calculateTotal();