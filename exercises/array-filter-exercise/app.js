
// function fiveAndGreaterOnly(arr){
//     arr.filter(num =>{
//         if(num <= 5){
//             return num
//         }
//     })
// }

// console.log(fiveAndGreaterOnly([5,3,7,8,9,0,5]));

function evensOnly(arr) {
   const evens = arr.filter(num => {
        if(num % 2 === 0){
            return num
        }
    })
    return evens
}
  console.log(evensOnly([4,5,7,6,8,9,10]))