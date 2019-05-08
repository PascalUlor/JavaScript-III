/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*   The 4 principles of 'this' are related to their 'this binding'
* 1. 'Global Binding': This happens when a function with the 'this' keyword is called globally
* 2. 'Implicit Binding': This occurs when refferencing a method or a function which is withoin an object.
        this are functions preceeded by a 'dot' e.g Object.functionName.
* 3. 'New Binding': Whenever an instance of a constructor function is created, the 'this' refers to a specific
    instance of the object that is created and returned by the constructor function
* 4. 'Explicit Binding': Whenever the function prototypes .call(), .apply(), .bind() is used the 'this' keyword can be explicitly set
        to reference any object in another context.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function sayName(name) {
    console.log(this);
    return name;
  }
  sayName("D'Artagnan");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Ryan');

// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();

// Principle 4

// code example for Explicit Binding

function GameObject(attributes) {
this.createdAt = attributes.createdAt;
this.name = attributes.name;
this.dimensions = attributes.dimensions;
}

GameObject.prototype.destroy = function () {
return `${this.name} was removed from the game.`;
}

let demoGame = new GameObject({
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
function CharacterStats(attributes) {
GameObject.call(this, attributes);
this.healthPoints = attributes.healthPoints;
}

CharacterStats.prototype = Object.create(GameObject.prototype);

CharacterStats.prototype.takeDamage = function () {
return `${this.name} took damage.`;
}

let demoCha = new CharacterStats({
createdAt: '8th May',
name: 'pascal',
dimensions: {
  length: 50,
  widht: 30,
},
healthPoints: '99'

});

console.log(demoGame);
