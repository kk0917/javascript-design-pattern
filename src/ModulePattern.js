/**
 * 2.2.1 Object Literal
 */
var myObjectLiteral = {

  variableKey: "variableValue",

  functionKey: function() {
    // ...
  }
}

var myModule = {

  myProperty: "someValue",

  // Object Literal can have properties and modules.
  // For example, it can define objects of module setting too.
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // very simply method
  myMethod: function() {
    console.log("Where in the world is Paul Irish today?");
  },

  // output values based on current settings
  myMethod2: function() {
    console.log("Caching is:" + (this.myConfig.useCaching) ? "enabled" : "disabled");
  },

  // override current settings
  myMethod3: function(newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig.language)
    }
  }
};

myModule.myMethod(); // Where in the world is Paul Irish today?

myModule.myMethod2(); // enabled

myModule.myMethod3({ // fr
  language: "fr",
  useCaching: false
});

/**
 * 2.2.2 Module Pattern
 */
var testModule =(function() {
  var counter = 0;
  return {
    increment: function() {
      return ++counter;
    },

    resetCounter: function() {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  }
})();

var myNamespace = (function() {
  var myPrivateVar = 0;

  var myPrivateMethod = function() {
    console.log(foo);
  };

  return {
    myPublicVar: "foo",
    myPublicFunction: function(bar) {
      myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();

var basketModule = (function() {
  var basket= [];

  function doSomethingPrivate() {
    // ...
  }

  function doSomethingElsePrivate() {
    // ...
  }

  return {
    addItem: function(values) {
      basket.push(values);
    },

    getItemCount: function() {
      return basket.length;
    },

    doSomething: doSomethingPrivate,

    getTotal: function() {
      var itemCount = this.getItemCount();
      var total = 0

      while (itemCount--) {
        total += basket[itemCount].price
      }

      return total;
    }
  };
})();

/**
 * 2.2.3 Module pattern variations
 */
// import mixin
var myModule = (function (jQ, ) {
  function privateMethod1() {
    jQ(".container").html("test");
  }

  function privateMethod2() {
    console.log(_.min([10, 5, 100, 2, 1000]))
  }

  return {
    publicMethod: function() {
      privateMethod1()
    };
  }

  // Import jQuery and Underscore
}(jQuery, _));

myModule.publicMethod();

// export
var myModule = (function() {
  // Module Obj
  var module = {}
  privateVariable = "Hello, world";

  function privateMethod() {
    // ...
  }

  module.publicProperty = "Foobar";
  module.publicMethod   = function() {
    console.log(privateVariable);
  };

  return module;

})();
