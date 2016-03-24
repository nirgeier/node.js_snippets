// Load our pre defined module
var OurModule = require('./OurModule'),
    EventEmitter = require('events').EventEmitter,
    emitter = new EventEmitter();

// Create few instances of 'OurModule'
var instance1 = new OurModule();
var instance2 = new OurModule();

instance1.setName('instance1');
console.log(`instance1 name = ${instance1.getName()}`);

// Add event to set the name
instance2.on('changeName', function(newName) {

    console.log('--- Event captured [instance2 : changeName]....');
    this.setName(newName);
});

// Fire event on the instance2
instance2.emit('changeName', 'New name 2');


// Verify that the name was updated (from the event)
console.log(`instance2 name = ${instance2.getName()}`);


// Since we have created a new event emitter here it will not fire
// events on our instances.
instance2.on('customEvent', function() {
    console.log('--- Event captured [instance2 : customEvent]....');
});

// Who will capture this event ???
emitter.on('customEvent', function() {
    console.log('--- Event captured [emitter : customEvent]....');
});

instance2.emit('customEvent');
