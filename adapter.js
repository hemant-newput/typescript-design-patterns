var IPhone7 = /** @class */ (function () {
    function IPhone7() {
    }
    IPhone7.prototype.useLightening = function () {
        console.log('using lightening port..');
    };
    return IPhone7;
}());
var GooglePixel = /** @class */ (function () {
    function GooglePixel() {
    }
    GooglePixel.prototype.useMicroUSB = function () {
        console.log('using micro USB..');
    };
    return GooglePixel;
}());
var LighteningToMicroUSBConverter = /** @class */ (function () {
    function LighteningToMicroUSBConverter(iphone) {
        this.iPhoneDevice = iphone;
    }
    LighteningToMicroUSBConverter.prototype.useMicroUSB = function () {
        console.log('want to use micro USB converting to lightening...');
        this.iPhoneDevice.useLightening();
    };
    return LighteningToMicroUSBConverter;
}());
var iphone7 = new IPhone7();
var chargeAdapter = new LighteningToMicroUSBConverter(iphone7);
chargeAdapter.useMicroUSB();
