let animalArr = []

let collectAnimals = (...animals) animals => animalArr

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus")); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]