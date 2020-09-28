// this
const language = {
  name: "Javascript",
  log: function () {
    console.log(this);
    console.log(`My favourite language is ${this.name}`);
  },
};

language.log();

const pythonIsTheBest = language.log;
// pythonIsTheBest();


// call-sites
const anime = {
  name: 'One Piece',
  watchStatus : function (episodeNumber) {
    return `I'm at ${episodeNumber}th episode of the ${this.name}`;
  }
}

anime.watchStatus(934);

anime.watchStatus.call({ name: 'Naruto'}, 45);
anime.watchStatus.apply({ name: 'Bleach'}, [32]);

const fmaStatus = anime.watchStatus.bind({ name: 'FMA' }, 13);
fmaStatus();