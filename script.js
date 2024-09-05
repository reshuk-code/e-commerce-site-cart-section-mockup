const products = [
    document.querySelector('products'),
]
const productList1 = {
       "product-name" : "Air Jordan",
        "size" : "Size - 11",
        "price" :   15 
}


const list = Object.values(productList1)
const value = document.getElementById('description');
const showPrice = value.innerHTML = list ;


let rawValue = 1; 

const test = document.getElementById('quantity');
test.innerHTML = rawValue;


function increaseQuantity() {
    if (rawValue < 10) {
        rawValue += 1; 
        test.innerHTML = rawValue; 
        updateBill();
    }
}


function decreaseQuantity() {
    if (rawValue > 1) {
        rawValue -= 1; 
        test.innerHTML = rawValue; 
        updateBill();
    }
}



const summary = document.getElementById("bill");

function updateBill(){
 const bill = {
    "product-name": "Air Jordan",
    "size": "Size - 11",
    "price": `${productList1.price}`,
    "quantity": `${rawValue}`,
    "total": `${productList1.price * rawValue}`
 }
 summary.innerHTML = `
                Product Name: ${bill['product-name']}<br>
                Size: ${bill.size}<br>
                Price: ${bill.price}<br>
                Quantity: ${bill.quantity}<br>
                Total: $${bill.total}
            `;
}


document.getElementById('increase').addEventListener('click', increaseQuantity);
document.getElementById('decrease').addEventListener('click', decreaseQuantity);


function orderPlaced(){
var order = "Thank you for your purchase <3 !";
    alert (order);
}

updateBill();