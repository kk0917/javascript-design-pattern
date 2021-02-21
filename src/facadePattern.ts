const　MyEvent = (
  elem: HTMLElement,
  type: 'click',
  listener: (this: HTMLElement, type: MouseEvent) => any
) => {
  if (elem.addEventListener) {
    elem.addEventListener(type, listener, false);
  // } else if(elem.attachEvent) { // for IE
  //   elem.attachEvent(`on${type}`, fn);
  } else {
    elem[`on${type}`] = listener;
  }
}
// of jQuery example
/**
bindReady: () => {
  // ...
  if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', DOMContentLoaded, false);

    window.addEventListener('load', jQuery.ready, false);
  } else {
    
  }
}
*/
const module = (() => {
  const _private = {
    i: 5,
    get: () => {
      console.log(`current value: ${this.i}`);
    },
    set: val => {
      this.i = val
    },
    run: () => {
      console.log('running');
    },
    jump: () => {
      console.log('jumping');
    }
  };

  return {
    facade: args => {
      _private.set(args.val);
      _private.get();
      if (args.run) {
        _private.run();
      }
    }
  };
})();

module.facade({ run: true, val: 10 })
