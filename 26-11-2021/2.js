//declare an array
var arr = [10, 20, 30, 40]

console.log("Using for loop")
console.log("------------------")
//for 
for (var index = 0; index < arr.length; index++) {

    console.log(arr[index])
}



console.log("Using while loop")
console.log("------------------")
//while
var index = 0;
while (index < arr.length) {

    console.log(arr[index]);
    index++;
}

console.log("Using for-of loop")
console.log("------------------")
//for -of loop
for (var v of arr) {

    console.log(v)
}