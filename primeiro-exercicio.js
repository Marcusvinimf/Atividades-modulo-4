let array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

function soma(...arr){
    return arr.reduce((acum, valorFinal) => acum + valorFinal);
} 
console.log("resultado 1:", soma(...array));

//*****************************************************************************
function soma2 (...valores) {
  var total = 0
  for (const item of valores) {
    total += parseFloat(item)
  }
  return total
}
console.log("resultado 2:", soma2(...array))