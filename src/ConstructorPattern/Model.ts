export type AddPropsType = {
  obj: object;
}

export interface KeyIF {
  value: string;
  writable?: boolean;
  enumerable?: boolean;
  configurable?: boolean;
}

export interface CarIF {
  model: string;
  year:  number;
  miles: number;
}

export class Car implements CarIF {
  model: string;
  year:  number;
  miles: number;

  constructor(_model, _year, _miles) {
    this.model = _model;
    this.year  = _year;
    this.miles = _miles;
  
    this.toString = function() {
      return this.model + " has done " + this.miles + "miles";
    }
  }
}

export class CarExtention implements CarIF {
  model: string;
  year:  number;
  miles: number;

  constructor(_model: string, _year: number, _miles: number) {
    this.model = _model;
    this.year  = _year;
    this.miles = _miles;
  }
}
