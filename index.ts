const a = 23;
let b = 34;
console.log(a + b);
function combine(x: number | string, y: number | string)
{
    if(typeof x === "number" || typeof y === "number")
    {
        return x.toString() + y.toString();
    }
    return x + y;
}