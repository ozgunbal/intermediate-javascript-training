// Imperative
let name = "A geek";
let month = new Date().getMonth();

let quote;

if (month === 4) {
  quote = "May the 4th be with you";
} else if (month === 10) {
  quote = "Remember, remember the 5th of November";
} else if (month === 9) {
  quote = "Trick or treat!";
} else {
  quote = "random geeky stuff";
}

quote =
  name + ' likes to quote "' + quote + '" in ' + (month + 1) + "th month.";
console.log(quote);

// Object Oriented
class Person {
  constructor(name) {
    this.name = name;
  }

  findQuote(date = new Date()) {
    const month = date.getMonth();

    if (month === 4) {
      return "May the 4th be with you";
    } else if (month === 10) {
      return "Remember, remember the 5th of November";
    } else if (month === 9) {
      return "Trick or treat!";
    } else {
      return "random geeky stuff";
    }
  }

  quote(date = new Date()) {
    return `${this.name} likes to quote "${this.findQuote(date)}" in ${
      date.getMonth() + 1
    }th month.`;
  }
}

const geek = new Person("A geek");
geek.quote();

// Functional
const quoteFunctional = (name) => (sentence, month) => `${name} likes to quote "${sentence}" in ${month + 1}th month.`;
  

const determineQuote = (callback) => {
  const month = new Date().getMonth();

  if (month === 4) {
    return callback("May the 4th be with you", month);
  } else if (month === 10) {
    return  callback("Remember, remember the 5th of November", month);
  } else if (month === 9) {
    return callback("Trick or treat!", month);
  } else {
    console.log('lel');
    return callback("random geeky stuff", month);
  }
};

determineQuote(quoteFunctional("A geek"));