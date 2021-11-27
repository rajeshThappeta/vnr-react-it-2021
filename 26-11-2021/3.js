var arr = [10, 20, 30]

console.log("Initial array ", arr)
//INSERTIONS
//insert at beginning
var l1 = arr.unshift(100, 200, 300, 400)

console.log("Insertion at beginning ", arr)
//insert at ending
var l1 = arr.push(1, 2)

console.log("Insertion at ending ", arr)


//insert in between
var l1 = arr.splice(3, 0, 123)

console.log("Insertion in between ", arr)



//DELETION
//delete from beginning
var removedElement1 = arr.shift()

console.log("Deletion at begining ", arr)
console.log("Removed element is ", removedElement1)

//delete from ending
var removedElement2 = arr.pop()

console.log("Deletion at ending ", arr)
console.log("Removed element is ", removedElement2)

//delete in between
var removedElement3 = arr.splice(1, 2)

console.log("Deletion in between ", arr)
console.log("Removed element is ", removedElement3)

//replace
var removedElement1 = arr.splice(2, 1, 300)

console.log("after replace", arr)
console.log("Removed element is ", removedElement1)