import {Car} from './car.js'

export class WishList {
  constructor() {
    this.list = [];
    this.nextID = 0;
  }

  add(make, model, year) {
    let car = new Car(++this.nextID, make, model, year);
    this.list.push(car);
  }

  remove(carId) {
    this.list = this.list.filter(car => car.id != carId);

    /* Other methods of removing. However only the method above would remove more than 1. 
    The methods below will only remove 1 item */ 
    // this.list.forEach((car, index) => {
    //   if(car.id == carId) {
    //     this.list.splice(index, 1);
    //   }
    // });

    // const foundIndex = this.list.findIndex(ele => ele.id == cardId);
    // this.list.splice(foundIndex, 1);
  }
}