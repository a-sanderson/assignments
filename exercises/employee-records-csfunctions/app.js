const employees = [];
function Employee(name, jobTitle, salary, status){
    this.name= name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = "fullTime"
    this.printEmployeeForm = function(){
        console.log(`${this.name} is a ${this.jobTitle} on a ${this.salary} per year salary with a status of ${this.status}`)
    }
}
const harold = new Employee("harold", "janitor", 25000,);
console.log(harold.printEmployeeForm())
const ryan = new Employee("Ryan", "pooper-scooper", 10000);
const jake = new Employee("Jake", "mustache-man", 32000);
employees.push(harold, ryan, jake);
console.log(employees)