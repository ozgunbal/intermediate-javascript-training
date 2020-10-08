const { Observable } = require("rxjs");
const { filter, map } = require('rxjs/operators')

const { EventEmitter } = require("events");

const fakeDOM = new EventEmitter();

const observable = new Observable((subscriber) => {
  fakeDOM.addListener("onkeypress", (key) => {
    subscriber.next(key);
  });
});

const observer1 = observable.subscribe(key => {
  console.log(`Observer 1`, key);
})

/*const observer2 = observable.pipe(
  filter(key => key !== 'Escape'),
  map(key => `You pressed ${key}`)
).subscribe(key => {
  console.log('Observer 2', key);
})*/

// User events
fakeDOM.emit("onkeypress", "ArrowUp");
fakeDOM.emit('onkeypress', 'Escape');
fakeDOM.emit("onkeypress", "ArrowDown");
