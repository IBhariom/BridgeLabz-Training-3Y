// abstract interface
// we do not have abstract class in js so we use Private
// abstraction provides security to methods 
class Student{
    #studentId=101;

    show(){
        this.#getDetails();
        console.log("Show method");
    }
    #getDetails(){
        console.log("Student ID is "+this.#studentId);
    }
}

const a=new Student();

a.show();