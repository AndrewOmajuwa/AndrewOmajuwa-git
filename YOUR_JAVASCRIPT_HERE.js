// Write your JS here
const hero = {name: "Andrew",
heroic: true,
inventory: [],
health: 10,
weapon: {
    type: "hi",
    damage: 2
},
}

const body = document.getElementsByTagName("body")
const img = document.createElement("img");
img.id = "inn";``
body.appendChild(img)

//reassign health property 
function rest (object){
    if(object.health === 10){
        return alert("Hero at max health")
    };
    object.health = 10;
    return object;    
}

function pickUpItem(heroObj, weapObj){
heroObj.inventory.push(weapObj)
}


function equipWeapon(herolikeobj){
    if(herolikeobj.inventory.length > 0){
herolikeobj.weapon = herolikeobj.inventory[0]}
if(herolikeobj.inventory.length === 0){
   
}
}

//creating onclick functions

function restoreHealth(){
 hero.health = 10   
}

function weaponLog(){
hero.inventory.push({
    type: "dagger",
    damage: 2
});
}

function reassignWeapon(){

}

function bagClick(){
hero.weapon = hero.inventory[0]   
}
