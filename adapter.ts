// Allows objects with incompatible interfaces to collaborate.
// Identification: Adapter is recognizable by a constructor which takes an instance of a different abstract/interface type. When the adapter receives a call to any of its methods, it translates parameters to the appropriate format and then directs the call to one or several methods of the wrapped object.
interface IPhone {
    useLightening();
}
interface Android {
    useMicroUSB();
}

class IPhone7 implements IPhone {
    useLightening() {
        console.log('using lightening port..')
    }
}
class GooglePixel implements Android {
    useMicroUSB() {
        console.log('using micro USB..')
    }
}


class LighteningToMicroUSBConverter implements Android {
    iPhoneDevice: IPhone;
    constructor(iphone: IPhone) {
        this.iPhoneDevice = iphone;
    }
    useMicroUSB() {
        console.log('want to use micro USB converting to lightening...')
        this.iPhoneDevice.useLightening();
    }
}

let iphone7 = new IPhone7();
let chargeAdapter = new LighteningToMicroUSBConverter(iphone7);
chargeAdapter.useMicroUSB();