type User = {
    name:string,
    age:number,
    readonly email?:string
}

type Additional = {
    number_ : number
}

let u1 : User & Additional = {
    name:"faziel",
    age : 21,
    number_ : 345678
}
let u2 : User | Additional = {
    name:"sahil",
    age : 22,
    // number_ : 345678
}

type t1 = string | number;
type t2 = string | boolean;

let s2 : t1 & t2 = "Faziel"
let s3 : t1 | t2 = 23
