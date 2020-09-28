class ITGuy {
  constructor(name) {
    this.name = name;
    this.department = "IT";
  }
}

class Developer extends ITGuy {
  constructor(name) { 
    super(name);
    this.unit = "Software Development";
  }
}

const ozgun = new Developer("Özgün");
ozgun instanceof Developer;
ozgun instanceof ITGuy;
ozgun.__proto__ === Developer.prototype;
Object.getPrototypeOf(ozgun) === Developer.prototype;

ozgun.name;
ozgun.department;
ozgun.unit;