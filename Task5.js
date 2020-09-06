
const  origObj = new Object();
origObj.year = 1969;
origObj.make = "Ford";
origObj.model = "Mustang";

console.log(JSON.stringify(origObj));
console.log(ObjToPair(origObj));


function ObjToPair(obj){
    if (typeof obj != 'object' || obj ==null){
        throw "Argument not an object "
    }
    const keys = Object.getOwnPropertyNames(obj);
    const map = new Map();
    keys.forEach(key => {
        const value = obj[key];
        map.set(key, value);
    })
    return map;
}