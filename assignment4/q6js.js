function Person(name) {
    this.name = name;
}

Person.prototype.showName = function() {
    console.log("Name: " + this.name);
};

function Faculty(name, department) {

    Person.call(this, name);

    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function() {
    console.log("Department: " + this.department);
};

function Professor(name, department, subject) {

    Faculty.call(this, name, department);

    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function() {
    console.log("Subject: " + this.subject);
};

let professor1 = new Professor(
    "Rahul",
    "Computer Science",
    "Artificial Intelligence"
);

function showDetails() {

    professor1.showName();

    professor1.showDepartment();

    professor1.showSubject();

    console.log(professor1 instanceof Professor);
    console.log(professor1 instanceof Faculty);
    console.log(professor1 instanceof Person);
}