function employee () {
    this.name = "hds",
    this.role = "QA"
}

emp1 = new employee()
emp1.salary = 62828

emp2 = new employee()

console.log(emp1.salary);
console.log(emp2.salary);