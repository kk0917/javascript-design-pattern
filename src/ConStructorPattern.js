(function() {

// pattern of create object
var newObject1 = {};
var newObject2 = new Object()
var newObject3 = {};
var newObject4 = new Object()

// how to assign keys and values to object

// . syntax
newObject1.someKey = "Hello, world";
var key = newObject1.someKey;

// [] syntax
newObject2["someKey"] = "Hello, world";
var key = newObject2["someKey"];

/**
 * Compliant only ECMAScript5
 * detail: https://kangax.github.com/es5-compat-table/
 */

// Object.defineProperty
Object.defineProperty(newObject3, "someKey", {
  value: "for more control of the property's behavior",
  writable: true,
  enumerable: true,
  configurable: true

});
// ↓ writing simply
var defineProp = function(obj, name, value) {
  config.value = value;
  Object.defineProperty(obj, name, value);
}
// To use this, create new empty object with null as an argument
var person = Object.create(null);
defineProp(person, "car", "Delorean"); // add Object by property
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

// Object.defineProperties
// sets several properties
Object.defineProperties(newObject4, {
  someKey: {
    value:    "Hello, world!",
    writable: true
  },

  anotherKey: {
    value: "Foo bar",
    writable: false
  }

})

/** How to use these Object as inheritance
 * 0. use avobe "person" object
 * 1. create inheritance object
 * 2. set properties
 * 3. get inheritance property
 * 4. get setted property
 */
var driver = Object.create(person);
defineProp(driver, "topSpeed", "100mph")
console.log(driver.dateOfBirth)
console.log(driver.topSpeed)

/**
 * new object already has default member,
 * these can use by using "this" keyword
 */
function Car(model, year, miles) {
  this.model = model;
  this.year  = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + " has done " + this.miles + "miles";
  }
}

/**
 * 2.1.3 constructor using prototype
 * to be continued...
 */


})()
