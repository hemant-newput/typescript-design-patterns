var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var modelS = /** @class */ (function (_super) {
    __extends(modelS, _super);
    function modelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model S";
        return _this;
    }
    modelS.prototype.cost = function () {
        return 70000;
    };
    return modelS;
}(Car));
var modeLX = /** @class */ (function (_super) {
    __extends(modeLX, _super);
    function modeLX() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Model X";
        return _this;
    }
    modeLX.prototype.cost = function () {
        return 80000;
    };
    return modeLX;
}(Car));
var carOptions = /** @class */ (function () {
    function carOptions() {
    }
    return carOptions;
}());
var enhancedAutopilot = /** @class */ (function (_super) {
    __extends(enhancedAutopilot, _super);
    function enhancedAutopilot(car) {
        var _this = _super.call(this) || this;
        _this.enhancedCar = car;
        return _this;
    }
    enhancedAutopilot.prototype.getDescription = function () {
        return this.enhancedCar.getDescription() + ', enhancedAutoPliot';
    };
    enhancedAutopilot.prototype.cost = function () {
        return this.enhancedCar.cost() + 4000;
    };
    return enhancedAutopilot;
}(carOptions));
var alexaSupport = /** @class */ (function (_super) {
    __extends(alexaSupport, _super);
    function alexaSupport(car) {
        var _this = _super.call(this) || this;
        _this.enhancedCar = car;
        return _this;
    }
    alexaSupport.prototype.getDescription = function () {
        return this.enhancedCar.getDescription() + ', alexaSupport';
    };
    alexaSupport.prototype.cost = function () {
        return this.enhancedCar.cost() + 1500;
    };
    return alexaSupport;
}(carOptions));
var rearFacingSeats = /** @class */ (function (_super) {
    __extends(rearFacingSeats, _super);
    function rearFacingSeats(car) {
        var _this = _super.call(this) || this;
        _this.enhancedCar = car;
        return _this;
    }
    rearFacingSeats.prototype.getDescription = function () {
        return this.enhancedCar.getDescription() + ', rearFacingSeats';
    };
    rearFacingSeats.prototype.cost = function () {
        return this.enhancedCar.cost() + 2000;
    };
    return rearFacingSeats;
}(carOptions));
var myTesla = new modeLX();
console.log(myTesla.getDescription() + " :" + myTesla.cost());
myTesla = new alexaSupport(myTesla);
console.log(myTesla.getDescription() + " :" + myTesla.cost());
myTesla = new rearFacingSeats(myTesla);
console.log(myTesla.getDescription() + " :" + myTesla.cost());
myTesla = new enhancedAutopilot(myTesla);
console.log(myTesla.getDescription() + " :" + myTesla.cost());
