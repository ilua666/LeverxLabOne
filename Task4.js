
const  origObj = new Object();
origObj.year = 1969;
origObj.make = "Ford";
origObj.model = "Mustang";

console.log(JSON.stringify(origObj));
console.log(JSON.stringify(KeysToValues(origObj)));
console.log(JSON.stringify(KeysToValues(KeysToValues(origObj))));



function KeysToValues(obj){
    if (typeof obj != 'object' || obj ==null){
        throw "Argument not an object "
    }

    const keys = Object.getOwnPropertyNames(obj);
    const reversedKeyValueObject = new Object();
    keys.forEach(key => {
        const value = obj[key];
        reversedKeyValueObject[value] = key;
    })
    return reversedKeyValueObject;
}