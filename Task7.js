

console.log(substringsInStringCount("foofaafoofaafofa", "foo")); //2
console.log(substringsInStringCount("Match a single character present in the list below [a-z]a-z a single character in the range between a (index 97) and z (index 122) (case sensitive)", "a"));
console.log(substringsInStringCount("Match a single character present in the list below [a-z]a-z a single character in the range between a (index 97) and z (index 122) (case sensitive)", " a ")); //3
console.log(substringsInStringCount("Match a single character present in the list below [a-z]a-z a single character in the range between a (index 97) and z (index 122) (case sensitive)", "index")); //2

function substringsInStringCount(string,substring){

    let count = 0;
    let index = string.indexOf(substring);
    while (index != -1){
        count++;
        index = string.indexOf(substring,index+1);
    }
    return count;
}