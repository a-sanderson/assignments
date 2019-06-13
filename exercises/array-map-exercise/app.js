// function doubleNumbers(arr){
//     const dubArray = arr.map(num =>{
//         return num * 2
//     })
//     return dubArray
// }
// console.log(doubleNumbers([4,7,9,12,20]))

// function stringItUp(arr){
//     const stringReturn = arr.map(num =>{
//         return num
//     })
//     const numStringArr = stringReturn.split(", ")
//     return numStringArr
// }
// console.log(stringItUp([5,10,6,3,5,9]))

function capNames(arr){
    const capArr = arr.map(name => name[0].toUpperCase() + name.slice(1).toLowerCase())
        return capArr
}
console.log(capNames(["jon","jena","larry", "HARRRY", "RyanBItchBoiLONG"]))