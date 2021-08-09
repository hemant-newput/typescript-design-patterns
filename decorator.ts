// Lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.
// Identification: Decorator can be recognized by creation methods or constructor that accept objects of the same class or interface as a current class.
abstract class Car {
    public description: string;
    public getDescription(): string {
        return this.description;
    }
    public abstract cost(): number
}
class modelS extends Car {
    public description: string = "Model S";
    public cost(): number {
        return 70000;
    }
}
class modeLX extends Car {
    public description: string= "Model X";
    public cost(): number {
        return 80000;
    }
}

abstract class carOptions {
    public decoratedCar: Car;
    public description: string;
    public abstract getDescription(): string;
    public abstract cost(): number;
}

class enhancedAutopilot extends carOptions {
    public enhancedCar;
    constructor(car: Car) {
        super();
        this.enhancedCar = car;
    }
    public getDescription(): string {
        return this.enhancedCar.getDescription() + ', enhancedAutoPliot'
    }
    public cost(): number {
        return this.enhancedCar.cost() + 4000;
    }
}

class alexaSupport extends carOptions {
    public enhancedCar;
    constructor(car: Car) {
        super();
        this.enhancedCar = car;
    }
    public getDescription(): string {
        return this.enhancedCar.getDescription() + ', alexaSupport'
    }
    public cost(): number {
        return this.enhancedCar.cost() + 1500;
    }
}

class rearFacingSeats extends carOptions {
    public enhancedCar;
    constructor(car: Car) {
        super();
        this.enhancedCar = car;
    }
    public getDescription(): string {
        return this.enhancedCar.getDescription() + ', rearFacingSeats'
    }
    public cost(): number {
        return this.enhancedCar.cost() + 2000;
    }
}

let myTesla = new modeLX();
console.log(`${myTesla.getDescription()} :${myTesla.cost()}`);
myTesla = new alexaSupport(myTesla);
console.log(`${myTesla.getDescription()} :${myTesla.cost()}`);
myTesla = new rearFacingSeats(myTesla);
console.log(`${myTesla.getDescription()} :${myTesla.cost()}`);
myTesla = new enhancedAutopilot(myTesla);
console.log(`${myTesla.getDescription()} :${myTesla.cost()}`);
