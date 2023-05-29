class info{
    constructor(name, age, self){
        this.name = name;
        this.age = age;
        this.self = self;
    }

    mySelf(){
        console.log(this.name);
        console.log(this.age);
        console.log(this.self);
    }
}

const test = new info("우영우", 27, "기러기 토마토 스위스 역삼역");
test.mySelf();