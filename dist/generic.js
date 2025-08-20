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
