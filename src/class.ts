class Student{
    name:string;
    rollNo:number;
    age:number;
    constructor(name:string, rollNo:number, age:number)
    {
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
    }

    getName()
    {
        return this.name;
    }
    getRollNo()
    {
        return this.rollNo;
    }
    getAge()
    {
        return this.age;
    }
}

let s1 = new Student("Faziel",107,22);
let s2 = new Student("Saquib",103,20);
console.log(s1,s2);