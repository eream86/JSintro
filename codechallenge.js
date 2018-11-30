//write 3 loops (1 for loop, 1 while loop and 1 forEach loop) that iterates through an array and returns the same array with every number mult. by 3.

var arr1 = [3, 8, 20, 4, 2]

//expected output [9, 24, 60, 12, 6]

//for loop

for (let i=0; i<arr1.length; i++) {
  arr1[i] = arr1[i] * 3
  //can also do arr1[i]*= 3
}
console.log(arr1);

//while loop

// let i = 0
// while (i < arr1.length){
//   arr1[i] *= 3
//   i++
// }
// console.log(arr1);

//forEach loop

// arr1.forEach(function(el, i)){
//   arr1[i] = el * 3
// })
// console.log(arr1);

//stretch 1:  Turn each loop into a function.



//stretch 2:  Refactor your function to return a new array instead of mutating the original arry. (edited)

//var testArr1 = [3, 8, 4, 2]

// function mult3(arr){
//   var arr1 = []
//   for (let i=0; i<arr1.length; i++){
//     arr1.push(arr1[i] * 3)
//   }
//   return arr1
// }
// mult3(testArr1)
