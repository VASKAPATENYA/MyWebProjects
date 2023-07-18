//OLD WAY
// function Employee(name,age,salary)
// {
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }

// Employee.prototype.showInfos=function(){
//     console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
// }

// const emp=new Employee("Ali", 21,5000);

// console.log(emp);


//ES6 WAY

class Employee
{
    constructor(name,age,salary)
    {
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showInfos()
    {
        console.log("Name: " + this.name + " Age: " + this.age + " Salary: " + this.salary);
    }
}

const emp=new Employee("Ali", 21,5000);
console.log(emp);
emp.showInfos();