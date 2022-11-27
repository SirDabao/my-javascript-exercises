const reverseString = function(str) {
    let tempArray=[];
    for(let i=0;i<str.length;i++)
    {
        tempArray[i]=str[str.length-1-i];
    }
    return tempArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
