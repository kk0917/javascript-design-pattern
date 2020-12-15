/**
 * 2.2.1 Object Literal
 */
let myObjectLiteral = {
  variableKey: "variableValue",

  functionKey: () => {
    // ...
  }
}

let myModule = {

  myProperty: "someValue",

  // Object Literal can have properties and modules.
  // For example, it can define objects of module setting too.
  myConfig: {
    useCaching: true,
    language: "en"
  },

  // very simply method
  myMethod: () => {
    console.log("Where in the world is Paul Irish today?");
  },

  // output values based on current settings
  myMethod2: () => {
    console.log("Caching is:" + (this.myConfig.useCaching) ? "enabled" : "disabled");
  },

  // override current settings
  myMethod3: newConfig => {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;

      console.log(this.myConfig.language);
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
 * 
 * Immediately-Invoked Functions is created by
 *   (function() { ... })() of this function literal.
 * 
 * public access 
 */
let testModule =(() => {
  let counter = 0;

  return {
    increment: () => { return ++counter; },

    resetCounter: () => {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };
})();

let myNamespace = (() => {
  let myPrivateVar = 0;

  let myPrivateMethod = foo => {
    console.log(foo);
  };

  return {
    myPublicVar: "foo",

    myPublicFunction: bar => {
      this.myPrivateVar++;
      myPrivateMethod(bar);
    }
  };
})();

let basketModule = (() => {
  let basket= [];

  let doSomethingPrivate = () => {
    // ...
  };

  let doSomethingElsePrivate = () => {
    // ...
  };

  return {
    addItem: value => { basket.push(values); },

    getItemCount: () => { return basket.length; },

    doSomething: doSomethingPrivate,

    getTotal: () => {
      let itemCount = this.getItemCount();
      let total     = 0;

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
let myModule = (($, _) => { // $ = jQuery, _ = Underscore
  let privateMethod1 = () => {
    $(".container").html("test");
  };

  let privateMethod2 = () => {
    console.log(_.min([10, 5, 100, 2, 1000]))
  };

  return {
    publicMethod: () => {
      privateMethod1();
    }
  };

  // Import jQuery and Underscore
})(jQuery, _);

myModule.publicMethod();

// export
let myModule = (() => {
  // Module Obj
  let module = {};
  let privateVar = "Hello, world";

  let privateMethod = () => {
    // ...
  };

  module.publicProperty = "Foobar";
  module.publicMethod   = () => {
    console.log(privateVariable);
  };

  return module;
})();

// implementation by jQuery
let library = module => {
  $(() => {
    if (module.init) { module.init() };
  })
};
let myLibrary = library(() => {
  return {
    init: () => {
      // module implementation
    }
  };
});
