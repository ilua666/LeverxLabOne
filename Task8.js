
console.log(ArrayInFlat([1, 2, 1000, 300, [400, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6]]));


function ArrayInFlat(arr){
    if  (!Array.isArray(arr)){
        throw "Agument must be array type";
    }

    function reducerInFlatCallback(prev, current){        
        return prev.concat(Array.isArray(current)?ArrayInFlat(current):current);
    }        

    result = arr.reduce(reducerInFlatCallback,[]);

    function compareNumbers(a, b) {
        return a - b;
    }
    
    result.sort(compareNumbers);

    return result;

}