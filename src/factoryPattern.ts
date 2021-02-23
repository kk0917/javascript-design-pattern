// Type.js - constructor used on the back.

// The constructor to define a new Car
type Options = {
  doors: number;
  state: string;
  color: string;
  wheelSize: string;
}

const Car = (options: Options) => {
  // default
  this.doors = options.doors || 4;
  this.state = options.state || 'brand new';
  this.color = options.color || 'silver'
};

const Truck = (options: Options) => {
  this.state = options.state || 'used';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || 'blue';
};

// FactoryExample.js

// Define the overview of vehicle factory
const VehicleFactory = () => {};

// ...
VehicleFactory.prototype.vehicleClass = Car;

// The factory method for making the new Vehicle instance.
VehicleFactory.prototype.createVehicle = (options: any) => {
  if (options.vehicle === 'GET') {
    this.vehicleClass = Car
  } else {
    this.vehicleClass(options)
  }

  return new this.vehicleClass(options);
};

// Create the instance to make factory
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle({
  vehicleType: 'car',
  color: 'yellow',
  doors: 6
});
console.log(car);

var AbstractVehicleFactory = (() => {
  // Storage location of vehicle types
  let types = {};

  return {
    getVehicle: (type: string, customizations: object) => {
      const Vehicle = types[type];

      return (Vehicle ? new Vehicle(customizations) : null);
    },

    registerVehicle: (type: string, Vehicle: any) => {
      let proto = Vehicle.prototype;

      // register a class satisfied the vehicle regulation
      if (proto.drive && proto.breakDown) {
        types[type] = Vehicle;
      }

      return AbstractVehicleFactory;
    }
  }
})();

// use case
AbstractVehicleFactory.registerVehicle('car', Car);
AbstractVehicleFactory.registerVehicle('truck', Truck);

// Create an instance of a new car based on Vehicle's abstract type
const _car = AbstractVehicleFactory.getVehicle(
  'car', {
    color: 'lime green',
    state: 'like new'});

const trunk = AbstractVehicleFactory.getVehicle(
  'truck', {
    wheelSize: 'medium',
    color: 'neon yellow'});
