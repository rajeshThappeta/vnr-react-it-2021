//6 x 50=300 lines  (object literal)
//6+50=56 lines  (constructor function)

let student1 = {
    sno: 100,
    name: 'madhu',
    fee: 20000,
    feePaid: 2000,
    skills: ['java', 'html', 'javascript'],
    address: {
        street: 'KPHB',
        city: 'Hyd'
    },

}






















//create student constructor function
function Student(sno, name, fee, feePaid, skills, address) {

    //object initialization logic
    this.sno = sno;
    this.name = name;
    this.fee = fee;
    this.feePaid = feePaid
    this.skills = skills;
    this.address = address;

}

//add function to prototype of constructor function
Student.prototype.getFeeStatus = function () {
    if (this.fee === this.feePaid) {
        return "paid"
    }
    else {
        return "pending"
    }
}



//class synatx for Student
class StudentInfo {
    //this method is called automatically when a new obj is created
    constructor(sno, name, fee, feePaid, skills, address) {
        //obj initialization logic
        this.sno = sno;
        this.name = name;
        this.fee = fee;
        this.feePaid = feePaid
        this.skills = skills;
        this.address = address;

    }


    getFeeStatus() {
        if (this.fee === this.feePaid) {
            return "paid"
        }
        else {
            return "pending"
        }
    }
}




//create an object
let std1 = new StudentInfo(100, 'ravi', 20000, 12000, ['c', 'cpp'], { street: 'KPHB' })
let std2 = new StudentInfo(200, 'sravani', 20000, 12000, ['html', 'css'], { street: 'Ameerpet' })


console.log(std1)
console.log(std2.getFeeStatus())
