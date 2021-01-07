const mySingleton = (() => {
  // save references to singleton.
  let instance;

  const init = () => {
    // Singleton

    /** Private members, fields(properties) and methods
     * @return {string} message to improve this object is private.
     */
    const privateMethod = () => {
      console.log("I am private.");
    }

    const privateVar = "I am also private";

    return {
      // Public members, fields(properties) and methods
      publicMethod: () => {
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
    getInstance: () => {
      if (!instance) {
        instance = init();
      }
  
      return instance;
    }
  };
})();

// How to use
const singleA = mySingleton;
const singleB = mySingleton;

console.log(singleA === singleB); // output: true

/** Difference between class and singleton
 * 
 * Singleton: 
 *   implements a static instance, but it created lazy. So it doesn't memory's assets.
 * 
 * Static Instance:
 *   When using static Objects that can be initialized directly, 
 *   it must be guaranteed to execute codes Always run in the same order.
 *   And it can't scale up that there are source codes in large amounts.
 */
mySingleton.getInstance = () => {
  if (this._instance == null) {
    if (isFoo()) {
      this._instance = new FooSingleton(); // this instance is sub class of BasicSingleton
    } else {
      this._instance = new BasicSingleton();
    }
  }

  return this._instance;
};

/**
 * Singleton pattern is useful where objects working with other objects Everywhere in the system.
 */
const SingletonTester = (() => {
  /**
   * options are objects including setting options of it.
   * ex. let options = { name: "test", pointX: 5 };
   */
  const Singleton = options => {
    /**
     * if there are options received by argument, set them this Singleton's properties.
     * if not, set object that all properties are empty.
     */
    options = options || {};

    // set Singleton's properties
    this.name   = "SingletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  };

  // storad place of instance
  let instance;

  // enumerate all static members
  let _static = {
    name: "SingletonTester",

    // methods getting instances
    // return instance of Singleton object
    getInstance: (options) => {
      if (instance === undefined) instance = new Singleton(options);

      return instance;
    }
  };

  return _static;
})();

let singletonTest = SingletonTester.getInstance({
  pointX: 5
});

// Output logs to confirm whether if pointX's value is right or not.
console.log(singletonTest.pointX); // output: 5
