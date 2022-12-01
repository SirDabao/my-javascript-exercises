const palindromes = function (str) {
let str_arr=[...str];
let arr_letters=str_arr.filter((item)=>(item!==" " && item!=="," && item!=="." && item!=="!" && item!=="?"))
.map(item=>item.toLowerCase());
for(let i=0;i<arr_letters.length;i++)
{
    if(i>=arr_letters.length-1-i)
    break;
    if(arr_letters[i]!==arr_letters[arr_letters.length-1-i])
    return false;
}
return true;
};

// Do not edit below this line
module.exports = palindromes;
