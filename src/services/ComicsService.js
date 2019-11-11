import md5 from "md5";

class ComicsService {

  constructor() {
    this.privateKey = process.env.MARVEL_PRIVATE_KEY;
    this.publicKey = process.env.MARVEL_PUBLIC_KEY;
    this.apiURL = 'http://gateway.marvel.com/v1/public/comics';

    this.offset = 0;

    this.cache = {};
  }

  getNextComics() {
    let result = this.getComics( this.offset );
    this.offset += 20;
    return result;
  }
  
  getComics(offset) {
    let ts = Date.now();
    let hash = md5( ts + this.privateKey + this.publicKey );
    let query = '?apikey=' + this.publicKey + '&ts=' + ts + '&hash=' + hash + '&orderBy=-issueNumber' + '&offset=' + offset;
    let resource = this.apiURL + query;
    if ( !this.cache[ resource ]) {
      this.cache[ resource ] = fetch( resource )
    }
    return this.cache[ resource ]; ;
  }

}


export default ComicsService = new ComicsService();