constMyEvent = (el: HTMLElement, ev: string, fn) => {

  swk
  if (el.addEventListener) {
    el.addEventListener(ev, fn, false);
  } else if(el.attachEvent) {
    el.attachEvent(``)
  }
}

// CommandType-related
image1!.addEventListener(
  'change',
  {handleEvent: (event: HTMLElementEvent<HTMLInputElement>) => {
    this.handleInputChange(event.target.files![0]);
  }},
  false,
);
