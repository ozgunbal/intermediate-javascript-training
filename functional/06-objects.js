const obj = {
  num: 2,
  deep: {
    another: 3,
  },
}

const frozen = Object.freeze(obj);

frozen.num = 5;
frozen.deep.another = 6;
frozen;

// don't mutate objects for data update
const updateStore = (oldState, newState) => {
  return Object.assign({}, oldState, newState, { updateAt: new Date()});
  // or
  return {...oldState, ...newState, updateAt: new Date() };
}

const current = { clickCount: 1 };

const next = updateStore(current, { clickCount: 2});
current;
next;