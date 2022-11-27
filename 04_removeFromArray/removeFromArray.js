const removeFromArray = function(Arr, ...removeArgs) {
for(let i=0;i<removeArgs.length;i++)
{
if(Arr.includes(removeArgs[i]))
for(let j=0;j<Arr.length;j++)
{
if(Arr[j]===removeArgs[i])
Arr.splice(j,1);
}
}
return Arr;
};

// Do not edit below this line
module.exports = removeFromArray;
