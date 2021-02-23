//Escribe tu código aquí



function Character (name){
    this.name = name;
}

Character.prototype.saludo = function(){
    return `Hi ${this.name}`;
}

function Hero (name, superpower, weakness){
    Character.call (this, name);
    this.superpower = superpower;
    this.weakness = weakness;
}

Hero.prototype = Object.create (Character.prototype);
Hero.prototype.constructor = Hero;

Hero.prototype.power = function () {
    return `Your superpower is ` + this.superpower;
}
Hero.prototype.message = function () {
    return this.saludo() + `` + this.power;
}
Hero.prototype.secret = function () {
    return `Be careful, your weakness is `+ this.weakness;
}


function Villain (name, archenemy){
    Character.call (this, name);
    this.archenemy = archenemy;
}

Villain.prototype = Object.create (Character)
Villain.prototype.constructor = Villain;

Villain.prototype.enemy = function () {
    return this.saludo() + `Your archenemy is ` + this.archenemy;
}