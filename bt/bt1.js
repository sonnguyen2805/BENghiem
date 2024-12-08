var Student = /** @class */ (function () {
    function Student(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    Student.prototype.display = function () {
        console.log("Student name: ".concat(this.name));
        console.log("Age: ".concat(this.age));
        console.log("Grade: ".concat(this.grade));
    };
    return Student;
}());
var student1 = new Student("Son", 19, "10th grade");
student1.display();
