var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Lớp cha Employee
var Employee = /** @class */ (function () {
    function Employee(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
    Employee.prototype.getDetails = function () {
        return "Name: ".concat(this.name, ", Position: ").concat(this.position, ", Salary: $").concat(this.salary);
    };
    return Employee;
}());
// Lớp Manager kế thừa Employee
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, salary) {
        return _super.call(this, name, "Manager", salary) || this;
    }
    return Manager;
}(Employee));
// Lớp Developer kế thừa Employee
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer(name, salary) {
        return _super.call(this, name, "Developer", salary) || this;
    }
    return Developer;
}(Employee));
// Tạo danh sách nhân viên
var employees = [
    new Manager("Alice", 90000),
    new Developer("Bob", 70000),
    new Developer("Charlie", 75000),
    new Manager("Diana", 95000),
];
// In thông tin chi tiết của từng nhân viên
employees.forEach(function (employee) {
    console.log(employee.getDetails());
});
