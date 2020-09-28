function Presenter(name) {
  this.name = name;
  this.welcomeSpeech = function () {
    console.log(`My name is ${this.name}`);
  };
}

const jsPresenter = new Presenter('Özgün');
jsPresenter;

jsPresenter.hasOwnProperty('welcomeSpeech');
jsPresenter instanceof Presenter;

const nonInstance = Presenter('Anon');
console.log(nonInstance);