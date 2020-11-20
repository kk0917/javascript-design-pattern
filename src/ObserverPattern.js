/** Observer Design Pattern
 * 
 * 4 elements
 */
var ObserverList = {
  observerList: []
};

ObserverList.prototype.Add = obj => {
  return this.observerList.push(obj);
};

ObserverList.prototype.Empty = () => {
  this.observerList = [];
};

ObserverList.prototype.Count = () => {
  return this.observerList.length;
};

ObserverList.prototype.Get = index => {
  if (index > -1 && index < this.observerList.length) {
    return this.observerList[index];
  }
};

ObserverList.prototype.Insert = (obj, index) => {
  var pointer = -1;

  if (index === 0) {
    this.observerList.unshift(obj);
    pointer = index;
  } else if (index === this.observerList.length) {
    this.observerList.push(obj);
    pointer = index;
  }

  return pointer;
};

// ... to be continued
