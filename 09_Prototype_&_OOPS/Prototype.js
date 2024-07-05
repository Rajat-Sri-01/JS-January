const marvelHeros = ["Ironman", "Thor", "Spiderman"] // Array
const MarvelHerosPower = {
    Ironman : "Suit",
    Thor : "Hammer",
    Spiderman : "Sling",

    spidermanPower : function(){
        console.log(`Spiderman power is ${this.Spiderman}`);
    }
}
Object.prototype.AllPower = function(){
    console.log("Got all the powers of Marvel heros");
}

Array.prototype.LeadHero = function(){
    // console.log(`Lead Heros Power : ${MarvelHerosPower.Ironman}, ${MarvelHerosPower.Thor}, ${MarvelHerosPower.Spiderman}` );
    console.log("Got all lead heros");
}

// MarvelHerosPower.AllPower()
// MarvelHerosPower.LeadHero()
marvelHeros.AllPower()
marvelHeros.LeadHero()
