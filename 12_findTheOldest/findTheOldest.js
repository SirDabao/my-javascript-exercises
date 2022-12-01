const findTheOldest = function(arr) {
let current_year=(new Date()).getFullYear();
return arr.reduce((curr,item)=>
{
if ((curr.yearOfDeath || current_year)-curr.yearOfBirth<(item.yearOfDeath || current_year)-item.yearOfBirth)
{
curr=item;
}
return curr;
}
,{yearOfBirth: current_year, yearOfDeath: current_year});
};

// Do not edit below this line
module.exports = findTheOldest;
