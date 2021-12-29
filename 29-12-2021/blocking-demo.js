console.log("statement-1")

//blocking
for (let i = 1; i < 10000000000; i++) {

}

console.log("statement-2")
console.log("statement-3")

function test() {
    console.log("test is called")
}


test()