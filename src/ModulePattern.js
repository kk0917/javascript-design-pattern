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
