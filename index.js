// Code your solution here
function findMatching(array,string){
    return array.filter(name => {return name.toLowerCase() == string.toLowerCase();});
}

function fuzzyMatch(array,string){
    return array.filter(name => {return (name.includes(string) && name.indexOf(string)==0);});
}

function matchName(array,string){
    return array.filter(record => {return (record.name==string);});
}