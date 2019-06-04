var restaurantWorker = {
    name : "Larry",
    age: 30,
    job: "line cook",
    yearsAtWorkplace: 2,
    favoriteDrink:function(){
        console.log("I am " + this.name + "and I like Mimosas")
    },
    industryFriends: [
        {
            name: "Jim",
            job: "bartender",
            yearsAtWorkplace: 3,
            favoriteDrink: function(){
                console.log("I am Jim , I am a " + this.job + " my favorite drink is Old Fashioneds.")
            }
        },{
            name: "Ryan",
            job: "server",
            yearsAtWorkplace: 5,
        },{
            name: "Lori",
            job: "server",
            yearsAtWorkplace:7,    
        },{
            name: "Eric",
            job: "bar back",
            yearsAtWorkplace: 7,
            favoriteFoods: [
                "bannannas", "crepe","ribeye steak", "asparagus"
            ],
            favoriteDiner: "Ruth's",
        },{
            name: "Elizabeth",
            job: "cocktail waitress",
            yearsAtWorkplace: 3,
            favoriteDrinks: [
                "bloody mary", "tequila sunrise", "vodka-tonic"
            ],
            married: no
        },{
            name: "Jacob",
            job: "FOH manager",
            yearsAtWorkplace: 8,
            favoriteDrinks
        }
    ] 
}
