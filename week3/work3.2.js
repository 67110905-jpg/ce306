
let productPrice = 600;
let discountPercentage = 15;


let discountAmount = productPrice * (discountPercentage / 100);
let priceAfterDiscount = productPrice - discountAmount;

console.log(`ราคาสินค้าเดิม: ${productPrice} บาท`);
console.log(`ส่วนลด ${discountPercentage}%: ${discountAmount} บาท`);
console.log(`ราคาหลังหักส่วนลด: ${priceAfterDiscount} บาท`);


if (productPrice <= 0) {
    console.log("ราคาสุดท้าย: 0 บาท");
}

if (productPrice > 0 && priceAfterDiscount <= 500) {
    let finalPrice = priceAfterDiscount + 50;
    console.log("เพิ่มค่าจัดส่ง: 50 บาท");
    console.log(`ราคาสุดท้าย: ${finalPrice} บาท`);
}

if (productPrice > 500) {
    let extraDiscount = priceAfterDiscount * 0.10;
    let finalPrice = priceAfterDiscount - extraDiscount;
    console.log(`ส่วนลดพิเศษ 10%: ${extraDiscount} บาท`);
    console.log(`ราคาสุดท้าย: ${finalPrice} บาท`);
}