var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
    }
    BlurayPlayer.prototype.on = function () {
        console.log("Bluray player turning on ");
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('Bluray player turning off');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('Playing bluray disc');
    };
    return BlurayPlayer;
}());
var Amplifier = /** @class */ (function () {
    function Amplifier() {
    }
    Amplifier.prototype.on = function () {
        console.log('turning on amplifier');
    };
    Amplifier.prototype.off = function () {
        console.log('Aplifier turninf Off');
    };
    Amplifier.prototype.setSource = function (source) {
        console.log('setting source to : ' + source);
    };
    Amplifier.prototype.setVolume = function (volume) {
        console.log('setting volume to :' + volume);
    };
    return Amplifier;
}());
var Lights = /** @class */ (function () {
    function Lights() {
    }
    Lights.prototype.dim = function () {
        console.log('Dimmimg lights..');
    };
    return Lights;
}());
var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("turning on TV");
    };
    TV.prototype.turnOff = function () {
        console.log("turning off TV");
    };
    return TV;
}());
var PopcornMaker = /** @class */ (function () {
    function PopcornMaker() {
    }
    PopcornMaker.prototype.turnOn = function () {
        console.log('popcorn maker turning on');
    };
    PopcornMaker.prototype.turnOff = function () {
        console.log('turning oFF popcorn maker');
    };
    PopcornMaker.prototype.pop = function () {
        console.log('popping corns!');
    };
    return PopcornMaker;
}());
var HomeThreaterFacade = /** @class */ (function () {
    function HomeThreaterFacade(blurayPlayer, amp, lights, tv, popcornMaker) {
        this.amp = amp;
        this.blurayPlayer = blurayPlayer;
        this.lights = lights;
        this.popcornMaker = popcornMaker;
        this.tv = tv;
    }
    HomeThreaterFacade.prototype.watchMovie = function () {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();
        this.lights.dim();
        this.tv.turnOn();
        this.amp.on();
        this.amp.setSource('bluray');
        this.amp.setVolume(11);
        this.blurayPlayer.on();
        this.blurayPlayer.play();
    };
    HomeThreaterFacade.prototype.endMovie = function () {
        this.popcornMaker.turnOff();
        this.amp.off();
        this.tv.turnOff();
        this.blurayPlayer.turnOff();
    };
    return HomeThreaterFacade;
}());
var blurayPlayer = new BlurayPlayer();
var amp = new Amplifier();
var lights = new Lights();
var tv = new TV();
var popcornMaker = new PopcornMaker();
var threater = new HomeThreaterFacade(blurayPlayer, amp, lights, tv, popcornMaker);
threater.watchMovie();
console.log('\n');
threater.endMovie();
