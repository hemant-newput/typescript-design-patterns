// Provides a simplified interface to a library, a framework, or any other complex set of classes.
// Identification: Facade can be recognized in a class that has a simple interface, but delegates most of the work to other classes. Usually, facades manage the full life cycle of objects they use.
class BlurayPlayer {
    on() {
        console.log(`Bluray player turning on `);
    }
    turnOff() {
        console.log('Bluray player turning off');
    }
    play() {
        console.log('Playing bluray disc')
    }
}
class Amplifier {
    on() {
        console.log('turning on amplifier')
    }
    off() {
        console.log('Aplifier turninf Off')
    }
    setSource(source: string) {
        console.log('setting source to : ' + source);
    }
    setVolume(volume: number) {
        console.log('setting volume to :' + volume)
    }
}

class Lights {
    dim() {
        console.log('Dimmimg lights..')
    }
}
class TV {
    turnOn() {
        console.log("turning on TV")
    }
    turnOff() {
        console.log("turning off TV")
    }
}
class PopcornMaker {
    turnOn() {
        console.log('popcorn maker turning on')
    }
    turnOff() {
        console.log('turning oFF popcorn maker')
    }
    pop() {
        console.log('popping corns!')
    }
}

class HomeThreaterFacade {
    private blurayPlayer: BlurayPlayer;
    private amp: Amplifier;
    private lights: Lights;
    private tv: TV;
    private popcornMaker: PopcornMaker;
    constructor(blurayPlayer: BlurayPlayer, amp: Amplifier, lights: Lights, tv: TV, popcornMaker: PopcornMaker) {
        this.amp = amp;
        this.blurayPlayer = blurayPlayer
        this.lights = lights;
        this.popcornMaker = popcornMaker;
        this.tv = tv;
    }
    public watchMovie() {
        this.popcornMaker.turnOn();
        this.popcornMaker.pop();

        this.lights.dim();

        this.tv.turnOn();

        this.amp.on();
        this.amp.setSource('bluray')
        this.amp.setVolume(11)

        this.blurayPlayer.on();
        this.blurayPlayer.play();
    }
    public endMovie() {
        this.popcornMaker.turnOff();
        this.amp.off();
        this.tv.turnOff();
        this.blurayPlayer.turnOff();
    }
}

let blurayPlayer=new BlurayPlayer();
let amp=new Amplifier();
let lights=new Lights();
let tv=new TV();
let popcornMaker=new PopcornMaker();

let threater= new HomeThreaterFacade(blurayPlayer,amp,lights,tv,popcornMaker);
threater.watchMovie();
console.log("\n")
threater.endMovie();