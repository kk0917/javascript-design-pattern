import { AddPropsType, KeyIF, Car, CarExtension } from "./Model";

(() => {

  // pattern of create object
  const newObject1: AddPropsType['obj'] = new Object();
  const newObject2 = new Object();
  const newObject3 = {};
  const newObject4 = new Object();

  // how to assign keys and values to object

  // . syntax - JS literal, prototype base
  // newObject1.prototype.someKey = "Hello, world";
  // const _someKeu = newObject1.someKey;

  // [] syntax - JS literal
  newObject2["someKey"] = "Hello, world";
  const key = newObject2["someKey"];

  /**
   * Compliant only ECMAScript5
   * detail: https://kangax.github.com/es5-compat-table/
   */

  // Object.defineProperty
  const SomeKey: KeyIF = {
    value: "for more control of the property's behavior",
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProperty(newObject3, "someKey", SomeKey);
  // ↓ writing simply
  const defineProp = (obj: object, name: string, value: string|boolean): void => {
    Object.defineProperty(obj, name, value);
  }
  // To use this, create new empty object with null as an argument
  const person: object = Object.create(null);

  defineProp(person, "car", "Delorean"); // add Object by property
  defineProp(person, "dateOfBirth", "1981");
  defineProp(person, "hasBeard", false);

  // sets several properties
  const _someKey: KeyIF = {
    value:    "Hello, world!",
    writable: true
  };
  const _anotherKey: KeyIF = {
    value:    "Foo bar",
    writable: false
  };
  Object.defineProperties(newObject4, {
    someKey:    _someKey,
    anotherKey: _anotherKey
  });

  /** How to use these Object as inheritance
   * 0. use above "person" object
   * 1. create inheritance object
   * 2. set properties
   * 3. get inheritance property
   * 4. get setted property
   */
  const driver = Object.create(person);

  defineProp(driver, "topSpeed", "100mph")
  console.log(driver.dateOfBirth)
  console.log(driver.topSpeed)

  /**
   * new object already has default member,
   * these can use by using "this" keyword
   */
  // How to use
  const civic  = new Car("Honda Civic", 2009, 20000)
  const mondeo = new Car("Ford Mondeo", 2009, 5000)
  console.log(civic)
  console.log(mondeo)

  /**
   * 2.1.3 constructor using prototype
   * プロトタイプObjの再定義を避けるために、ここではObject.prototypeではなく
   * Object.prototype.newMethodを使用していることに注意。
   */
  CarExtension.prototype.toString = () => {
    return this.model + " has done " + this.miles + "miles.";
  }
  // How to use
  const civicExt = new CarExtension("Honda Civic", 2009, 20000);
  const mondeoExt = new CarExtension("Ford Mondeo", 2010, 5000);

  console.log(civicExt.toString());
  console.log(mondeoExt.toString());

})()
