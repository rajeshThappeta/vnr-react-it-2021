let iamBusy = true;

//I will call you in 10 mins
// let callYouPromise = new Promise((fulfilled, rejected) => {

//     if (iamBusy == false) {
//         setTimeout(() => {
//             fulfilled("hello..frnd..how  r u")
//         }, 10000);
//     }
//     else {
//         setTimeout(() => {
//             rejected("Sorry frnd..call you later")
//         }, 10000);
//     }
// })


//consume the promise
// callYouPromise
//     .then((message) => { console.log("message is ", message) })
//     .catch((err) => { console.log("err is ", err) })





let technicalIssues = true

//promise made by music director about new number in 5 days
let promiseOfMusicDirector = new Promise((fulfilled, rejected) => {

    if (technicalIssues == false) {
        setTimeout(() => {
            fulfilled("Hi guys..song is out..enjoy...")
        }, 5000);

    }
    else {
        setTimeout(() => {
            rejected("SOrry guys..new date will be soon")
        }, 5000);
    }
})


//fans consuming the promise made by music director
promiseOfMusicDirector
    .then((message) => { console.log("message is ", message) })
    .catch((err) => { console.log("err ", err) })




console.log("other task-1")

console.log("other task-2")

console.log("other task-3")