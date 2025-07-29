let arr = [1,3,4,5,"fd", "hello", 2.5, true];
console.log(arr);
let arr2 :readonly (number|string)[] = [1,2,3,"faz"];
//@ts-ignore
arr2.push(2);
let arr3 = [1,2,"asf",[],{},null,undefined];

//tuples: Fixed length array
let coordinates: readonly [number,number] = [123,2423];