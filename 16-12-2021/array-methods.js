let arr = [12, 1440, 2, 78, -98, 45, 100, 300]

//filter or selection
//get values less than 50
// let dataLessThan50=arr.filter(function(element){
//     return element<50
// })

let dataLessThan50 = arr.filter(element => element < 50)
console.log(dataLessThan50)

//data between 30 and 200
let dataBetween30And200 = arr.filter(element => element > 30 && element < 200)
console.log(dataBetween30And200)

//modify the elements
let modifiedArr = arr.map(element => element + 10)
console.log(modifiedArr)


//forEach to iterate an array
arr.forEach((element, index) => {
    console.log(`value at index ${index} is ${element}`)
})


//find sum of elements of array
let arr2 = [10, 15, 50]

let sum = arr.reduce((acc, element) => acc + element)
console.log("sum is ", sum)
//acc 10   25 
//element 15  50

//find big
let big = arr.reduce((acc, element) => acc > element ? acc : element)
console.log("Big element is", big)

//find small
let small = arr.reduce((acc, element) => acc < element ? acc : element)
console.log("Small element is", small)


//find 205
let result = arr.find(element => element == -98)
if (result == undefined) {
    console.log("ELement not found")
}
else {
    console.log(("element found"))
}

//find index of searching element
let index = arr.findIndex(element => element ==200)
console.log(index)

console.log(typeof arr)