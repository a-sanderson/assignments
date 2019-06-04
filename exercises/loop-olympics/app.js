/*var num = []
for(i = 0; i < 10; i++){
    num.push(i)
}
console.log(num)*/



/*for(i = 9; i >= 0; i--){
    console.log(i)
}*/

/*var fruit = ["banana", "orange", "apple", "kiwi"]
for(i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}*/

/*for(i = 0; i < 101; i++){
    if( i % 2 === 0 ){
        console.log(i)
}
}*/
/*var fruitArray = []
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
for(i = 0; i < fruit.length; i += 2  ){
    fruitArray.push(fruit[i])
}
console.log(fruitArray)*/

/*var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  for(i = 0; i<peopleArray.length; i++){
      console.log(peopleArray[i].name)

  }*/

  /*var nameArray = []
  var occupationsArray = []
  var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  for(i = 0; i<peopleArray.length; i++){
      nameArray.push(peopleArray[i].name);
      occupationsArray.push(peopleArray[i].occupation)
  }

console.log(nameArray);
console.log(occupationsArray);*/

/*var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
  var everyOtherName = []
  var everyOtherOccupation = []
  for(i = 0; i<peopleArray.length; i += 2){
      everyOtherName.push(peopleArray[i].name)
      everyOtherOccupation.push(peopleArray[i].occupation)
  }
console.log(everyOtherName);
console.log(everyOtherOccupation);*/

/*var matrix = []
for( i = 0; i < 3; i++){
    var arr  = []
for(j = 0; j< 3; j++){
    arr[j]=i
}
matrix[i] = arr
}
console.log(matrix)*/

var matrixA = [[1,2,3], [10,17,12,13], [3,6,9,12]]
for (i = 0; i < matrixA.length; i++){
    for(j = 0; i< matrixA.length; j++){
        matrixA = [i][j];
    }

}

console.log(matrixA)