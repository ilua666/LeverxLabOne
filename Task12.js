
// setToPrintMultipleCityCountryPairs(['Minsk','Rome', 'Madrid']);

function setToPrintMultipleCityCountryPairs(cities) {
    cities.forEach((city) => {
        fetch('https://geocode.xyz/' + city + '?json=1&auth=437279812150388960706x44771')
            .then((response) => { return response.json(); })
            .then((data) => { printOneCityCountryPair(data); });
    });
}

function printOneCityCountryPair(data){

    if (typeof data.standard === 'object' && data.standard !== null) {
        cityInfo = data.standard;

        if (typeof cityInfo.city === 'string' && typeof cityInfo.countryname === 'string') {
            console.log(cityInfo.city + '  -  ' + cityInfo.countryname);
        }
        else{
            console.log('"countryname" and "city"  in"standart" not a string');
        }
    }
    else {
        console.log('error ' +data.error.code + '  ' + data.error.description + '')
        //console.log('"standard" in responce body not an object')
    }
}


//raceCityInfo(getCityInfoPromises(['Paris', 'Nice']));

function getCityInfoPromises(cities){
    let resultCityInfoPromises = [];
    cities.forEach((city) => {
        resultCityInfoPromises.push( fetch('https://geocode.xyz/' + city + '?json=1&auth=437279812150388960706x44771') );
    });
    return resultCityInfoPromises;
}

function raceCityInfo(citiesPromises){
    Promise.race(citiesPromises)
        .then((response) => { return response.json(); })
        .then((data) => { processCityData(data); });
}



// fireParallelReqNamesFromPromise(getCityNamesPromise());

function getCityNamesPromise(){
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve (['Minsk','Rome', 'Madrid', 'Paris', 'Nice','Brest','Grodno','Gomel','Pekin','Neverwinter','Bruma','Rapture' ]), 3000)
    });
}

function fireParallelReqNamesFromPromise(cityNamePromice){
    cityNamePromice.then((result) => { setToPrintMultipleCityCountryPairs(result) });
}