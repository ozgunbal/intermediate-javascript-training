function Stream (name) {
    this.name = name;
  }
  
  Stream.prototype.hasPublicAccess = true;
  Stream.prototype.play = function () {
    console.log(`${this.name} has${this.hasPublicAccess ? ' ' : ' not '}public access...`);
  };
  
  const youtube = new Stream('Youtube');
  youtube.play(); 
  youtube.hasPublicAccess;

  youtube.hasOwnProperty('name');
  youtube.hasOwnProperty('hasPublicAccess');

  Stream.prototype.isPrototypeOf(youtube);
  Object.getPrototypeOf(youtube);
  youtube.constructor === Stream;