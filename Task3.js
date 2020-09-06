console.log(caseInsensitiveSearch('JavaScript Exercises', 'exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercises'));
console.log(caseInsensitiveSearch('JavaScript Exercises', 'Exercisess'));



function caseInsensitiveSearch(str, subStr){
    const lowCaseStr = str.toLowerCase();   // idk which js types can or can't cast to string
    const lowCaseSubStr = subStr.toLowerCase();

    if (lowCaseStr.indexOf(lowCaseSubStr) == -1){
        return "Not Matched";
    }
    else{
        return "Matched";
    }
}