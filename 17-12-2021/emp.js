//create emp class
class Employee {

    constructor(empId, name, basic, city) {
        this.empId = empId;
        this.name = name;
        this.basic = basic;
        this.city = city;
    }

    //find salary
    //salary=basic+hra(15%basic)+da(10%basic)
    getSalary() {
        let hra = this.basic * 0.15;
        let da = this.basic * 0.10;
        let salary = this.basic + hra + da;
        return salary;
    }

}


let emp1 = new Employee(100, 'ravi', 20000, 'hyd')
console.log(emp1.getSalary())
console.log(emp1)

let emp2 = new Employee(200, 'kiran', 30000, 'chennai')
console.log(emp2.getSalary())





