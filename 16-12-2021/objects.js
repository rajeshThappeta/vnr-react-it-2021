//create student object
let student = {
    sno: 100,
    name: 'ravi',
    age: 21,
    city: 'hyderabad'
}

//add mobile
student.mobile = 99999
//add designation
student.designation = "cr"

//remove age
delete student.age

//modify city
student.city = 'chennai'


//iterate student obj
for (let k in student) {
    console.log(student[k])
}


