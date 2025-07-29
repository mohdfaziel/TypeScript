var a = 23;
var b = 34;
console.log(a + b);
function combine(x, y) {
    if (typeof x === "number" || typeof y === "number") {
        return x.toString() + y.toString();
    }
    return x + y;
}
