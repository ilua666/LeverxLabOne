const pr1 = new Promise( resolve => {
    console.log("pr1");
    resolve("pr1");
});

const pr2 = new Promise( resolve => {
    console.log("pr2");
    resolve("pr2");
});

const pr3 = new Promise( resolve => {
    console.log("pr3");
    resolve("pr3");
});

function promiceSequinceFire(promiseArr){
    promiseArr.reduce((prev, curr) =>prev.then(curr));
}

promiceSequinceFire([pr1,pr2,pr3]);
