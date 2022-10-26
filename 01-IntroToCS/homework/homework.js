'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let result = 0;
  let power = num.length - 1;

  for (let i=0;i<num.length;i++) {
    result += num[i] * Math.pow(2, power);
    power--;
  }
  return result;
}

function DecimalABinario(num) {
  // tu codigo aca
let binary = "";

while(num !== 0){
  binary = (num % 2) + binary;
  num = Math.floor(num/2);
}
return binary;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}