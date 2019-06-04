/*var backcountryBook = {
    color: "tan",
    logo: "goat",
    pages: 200,
    writeDescription: function(){
        console.log("I am a" + " " + backcountryBook.color + " book with a " + backcountryBook.logo + " logo!" )
    }

}
return backcountryBook.writeDescription()*/

/*var whiteCup = {
    brand: "solo",
    stripes: 4,
    liquid: "coffee",
    whatAmIFor: function(){
        console.log("My white cup is for drinking " + whiteCup.liquid)
    }
}
return whiteCup.whatAmIFor()*/

var iPhone = {
    color : "black",
    bestUse : "texting",
    canSurfInternet : true,
    whatIDo : function(){
        console.log("I am a part of humans' every day life. " + "I can be used for " + this.bestUse +  "." + " You may ask, can I be used for surfing the internet? " + this.canSurfInternet)
    }
}
return  iPhone.whatIDo()