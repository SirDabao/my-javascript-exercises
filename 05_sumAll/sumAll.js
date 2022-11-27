const sumAll = function(num1,num2) {
    if (typeof num1 !=="number" || typeof num2 !=="number" || num1<0 || num2<0)
    return "ERROR";
let distance=Math.abs(num1-num2);
return (num1+num2)*(distance+1)/2;
};

// Do not edit below this line
module.exports = sumAll;
