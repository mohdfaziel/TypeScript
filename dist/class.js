"use strict";
class Student {
    constructor(name, rollNo, age) {
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    getRollNo() {
        return this.rollNo;
    }
    getAge() {
        return this.age;
    }
}
let s1 = new Student("Faziel", 107, 22);
let s2 = new Student("Saquib", 103, 20);
console.log(s1.getName(), s2.getName());
