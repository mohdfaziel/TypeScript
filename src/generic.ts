function getFirstValue<T>(arr : T[])
{
    return arr[0];
}

const res = getFirstValue([1,4,6,3,6,4]);
const res1 = getFirstValue(["FAZ","SHEIKH","MEOW"]);
const res2 = getFirstValue([true,false]);
console.log(res,res1,res2)

function getObjVal<T extends object, U extends keyof T>(obj : T,key : U)
{
    return obj[key];
}

console.log(getObjVal({"name":"faziel"},"name"));

//generic in class
class ItemStorage<T>
{
    private items : T[] = [];
    getItems()
    {
        console.log(this.items);
    }
    addItem(item : T)
    {
        this.items.push(item);
    }
    removeItem(item : T)
    {
        this.items = this.items.filter((i) => i!=item);
    }
}

const strStorage = new ItemStorage<string>();
strStorage.addItem("faz");
const numStorage = new ItemStorage<number>();
numStorage.addItem(123);
strStorage.getItems();
numStorage.getItems();

interface Users{
    "name":string;
    "age":number;
}

const user10 = new ItemStorage<Users>();
user10.addItem({name:"Faziel",age:12})
user10.getItems();