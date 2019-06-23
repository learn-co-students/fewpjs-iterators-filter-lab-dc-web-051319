function findMatching(array, string) {
    return array.filter( name => name.toLowerCase() === string.toLowerCase() );
};

function fuzzyMatch(array, string) {
    return array.filter( name => {
        let stringInName = false;
        for (let i = 0; i < string.length; ++i) {
            if (string[i] === name[i])
                stringInName = true;
            else 
                return false;
        };
        return stringInName;
    });
};

function matchName(array, string) {
    return array.filter( driver => driver.name.toLowerCase() === string.toLowerCase() );
};