// constructor
function Furniture (type, color) {
  this.type = type;
  this.color = color;

  this.paint = function (newColor) {
    this.color = newColor;
  }
}

const sofa = new Furniture('sofa', 'white');
const bookshelf = new Furniture('bookshelf', 'brown');

sofa.paint === bookshelf.paint;

// constructor with prototypes
function WhiteGoods (type, color) {
  this.type = type;
  this.color = color;
}

WhiteGoods.prototype.paint = function (newColor) {
  this.color = newColor;
};

const dishwasher = new WhiteGoods('dishwasher', 'white');
const refrigerator = new WhiteGoods('refrigerator', 'blue'); 

dishwasher.paint === refrigerator.paint;


function Multiplier (mult = 2) {
  this.count = 1;
  this.multiplier = mult;
}

Multiplier.prototype.multiply = function () {
  return this.count *= this.multiplier;
}

const fourMultipler = new Multiplier(4);
fourMultipler.multiply();
fourMultipler.multiplier = 3;
fourMultipler.multiply();