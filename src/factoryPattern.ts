// Type.js - constructor used on the back.

// 新しい車を定義するためのコンストラクタ
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
