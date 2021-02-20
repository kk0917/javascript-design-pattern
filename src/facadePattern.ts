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
