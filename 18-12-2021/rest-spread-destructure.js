//Rest parameter
function sumOfElements(...a) {
    return a.reduce((acc, element) => acc + element)
}


//console.log(sumOfElements(10, 20))



//Spread syntax
//merging arrays
let arr1 = [10, 20]
let arr2 = [30, 40]
let arr3 = [50, 60]

let mergedArray = [...arr1, ...arr2, ...arr3]
//console.log(mergedArray)


//merge objects
let obj1 = {
    a: 10,
    b: 20
}

let obj2 = {
    c: 30,
    d: 40
}

let mergedObjs = { ...obj1, ...obj2 }
//console.log(mergedObjs)


//Creating copies
let arr = [10, 20]

let copyArr = [...arr]

arr.push(30)

// console.log("Initial array", arr)
// console.log("Copy arr", copyArr)


//Destructuring
let numbers = [10, 20, 30]

let [a, b, c] = numbers
console.log(a)
console.log(b)
console.log(c)


let person = {
    id: 100,
    salary: 30000
}

let {id,salary}=person

console.log(salary)