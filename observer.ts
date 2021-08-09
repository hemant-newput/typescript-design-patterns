// Lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.
// Identification: The pattern can be recognized by subscription methods, that store objects in a list and by calls to the update method issued to objects in that list.
interface Subject {
    registerObserver(o: Observer);
    removeObserver(o: Observer);
    notifiyObserver();

}
interface Observer {
    update(tempreture: number);
}
class WeatherStation implements Subject {//! called subject becoz other classes can monitor this class
    private observers: Observer[] = [];
    registerObserver(o: Observer) {
        this.observers.push(o);
    }
    removeObserver(o: Observer) {
        let index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    }
    notifiyObserver() {
        for (let observer of this.observers) {
            observer.update(this.tempreture);
        }
    }
    private tempreture: number;
    setTempreture(temp: number) {
        console.log('weather Station: new Tempreture measurement: ' + temp)
        this.tempreture = temp;
        this.notifiyObserver();
    }
}

class TempretureDisplay implements Observer { // * this is an observer becoz this one observes other object
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(tempreture: number) {
        console.log('Tempreture display i need to update my display');
        //logic go here
    }
}
class Fan implements Observer { // * this is an observer becoz this one observes other object
    private subject: Subject;
    constructor(weatherStation: Subject) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    update(tempreture: number) {
        if (tempreture > 25) {
            console.log("Its hot here turning myself on")
            //some real logic
        } else {
            console.log("Its nice and cool and we are turning off")
            //some real logic
        }
    }
}


let weatherStation = new WeatherStation();
let tempDisplay = new TempretureDisplay(weatherStation)
let fan = new Fan(weatherStation)
weatherStation.setTempreture(20);
weatherStation.setTempreture(30);