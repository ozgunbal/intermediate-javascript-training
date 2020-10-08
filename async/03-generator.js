var x = 1;

function *foo() {
	x++;
    //yield;
    var y = yield; // pause!
    var z = yield;
    console.log(`y: ${y}`);
    console.log(`x: ${x}`);
    console.log(`z: ${z}`);
}

function bar() {
	x++;
}


var it = foo();

// start `foo()` here!
console.log(it.next());
console.log(x);
bar();
console.log(x);	
console.log(it.next(5));
console.log(it.next(8));
