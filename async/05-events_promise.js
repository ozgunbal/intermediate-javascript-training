const { EventEmitter } = require('events');

const fakeDOM = new EventEmitter();

fakeDOM.addListener('onkeypress', (key) => {
  console.log(key);
})

/*const promise = new Promise((resolve) => {
  fakeDOM.addListener('onkeypress', (key) => {
    resolve(key);
  })
})*/


// User events
fakeDOM.emit('onkeypress', 'ArrowUp');
fakeDOM.emit('onkeypress', 'ArrowDown');