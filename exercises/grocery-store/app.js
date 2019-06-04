var shopper = {
    name: "Aaron",
    shoppingStyle: "intense",
    shoppingSpeed: "fast",
    favoriteStore: "Smiths",
    averageBudget: 50,
    male: true,
    groceryCart: ["apples","bannannas", "celery", "carots", "squash",],
    speedShop: function(){
        return("Aaron says his average budget is " + shopper.averageBudget + "...." + " yeah right!")
    }
}
console.log(shopper.speedShop())