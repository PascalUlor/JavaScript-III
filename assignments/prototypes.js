/*
  Object oriented design is commonly used in video games.  
  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  
  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
function GameObject(attributes) {
  this.createdAt = attributes.createdAt;
  this.name = attributes.name;
  this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function () {
  return `${this.name} was removed from the game.`;
}

let newGame = new GameObject({
  createdAt: '8th May',
  name: 'pascal',
  dimensions: {
    length: 50,
    widht: 30,
  }

});

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
function CharacterStats(ChAttr) {
  GameObject.call(this, ChAttr);
  this.healthPoints = ChAttr.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
  return `${this.name} took damage.`;
}

let newCha = new CharacterStats({
  createdAt: '8th May',
  name: 'pascal',
  dimensions: {
    length: 50,
    widht: 30,
  },
  healthPoints: '99'

});

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

function Humanoid(humanAttr) {
  CharacterStats.call(this, humanAttr);
  this.team = humanAttr.team;
  this.weapons = humanAttr.weapons;
  this.language = humanAttr.language;
}

Humanoid.prototype = Object.create(CharacterStats.prototype);
Humanoid.prototype.greet = function() {
  return `${this.name} offers a greeting in ${this.language}.`;
}

const kent = new Humanoid({
  createdAt: '8th May',
  name: 'Superman',
  dimensions: {
    length: 50,
    widht: 30,
  },
  healthPoints: 1000,
  team: 'Justice league',
  weapons: 'heat-vision',
  language: 'kryptonia'

})

/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

/**
 * Hero and Villian Constructors
 */
function Hero(feat) {
  Humanoid.call(this, feat);
  this.powerStat = feat.powerStat;
}

Hero.prototype = Object.create(Humanoid.prototype);

function Villain(feat) {
  Humanoid.call(this, feat);
  this.powerStat = feat.powerStat;
}

Villain.prototype = Object.create(Humanoid.prototype);
Humanoid.prototype.speak = function() {
  return `Hi I am ${this.name} the leader of ${this.team}.`;
}
Hero.prototype.attack = function(person) {
  if(this.powerStat.durability + this.powerStat.combat +this.powerStat.power + this.powerStat.strength > 30) {
    person.healthPoints -= 30;
    return `${person.name} health point is now ${person.healthPoints}`
  } else {
    person.healthPoints -= 10;
    return `${person.name} health point is now ${person.healthPoints}`
  }
}

Villain.prototype.attack = function(person) {
  if(this.powerStat.durability + this.powerStat.combat +this.powerStat.power + this.powerStat.strength > 30) {
    person.healthPoints -= 30;
    return `${person.name} health point is now ${person.healthPoints}`
  } else {
    person.healthPoints -= 10;
    return `${person.name} health point is now ${person.healthPoints}`
  }
}

const superman = new Hero({
  createdAt: new Date(),
  name: 'Superman',
  dimensions: {
    length: 50,
    widht: 30,
  },
  healthPoints: 100,
  team: 'Justice league',
  weapons: 'heat-vision',
  language: 'kryptonia',
  powerStat: {
    intelligence: 8,
    durability: 10,
    speed: 10,
    combat: 7,
    power: 10,
    strength: 10
  }
});

const lex = new Villain({
  createdAt: new Date(),
  name: 'Lex Luthor',
  dimensions: {
    length: 50,
    widht: 30,
  },
  healthPoints: 20,
  team: 'Legion of doom',
  weapons: 'kryptonite',
  language: 'multi-lingual',
  powerStat: {
    intelligence: 10,
    durability: 3,
    speed: 1,
    combat: 2,
    power: 1,
    strength: 1
  }
});

const darkside = new Villain({
  createdAt: new Date(),
  name: 'Darkside',
  dimensions: {
    length: 50,
    widht: 30,
  },
  healthPoints: 100,
  team: 'Legion of doom',
  weapons: 'Omega beam',
  language: 'multi-lingual',
  powerStat: {
    intelligence: 10,
    durability: 10,
    speed: 9,
    combat: 8,
    power: 10,
    strength: 10
  }
});

function randomIndex(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Starts a fight between two fighters
function battle(fighter1, fighter2) {
  console.log(`Fight Started between ${fighter1.name} and ${fighter2.name}`);
  let winner = '';
  while (fighter1.healthPoints > 0 && fighter2.healthPoints > 0) {
    const index = randomIndex(1, 2);
    if (index == 1) {
      console.log(fighter2.takeDamage());
      console.log(
        `${fighter1.attack(fighter2)}`
      );
    } else {
      console.log(fighter1.takeDamage());
      console.log(
        `${fighter2.attack(fighter1)}`
      );
    }
  }
  
  winner = fighter1.healthPoints >0? console.log(`Fight Ended, ${fighter1.name} is the new champion! ${fighter2.destroy()}`) : 
  console.log(`Fight Ended, ${fighter2.name} is the new champion! ${fighter1.destroy()}`);
  return winner;
}

// console.log(battle(superman, lex));
console.log(battle(superman, darkside));