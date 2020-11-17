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

console.log(singleA === singleB);
