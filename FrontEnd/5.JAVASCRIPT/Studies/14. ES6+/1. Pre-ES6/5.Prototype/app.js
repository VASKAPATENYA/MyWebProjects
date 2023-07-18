function Employee(name,age)
{
    this.name=name;
    this.age=age;
}

Employee.prototype.showInfos= function()
{
    console.log("Name: " + this.name + " Age: " + this.age)
}

const emp1=new Employee("Ali", 21);
const emp2=new Employee("Ahmet", 23);

emp1.showInfos();
emp2.showInfos();