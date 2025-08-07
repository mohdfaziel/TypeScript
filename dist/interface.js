"use strict";
class Students {
    constructor(name, age, email, rollNo) {
        this.age = age;
        this.name = name;
        this.email = email;
        this.rollNo = rollNo;
    }
}
class Teachers {
    constructor(name, age, email, employId) {
        this.age = age;
        this.name = name;
        this.email = email;
        this.employId = employId;
    }
}
let s = new Students("Faziel", 223, "mohdfazel@gmail.com", 107);
let t = new Teachers("Faziel", 223, "mohdfazel@gmail.com", 112864);
console.log(s, t);
