function extend (obj, mixin) {
  return Object.assign(obj, mixin);
}

myMixins = {
  paint: function (newColor) {
    console.log(`previous color: ${this.color}, new color: ${newColor}`)
    this.color = newColor;
  },
}

function Furniture(type, color) {
  this.type = type;
  this.color = color;
}

function WhiteGoods(type, color) {
  this.type = type;
  this.color = color;
}

extend(Furniture.prototype, myMixins)
extend(WhiteGoods.prototype, myMixins);

const sofa = new Furniture('sofa', 'brown');
sofa.paint('purple');

const refrigerator = new WhiteGoods('refrigerator', 'blue'); 
refrigerator.paint('red');