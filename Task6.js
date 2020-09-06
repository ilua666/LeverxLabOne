
console.log(uncamelize("HelloWorldGreatDayToday", "-"));
console.log(uncamelize("HelloWorldGreatDayToday", "_"));
console.log(uncamelize("HelloWorldGreatDayToday"))


function uncamelize (str, symbol){

    function SubStrIncert (str, substr, index){
        const result = str.slice(0,index)+substr+str.slice(index)
        return result
    }

    const camelRegExp = "[^ -_][A-Z]"

    switch(symbol){
        case "-":{
            let index = str.search(camelRegExp)
            while(index != -1){
                str = SubStrIncert(str, '-', index+1)
                index = str.search(camelRegExp)
            }
            str = str.toLowerCase()
            break;
        }

        case "_":{
            let index = str.search(camelRegExp)
            while(index != -1){
                str = SubStrIncert(str, '_', index+1)
                index = str.search(camelRegExp)
            }
            str = str.toLowerCase()
            str = str.charAt(0).toUpperCase()+ str.slice(1);
            break;
        }

        default :{
            let index = str.search(camelRegExp)
            while(index != -1){
                str = SubStrIncert(str, ' ', index+1)
                index = str.search(camelRegExp)
            }
            str = str.toLowerCase()
            break;
        }
    }
    return str;
}