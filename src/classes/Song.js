const generatedIds = [];

function randNum(a, b) {
  return a + Math.floor(Math.random() * b);
}

function generateId() {
  const minSn = 100000000;
  const maxSn = 999999999;
  let snExists = false;
  let randSn;
  do {
    randSn = Math.floor(randNum(minSn, maxSn));
    snExists = generatedIds.includes(randSn);
  } while (snExists);
  generatedIds.push(randSn);
  return randSn;
}

export class Song {
  constructor(title, artist, link, provider) {
    this.title = title;
    this.link = link;
    this.provider = provider;
    this.artist = artist;
    this.id = generateId();
    this.like = null;
    this.viewCount = 0;
  }
}
