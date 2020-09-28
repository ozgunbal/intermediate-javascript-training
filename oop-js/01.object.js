// Object literal
const withLiteral = {
  num: 1,
  str: "JS",
  flag: true,
  arr: [2, 3],
  fnc: () => {
    console.log("function");
  },
  obj: {
    deepProp: "2nd level",
  },
};

// Object constructor - don't prefer if there's not specific reason
const withConstructor = new Object({
  num: 1,
  str: "JS",
  flag: true,
  arr: [2, 3],
  fnc: () => {
    console.log("function");
  },
  obj: {
    deepProp: "2nd level",
  },
});

withLiteral;
withConstructor;

// Comparison
withLiteral === withConstructor;

// Copy by reference
const replica = withLiteral;
replica === withLiteral;

delete withLiteral.obj;
withLiteral;

// Mutation
replica.num = 2;
withLiteral;

// Function/method call
withLiteral.fnc();
withConstructor['fnc']();

