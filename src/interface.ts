interface Person {
    name:string,
    age:number,
    readonly email:string
}

class Students implements Person {
    name:string;
    age:number;
    readonly email:string;
    rollNo:number;
    constructor(name:string,age:number,email:string,rollNo:number)
    {
        this.age = age;
        this.name = name;
        this.email = email;
        this.rollNo = rollNo;
    }
}
class Teachers implements Person {
    name:string;
    age:number;
    readonly email:string;
    employId: number;
    constructor(name:string,age:number,email:string,employId:number)
    {
        this.age = age;
        this.name = name;
        this.email = email;
        this.employId = employId;
    }
}

let s = new Students("Faziel",223,"mohdfazel@gmail.com",107);
let t = new Teachers("Faziel",223,"mohdfazel@gmail.com",112864);
console.log(s,t);