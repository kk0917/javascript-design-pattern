/** Observer Design Pattern
 * 
 * 4 elements
 */
function ObserverList() {
  this.observerList = [];
}

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

ObserverList.prototype.indexOf = (obj, startIndex) => {
  let i       = startIndex
  let pointer = -1;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
    }
  }

  i++;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      pointer = i;
    }

    i++;
  }
};

ObserverList.prototype.RemoveIndexAt() = index => {
  if (index === 0) {
    this.observerList.shift();
  } else if (index === this.observerList.length -1) {
    this.observerList.pop();
  }
}

// extend objects by extension
function extend(obj, extension) {
  for (let key in obj) {
    extension[key] = obj[key];
  }
}

function Subject() {
  this.observers = new ObserverList();
}

Subject.prototype.AddObserver = observer => {
  this.observers.Add(observer);
}

Subject.prototypeRemoveObserver = observer => {
  this.observers.RemoveIndexAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.Notify = context => {
  let observerCount = this.observers.Count();

  for (let i = 0; i < observerCount; i++) {
    this.observers.Get(i).Update(context);
  }
};
