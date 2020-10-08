const promise = () =>
  new Promise((resolve, reject) =>
    //reject('I failed!')
    resolve()
  );

promise()
  .then((_) => {
    console.log("I'm in the .then()");
    console.log("Success!");
    //console.log(x);
    return "See you at next then(), then! (pun intended)";
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log("I'm in the .catch()");
    console.log(err);
  });