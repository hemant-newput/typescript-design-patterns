var WeatherStation = /** @class */ (function () {
    function WeatherStation() {
        this.observers = [];
    }
    WeatherStation.prototype.registerObserver = function (o) {
        this.observers.push(o);
    };
    WeatherStation.prototype.removeObserver = function (o) {
        var index = this.observers.indexOf(o);
        this.observers.splice(index, 1);
    };
    WeatherStation.prototype.notifiyObserver = function () {
        for (var _i = 0, _a = this.observers; _i < _a.length; _i++) {
            var observer = _a[_i];
            observer.update(this.tempreture);
        }
    };
    WeatherStation.prototype.setTempreture = function (temp) {
        console.log('weather Station: new Tempreture measurement: ' + temp);
        this.tempreture = temp;
        this.notifiyObserver();
    };
    return WeatherStation;
}());
var TempretureDisplay = /** @class */ (function () {
    function TempretureDisplay(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    TempretureDisplay.prototype.update = function (tempreture) {
        console.log('Tempreture display i need to update my display');
        //logic go here
    };
    return TempretureDisplay;
}());
var Fan = /** @class */ (function () {
    function Fan(weatherStation) {
        this.subject = weatherStation;
        weatherStation.registerObserver(this);
    }
    Fan.prototype.update = function (tempreture) {
        if (tempreture > 25) {
            console.log("Its hot here turning myself on");
            //some real logic
        }
        else {
            console.log("Its noice and cool and we are turning off");
            //some real logic
        }
    };
    return Fan;
}());
var weatherStation = new WeatherStation();
var tempDisplay = new TempretureDisplay(weatherStation);
var fan = new Fan(weatherStation);
weatherStation.setTempreture(20);
weatherStation.setTempreture(30);
