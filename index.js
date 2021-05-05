// Your code here
class Polygon {

  constructor(array) {
    this.array = array;
    this.count = this.array.length;
  }

  get getCount () {
    return this.array.length;
  }

  get perimeter() {
    let total = 0;
    for (let i = 0; i < this.count; i++) {
      total += this.array[i];
    }
    return total;
  }

}

class Triangle extends Polygon {

  get isValid() {
    let x = this.array[0];
    let y = this.array[1];
    let z = this.array[2];
    return ((x + y > z) && (x + z > y) && (y + z > x)) ? true : false
  }

}

class Square extends Polygon {

  get isValid() {
    let w = this.array[0];
    let x = this.array[1];
    let y = this.array[2];
    let z = this.array[3];
    return ((w === x) && (w === y) && (w === z)) ? true : false
  }

  get area() {
    return this.array[0] ** 2;
  }

}