// event -driven programming using es5
//const events = require('events');
const {
    EventEmitter
} = require('events');

// create event emitter object?

//const EventEmitter = events.EventEmitter();
const eventEm = new EventEmitter();

//Listeners

eventEm.once('greet', () => {
    console.log(`greet 1 event`)
})

eventEm.on('hello', () => {
    console.log(`hello 1 event`)
})

eventEm.on('greet', () => {
    console.log(`greet 2 event`)
})

//async events
eventEm.on(`asyncevent`, function() {
    setImmediate(function() {
        console.log('from async immediate');
    })
})

class Room extends EventEmitter {
    constructor() {
        super();
        this.on('initalize', () => {
            console.log('Lights system is initalized');
        })
        this.on('destroy', function ()  {
            console.log( this );
        })
    }
    //biz apis
    open() {
        this.emit('initalize');
    }
    close() {
        this.emit('destroy');
    }
}



eventEm.emit('greet');
eventEm.emit('hello');
eventEm.emit(`asyncevent`);
eventEm.emit('greet');
eventEm.emit('hello');


const room = new Room();
room.open();
room.close();