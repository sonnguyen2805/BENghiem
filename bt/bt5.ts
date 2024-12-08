// Lớp cha Employee
class Employee {
    name: string;
    position: string;
    salary: number;

    constructor(name: string, position: string, salary: number) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    getDetails(): string {
        return `Name: ${this.name}, Position: ${this.position}, Salary: $${this.salary}`;
    }
}

// Lớp Manager kế thừa Employee
class Manager extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Manager", salary);
    }
}

// Lớp Developer kế thừa Employee
class Developer extends Employee {
    constructor(name: string, salary: number) {
        super(name, "Developer", salary);
    }
}

// Tạo danh sách nhân viên
const employees: Employee[] = [
    new Manager("Alice", 90000),
    new Developer("Bob", 70000),
    new Developer("Charlie", 75000),
    new Manager("Diana", 95000),
];

// In thông tin chi tiết của từng nhân viên
employees.forEach((employee) => {
    console.log(employee.getDetails());
});
