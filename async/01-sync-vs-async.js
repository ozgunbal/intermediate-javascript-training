var slowTask = () => {
    const startTime = new Date().getTime();
    while(new Date().getTime() < startTime + 2000) {
        // wait 2 seconds
    }
    console.log("slow task finished");
}

var slowTask2 = () => {
    setTimeout(() => {
        console.log("slow task 2 finished");
    }, 2000);
}

var fastTask = () => {
    console.log("fast task finished");
}

console.time('measureTime');
fastTask();
//slowTask();
slowTask2();
fastTask();
fastTask();
console.timeEnd('measureTime');
