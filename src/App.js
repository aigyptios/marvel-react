import React, { Component} from "react";
import "./App.css";

import md5 from "md5";

class App extends Component{

  componentDidMount() {

    let privateKey = process.env.MARVEL_PRIVATE_KEY;
    let publicKey = process.env.MARVEL_PUBLIC_KEY;
    let ts = Date.now();
    let hash = md5( ts + privateKey + publicKey );

    let query = '?apikey=' + publicKey + '&ts=' + ts + '&hash=' + hash;

    fetch('http://gateway.marvel.com/v1/public/comics' + query);
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, World! </h1>
        <p>What's going on?</p>
      </div>
    );
  }
}

export default App;