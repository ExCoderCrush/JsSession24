
//Parent Class
class Employee{
    #id //private field
    constructor(id,name,department){
        this.#id=id;
        this.name=name;
        this.department=department;
        this.position="Employee";
    }
    getDetails(){
        console.log(`Employee ID: ${this.#id}, Name: ${this.name}, Department: ${this.department}, Position:${this.position}`);
    }
    getId(){
        return this.#id;
    }
    setID(newId){
        if(typeof newId=== 'number' && newId>0){
            this.#id=newId;
        }
        else{
            console.log("Invalid Id. Please enter a valid number.");
        }
    }
}

//Child Class
class Manager extends Employee{
    constructor(name, id, department,teamSize){
        super(name, id , department,teamSize);
        this.teamSize=teamSize;
        this.position="Manager";
    }
    manageTeam(){
        console.log(`${this.name} is managing a team of ${this.teamSize} people.`)
    }
    promoteEmployee(employee,newdepartment, newPosition){
        employee.position=newPosition;
        employee.department=newdepartment;
        console.log(`${employee.name} has been promoted to ${newPosition} in ${newdepartment} department by Manager ${this.name}.`);
        
    }
    getDetails() {
        return `${super.getDetails()}, Team Size: ${this.teamSize} `;
    }
    

}


//Child Class
class Intern extends Employee{
    constructor(id, name ,department, duration){
        super(id, name, department, duration);
        this.duration=duration;
        this.position="Intern";
    }   

    extendsInternship(extraMonths){
        this.duration+=extraMonths;
        console.log(`${this.name}'s Internship is extended by ${extraMonths} Months. New Duration :${this.duration} Months.`)
    }

    getDetails() {
        return `${super.getDetails()}, Internship Duration: ${this.duration} months`;
    }
}


class partTimeEmployee extends Employee{
    constructor(id ,name,department,hourlyRate){
        super(id,name,department);
        this.hourlyRate=hourlyRate;
        this.position="Part-Time";
    }
    calculateSalary(hoursWorked){
        const salary=hoursWorked*this.hourlyRate;
        console.log(`${this.name} will earn ₹${salary} for ${hoursWorked} hours of work.`);
        return salary;

    }

}

const emp1=new Employee(101,"Alice","HR");
const emp2=new Employee(102,"John","IT");
const emp3=new Employee( 110,"Arjun", "Sales");
emp1.getDetails();
emp2.getDetails();
emp3.getDetails();

const mrg1=new Manager(201,"Bob","IT",10); // Manager Class Object
mrg1.manageTeam();

const intern1=new Intern(301,"Charlie","Marketing",3); // Intern Class Object
intern1.getDetails();
intern1.extendsInternship(2);
mrg1.promoteEmployee(emp3,"Marketing","Senior Executive");

const pte1=new partTimeEmployee(302,"Reena","Support",100); // PartTimeEmployeee Class object
pte1.getDetails();
pte1.calculateSalary(10);

emp1.getDetails();
mrg1.getDetails();
intern1.getDetails();

emp3.setID(103);
console.log(emp3.getId());
emp3.getDetails();
