const multiplier = (mult = 2) => {
  let count = 1;

  return () => {
    count *= mult;
    return count;
  }
}

const threeMultiplier = multiplier(3);
threeMultiplier();
threeMultiplier();

// Reveal
const whitegood = (type, color) => {
  let internalColor = color;

  const paint = (newColor) => {
    internalColor = newColor;
  };

  return {
    getType: () => type,
    getColor: () => internalColor,
    paint,
  };
}

const dishwasher = whitegood("dishwasher", "white");

dishwasher.color;
dishwasher.type;
dishwasher.getType();
dishwasher.getColor();
dishwasher.paint("blue");

// IIFE
const refrigerator = (function (type, color) {
  let internalColor = color;

  const paint = (newColor) => {
    internalColor = newColor;
  };

  return {
    getType: () => type,
    getColor: () => internalColor,
    paint,
  };
})("refrigerator", "red");

refrigerator;