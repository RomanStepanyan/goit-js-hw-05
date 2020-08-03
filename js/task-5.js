class Car {
    constructor({speed = 0, price, maxSpeed, isOn = 'false', distance = 0}){
        this.__speed = speed;
        this.__price = price;
        this.__maxSpeed = maxSpeed;
        this.__isOn = isOn;
        this.__distance = distance;
    }

    static getSpecs(car) {
        console.log(car);
    }

    set price (priceNew){
        return this.__price = priceNew;
    }
    get price(){
        return this.__price
    }
    
    turnOn() {
        return this.__isOn = true;
    }

    turnOff() {
        this.__isOn = false;
        this.__speed = 0;
    }

    accelerate(value) {
        return this.__speed < this.__maxSpeed ? this.__speed += value : this.__maxSpeed;
    }

    decelerate(value) {
        return this.__speed > 0 ? this.__speed -= value : 0;
    }

    drive(hours) {
       if (this.__isOn) return this.__distance +=this.__speed * hours;
    }
}


const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
