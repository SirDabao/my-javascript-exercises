const convertToCelsius = function(fahTemp) {
  let numer=5*fahTemp-160;
  if(numer%9===0)
    return (5*fahTemp-160)/9;
  else
    return +(((5*fahTemp-160)/9).toFixed(1));
};

const convertToFahrenheit = function(celTemp) {
  let numer=9*celTemp+160;
  if(numer%5===0)
    return (9*celTemp+160)/5;
  else
    return +(((9*celTemp+160)/5).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
