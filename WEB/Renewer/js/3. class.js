class Human{

    constructor(name){
        this.name = name;
    }

    sayMyName(){
        console.log("hello this is " + this.name);
    }
}

const person = new Human("문병수");
person.sayMyName();
