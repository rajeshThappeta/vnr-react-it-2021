//access elements from DOM
let h1 = document.getElementById("heading")
let para = document.querySelector(".para")


//provide dynamic content
h1.textContent = "DOM"
para.textContent = "This is a paragraph"


//event handling
let btn = document.querySelector(".btn1")
btn.addEventListener('click', () => {
    //change content
    h1.textContent = "Document Object Model"
    //change style
    h1.style.color = "white"
    h1.style.backgroundColor = "black"
    para.remove()

})


//reading value from inputs
let input1 = document.querySelector("#first")
let input2 = document.querySelector("#second")
let addBtn = document.querySelector(".add")
let result = document.querySelector(".result")
addBtn.addEventListener("click", () => {
    let v1 = input1.value;
    let v2 = input2.value;
    let sum = (+v1) + (+v2);
    result.textContent = sum;

})


let parent = document.querySelector(".parent")
//creating elements
let arr = [10, 20, 23, 34, 45, 454];

for (let v of arr) {
    //create a new element
    let h1 = document.createElement("h1")
    //provide content to that element
    h1.textContent = v;
    //style
    h1.style.color = "blue"
    //add to DOM
    parent.appendChild(h1)

}