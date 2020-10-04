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
}

myModule.myMethod(); // Where in the world is Paul Irish today?

myModule.myMethod2(); // enabled

myModule.myMethod3({ // fr
  language: "fr",
  useCaching: false
});

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
})()

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