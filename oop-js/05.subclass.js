function ITGuy(name) {
  this.name = name;
  this.department = "IT";
}

function Developer(name) {
  ITGuy.call(this, name);
  this.unit = "Software Development";
}

Developer.prototype = Object.create(ITGuy.prototype);
Developer.prototype.constructor;
Developer.prototype.constructor = Developer;

const ozgun = new Developer("Özgün");
ozgun instanceof Developer;
ozgun instanceof ITGuy;
ozgun.__proto__;
ozgun.__proto__ === Developer.prototype;
Object.getPrototypeOf(ozgun);
Object.getPrototypeOf(ozgun) === Developer.prototype;

ozgun.name;
ozgun.department;
ozgun.unit;
