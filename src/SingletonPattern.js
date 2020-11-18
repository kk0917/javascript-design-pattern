var mySingleton = (function() {
  // save references to singleton.
  var instance;

  function init() {
    // Singleton

    /** Private members, fields(properties) and methods
     * @return {string} message to improve this object is private.
     */
    function privateMethod() {
      console.log("I am private.")
    }

    var privateVar = "I am also private";

    return {
      // Public members, fields(properties) and methods
      publicMethod: function() {
        console.log("The public can see me!");
      },

      publicProperty: "I am also public"
    };
  };

  return {
    /**
     * Fetch a singleton instance if the instance is exists,
     * create the instance if it's not exists.
     */
    getInstance: function () {
      if (!instance) {
        instance = init();
      }
  
      return instance;
    }
  };
})()

// How to use
var singleA = mySingleton;
var singleB = mySingleton;

console.log(singleA === singleB); // output: true

/** Difference between class and singleton
 * 
 * Singleton: 
 *   implements a static instance, but it created lazy . So it doesn't memory's assets.
 * 
 * Static Instance:
 *   When using static Objects that can be initialized directly, 
 *   it must be guaranteed to execute codes Always run in the same order.
 *   And it can't scale up that there are source codes in large amounts.
 */
mySingleton.getInstance = function() {
  if (this._instance == null) {
    if (isFoo()) {
      this._instance = new FooSingleton(); // this instance is sub class of BasicSingleton
    } else {
      this._instance = new BasicSingleton();
    }
  }

  return this._instance;
}

/**
 * Singleton pattern is useful where objects working with other objects Everywhere in the system.
 */
var SingletonTester = (function () {
  // options are objects including setting options of it.
  // ex. var options = { name: "test", pointX: 5 };
  function Singleton(options) {
    /**
     * if there are options received by argument, set them this singleton's properties.
     * if not, set object that all properties are empty.
     */
    options = options || {};

    // set singleton's properties
    this.name   = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  }

  // storad place of instance
  var instance;

  // enumerate all static members
  var _static = {
    name: "SingletonTester",

    // methods getting instances
    // return instance of singleton object
    getInstance: function (options) {
      if (instance === undefined) instance = new Singleton(options);

      return instance;
    }
  };

  return _static;
})();

var singletonTest = SingletonTester.getInstance({
  pointX: 5
})

// Output logs to confirm whether if pointX's value is right or not.
console.log(singletonTest.pointX) // output: 5
