class Animal{

    constructor(){
        console.log("Animal created");
    }
    sound(){
        console.log("Animal makes a sound");
    }
}

class Cat extends Animal{
 constructor(){
        console.log("Cat created");
    }
}

const a=new Cat();
a.sound();