// emp1={
//     name:"Ali",
//     lastName:"Bakır"
// }

// console.log(emp1)

function Employee(Name)//Constructor Function
{
    this.name=Name
    console.log(this)
}

const emp1=new Employee("Mehmet");
const emp2=new Employee("Ahmet");

