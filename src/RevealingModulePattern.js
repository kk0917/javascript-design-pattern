/**
 * 2.3 Revealing Module Pattern
 */
// example
let myRevealingModule = (() => {
  let privateVar = "Ben Cherry",
      publicVar  = "Hey there!";

  function privateFunction() {
    console.log("Name:" + privateVar);
  }

  function publicSetName(strName) {
    privateName = strName;
  }

  function publicGetName() {
    privateFunction();
  }

  // Publish pointers to private function and properties.

  return {
    setName:  publicSetName,
    greeting: publicVar,
    getName:  publicGetName
  };
})();
myRevealingModule.setName("Paul Kinlan");

/**
 * Be able to publish private function or property
 *   with unique naming system to externals.
 */
let myRevealingModule2 = (() => {
  let privateCounter = 0;

  function privateFunction() {
    privateCounter++;
  }

  function publicFunction() {
    publicIncrement();
  }

  function publicIncrement () {
    privateFunction();
  }

  function publicGetCount() {
    return privateCounter;
  }

  // Publish pointers to private function and properties.

  return {
    start:     publicFunction,
    increment: publicIncrement,
    count:     publicGetCount
  }
})();
