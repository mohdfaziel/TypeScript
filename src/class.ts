class Student{
    name:string;
    readonly rollNo:number;
    age:number;
    private Id:number;
    constructor(name:string, rollNo:number, age:number)
    {
        this.name = name;
        this.rollNo = rollNo;
        this.age = age;
        this.Id = Math.ceil(Math.random()*100); 
    }

    getId()
    {
        return this.Id;
    }
}

let s1 = new Student("Faziel",107,22);
let s2 = new Student("Saquib",103,20);
console.log(s1.getId());
console.log(s2.getId());
s1.name = "sahil";
console.log(s1);