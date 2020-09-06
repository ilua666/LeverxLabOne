

function getPromiseSixSeconds(){
    return new Promise((resolve) =>{
        setTimeout(resolve, 6000)
    })
}
console.log((new Date()).toString())
getPromiseSixSeconds().then(() => console.log("6 Sec later  " + (new Date()).toString()));