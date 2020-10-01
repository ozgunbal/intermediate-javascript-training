const customMap = (fn, arr) => arr.map(fn);

const customFilter = (fn, arr) => arr.filter(fn); 

const customReduce = (fn, acc, arr) => arr.reduce(fn, acc);

const partial = (fn, ...presetArgs) => (...laterArgs) =>
  fn(...presetArgs, ...laterArgs);

const unary = fn => first => fn(first);