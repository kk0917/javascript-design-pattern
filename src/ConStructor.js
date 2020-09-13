(function() {

// pattern of create object
var newObject1 = {};
var newObject2 = new Object()

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
Object.defineProperty(newObject1, "someKey", {
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
// create new empty class to use this
var person = Object.create(null);
defineProp(person, "car", "Delorean"); // add Object by property
defineProp(person, "dateOfBirth", "1981");
defineProp(person, "hasBeard", false);

// Object.defineProperties
// to be continued...


})()
