class myCar {
  name: string;

  constructor(_name: string) {
    this.name = _name;
  }

  drive = (): void => {
    console.log("Weeee. I'm driving!");
  };

  panic = (): void => {
    console.log('Wait. How do you stop this thing?');
  };
};

// Use Object.create to create the car instance.
const yourCar = Object.create(myCar);

// Make sense that one is the instance of other one prototype.
console.log(yourCar.name);

class MY_GLOBAL {
  id: number;

  constructor () {
    /** */
  };

  nextId = (): number => {
    this.id += 1;
    return this.id;
  }
};

class vehicle {
  model: string;

  constructor () {
    /** */
  };

  getModel = (): void => {
    console.log(`The model of this vehicle is..${this.model}`);
  }
};

const car = Object.create(vehicle, {
  id: {
    value: MY_GLOBAL.nextId(), // TODO: fix error

    // at default, writable:false, configurable:false
    enumerable: true
  },

  model: {
    value: 'Ford',

    enumerable: true
  }

  // TODO: to be continued...
});
