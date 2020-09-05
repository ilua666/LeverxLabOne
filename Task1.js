const vals = [8,610,0,1,"bb",55.56,"55.56",Number.POSITIVE_INFINITY, -66,-79, IdkHowToNameThis, IdkHowToNameThis(5)()];

vals.forEach(element => { 
    func = IdkHowToNameThis(element);
    console.log(element + ":-->  " + JSON.stringify( ResultsAndErrorLog(func)));
});


function ResultsAndErrorLog(func){
    try {
        return func();
    } catch (error) {
        return error;
    }
}


function IdkHowToNameThis(limit){
    return function(){
        return FibbonachiSeries(limit);
    }
}


function FibbonachiSeries(limit){
    limit = Number(limit);

    if (isNaN(limit)|| !isFinite(limit)){
        throw "Limit is not a Number";
    }

    if (limit <= 0){
        return [];
    }

    if (limit <= 1){
        return [0];
    }

    let fibSeries = [0,1];
    let fibSerNewElem = 1;
    while (fibSerNewElem < limit){
        fibSeries.push(fibSerNewElem)
        fibSerNewElem += fibSeries[fibSeries.length - 2];
    }        
    return fibSeries;

}
