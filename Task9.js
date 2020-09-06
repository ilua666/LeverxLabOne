
arrayNullClearing ([null, 11, null, "vvv", undefined, 'leverx'], 
                    (resVal) => console.log(resVal));


function arrayNullClearing(arr, callback){
    const resObject = {              
        array: arr
    }

    setTimeout(callbackResults, 5000, resObject,callback)
    setTimeout(removeNull, 0, resObject, 0);
}

function callbackResults (resObject,callback){
    resObject.stop = true;
    if(resObject.error === undefined){
        callback(resObject.array);
    }
    else{
        callback(resObject.error);
    }
}

function removeNull(arrObj,index){
    try{
        if (arrObj.stop === true){
            return;
        }

        if ((arrObj.array[index] === null) || (arrObj.array[index] === undefined)){
            arrObj.array.splice(index,1);
        }
        else{
            index++;
        }

        setTimeout(removeNull, 0, arrObj, index);
    }

    catch(error){
        arrObj.error = error;
    }
}