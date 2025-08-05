class Student{
    name:string;
    readonly rollNo:number;
    protected age:number;
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
        console.log("From Student");
        return this.Id;
    }
    greet()
    {
        console.log("Hey Regular Student",this.name);
    }
}

class LateralStudent extends Student{
    joiningYear:number;
    sectionAlloted:string;
    constructor(name:string, rollNo:number, age:number, joiningYear:number, sectionAlloted:string)
    {
        super(name,rollNo,age);
        this.joiningYear = joiningYear;
        this.sectionAlloted = sectionAlloted;
        this.age = age-1;
    }
    greet()
    {
        console.log("Hey Lateral Student",this.name);
    }
}
let s1 = new Student("Faziel",107,22);
let ls = new LateralStudent("Saquib",103,20,2023,"B");
console.log(s1);
console.log(ls);
s1.greet();
ls.greet();