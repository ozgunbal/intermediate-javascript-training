const StuffFactory = {
  Stuff : function (stuffType) {
    return Object.create(this.stuffs[stuffType]);
  },
  stuffs: {
    whitegood: {
      color: 'white',
      electricity: true,
    },
    furniture: {
      electricity: false,
    },
  },
}

const dishwasher = StuffFactory.Stuff("whitegood");

dishwasher.color;
dishwasher.electricity;

Object.getPrototypeOf(dishwasher);
Object.getPrototypeOf(dishwasher) === StuffFactory.stuffs.whitegood;