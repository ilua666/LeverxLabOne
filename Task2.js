
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
console.log(difference([1, 1024, [[[[[3]]]]], 4], [1, [2], [3, [[4]]],[5,6,[7],[65,74,47]]]));

function difference(arr1, arr2){
    if (!Array.isArray(arr1) ){
        throw "Arr1 is not a array";
    }
    if (!Array.isArray(arr2)){
        throw "Arr2 is not a array";
    }
    const numberSet = new Set();

    function ArrToSetRec(arr, set){
        arr.forEach(element => {
            if (Array.isArray(element)){
                ArrToSetRec(element, set);
            }
            else{
                set.add(element)
            }
        });
    }

    ArrToSetRec(arr1, numberSet);
    ArrToSetRec(arr2, numberSet);

    function compare(a,b){
        if (a > b){
            return 1;
        }
        if (a < b){
            return -1
        }
        if (a == b){
            return 0;
        }

    }

    const resArray = Array.from(numberSet).sort(compare); 
    return resArray;
}