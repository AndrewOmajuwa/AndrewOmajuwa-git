//Creating hero object
const hero = {name: "Andrew",
    heroic: true,
    inventory: [],
    health: 10,
    weapon: {
        type: "dagger",
        damage: 2
        },
    };
//Creating rest function 
function rest (object){

//Alert popUp
    if(object.health === 10){
        return alert("Hero at max health")
    };

//reassigning Hero Health
    object.health = 10;

//Returning object
    return object;    
}

//Creating pick-up-item function
function pickUpItem(heroObj, weapObj){

//Adding weapon to inventory property array
    heroObj.inventory.push(weapObj)
};

//Creating equip-weapon function
function equipWeapon(herolikeobj){

//reassigning weapon in inventory array
    if(herolikeobj.inventory.length > 0){
    herolikeobj.weapon = herolikeobj.inventory[0]
};

//preventing function log on empty inventory array
    if(herolikeobj.inventory.length === 0){
   
};
};

//creating onclick functions (restoreHealth, bagClick and Weapon log)

//Creating restoreHealth onclick function
function restoreHealth(){
    hero.health = 10   
};

//Creating weaponLog onclick function
function weaponLog(){
    hero.inventory.push({
    type: "dagger",
    damage: 2
});
};

//Creating bagClick onclick function
function bagClick(){
    hero.weapon = hero.inventory[0]   
};

//Creating displayStats function
function displayStats (heroo){
    const stats = Object.values(heroo)
    return stats;
};

//Calling displayStats function
displayStats(hero);


//Create form Change-Hero-Name
function changeHeroName(){
    const newHeroName = document.getElementById("HeroName").value;
    return newHeroName;
};

