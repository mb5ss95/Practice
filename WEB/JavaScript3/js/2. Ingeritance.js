class Hero {
    constructor(hp) {
      this.hp = hp;
    }
    walk() {
      console.log("조금 빠르게 걷기");
    }
    run() {
      this.hp = this.hp - 10;
    }
  }
  
  class SuperMan extends Hero {
    constructor(hp, mp) {
      super(hp);
      this.mp = mp;
    }
    walk() {
      super.walk();
      console.log("완전 빠르게 걷기");
    }
    fly() {
      console.log("fly");
      console.log(this.hp);
    }
  }
  
  const superman = new SuperMan(100, 100);
  
  superman.run();
  superman.walk();
  superman.fly();