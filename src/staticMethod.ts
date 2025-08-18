class User1{
    static userCnt : number = 0;
    constructor(public name: string){
        User1.userCnt++;
    }
}

let user1 = new User1("Faziel");
let user2 = new User1("Sahil");
let user3 = new User1("Danish");

console.log("Number of users are ",User1.userCnt);