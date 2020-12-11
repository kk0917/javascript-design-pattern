let myCar = {
  name: "Ford Escort",

  drive: () => {
    console.log("Weeee. I'm driving!");
  },

  panic: () => {
    console.log('Wait. How do you stop this thing?');
  }
};

// Use Object.create to create the car instance.
let yourCar = Object.create(myCar);

// Make sense that one is the instance of other one prototype.
console.log(yourCar.name);

MY_GLOBAL = {
  id: 0,

  nextId: () => {
    this.id += 1;
    return this.id;
  }
};

var vehicle = {
  getModel: () => {
    console.log('The model of this vehicle is..' + this.model)
  }
};

let car = Object.create(vehicle, {
  id: {
    value: MY_GLOBAL.nextId(),

    // at default, writable:false, configurable:false
    enumerable: true
  },

  model: {
    value: 'Ford',

    enumerable: true
  }
});
