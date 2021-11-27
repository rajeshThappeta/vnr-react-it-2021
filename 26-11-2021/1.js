//function declaration
function findBig(first, second) {


    if (first > second) {
        return "first one is big"
    }
    else if (first == second) {
        return "Both are equal"
    }
    else {
        return "Second one is big"
    }
}


//calling a function
var result = findBig(100, 100)
//console.log(result)



//function expression
var findBig1 = function (first, second) {


    if (first > second) {
        return "first one is big"
    }
    else if (first == second) {
        return "Both are equal"
    }
    else {
        return "Second one is big"
    }
}



var result1 = findBig1(100, 102)
//console.log(result1)









//function declaration to find sum of two numbers
function findSumOfTwoNumbers1(first, second) {

    return first + second
}

//call
var sum = findSumOfTwoNumbers1(10, 20)
console.log("sum is ", sum)


//function expression to find sum of two numbers
var findSumOfTwoNumbers2 = function (first, second) {

    return first + second
}


//arrow function
var findSumOfTwoNumbers3 = (first, second) => first + second



//find big

var big1 = function (a, b) {
    return a > b ? a : b
}

var bigNumber = big1(100, 20)
console.log(bigNumber)


//arrow function
var big2 = (a, b) => a > b ? a : b