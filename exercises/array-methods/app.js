var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop()
fruit.shift()
fruit.push(1)
vegetables.push(3)
var food = fruit.concat(vegetables)
food.splice(4,2)
food.reverse()
food.join();
console.log(food)