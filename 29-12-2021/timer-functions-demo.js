//3 customers with 3 items

//cust-1
console.log("custromer-1 ordered biryani")
setTimeout(() => {
    console.log("Customer-1 received  biryani")
}, 10000);


//cust-2
console.log("custromer-2 ordered curd rice")
setTimeout(() => {
    console.log("Customer-2 received  curd rice")
}, 5000);

//cust-2
console.log("custromer-3 ordered water bottle")
setTimeout(() => {
    console.log("Customer-3 received  water bottle")
}, 2000);




setInterval(() => {
    console.log("3 secs completed")
}, 3000);