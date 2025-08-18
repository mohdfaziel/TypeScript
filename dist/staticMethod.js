"use strict";
class User1 {
    constructor(name) {
        this.name = name;
        User1.userCnt++;
    }
}
User1.userCnt = 0;
let user1 = new User1("Faziel");
let user2 = new User1("Sahil");
let user3 = new User1("Danish");
console.log("Number of users are ", User1.userCnt);
