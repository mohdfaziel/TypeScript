"use strict";
function getFirstValue(arr) {
    return arr[0];
}
const res = getFirstValue([1, 4, 6, 3, 6, 4]);
const res1 = getFirstValue(["FAZ", "SHEIKH", "MEOW"]);
const res2 = getFirstValue([true, false]);
console.log(res, res1, res2);
function getObjVal(obj, key) {
    return obj[key];
}
console.log(getObjVal({ "name": "faziel" }, "name"));
//generic in class
class ItemStorage {
    constructor() {
        this.items = [];
    }
    getItems() {
        console.log(this.items);
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        this.items = this.items.filter((i) => i != item);
    }
}
const strStorage = new ItemStorage();
strStorage.addItem("faz");
const numStorage = new ItemStorage();
numStorage.addItem(123);
strStorage.getItems();
numStorage.getItems();
const user10 = new ItemStorage();
user10.addItem({ name: "Faziel", age: 12 });
user10.getItems();
