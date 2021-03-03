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

export class CarExtension implements CarIF {
  model: string;
  year:  number;
  miles: number;

  constructor(model: string, year: number, miles: number) {
    this.model = model;
    this.year  = year;
    this.miles = miles;
  }
}
