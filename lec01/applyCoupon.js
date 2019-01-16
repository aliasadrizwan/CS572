const item = {
    "name" : "Biscuits",
    "type" : "regular",
    "category" : "food",
    "price": 200
}

console.log(applyCoupon(item)(10).price === 180);

function applyCoupon(item){
    return calc;
}

function calc(dis){
    item.price = item.price - (item.price * dis/100);
    return item;
}