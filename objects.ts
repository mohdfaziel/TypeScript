let student : {
    name : string,
    rollNo : number,
    age : number
} = {
    name : "Faziel",
    rollNo : 107,
    age : 22
}


let students : {
    name : string,
    rollNo : number,
    age : number }[] = [student, student];

type User = {
    name: string;
    age: number;
    rank?:number
}

let user1: User = {
    name:"Faziel",
    age:22,
    rank:482
}