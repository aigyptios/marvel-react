import React, { Component} from "react";
import "./App.css";

import ComicViewer from './components/ComicViewer';

class App extends Component {

  render(){
    return(
      <div className="App">
        <h1> Marvel Comics </h1>
        <ComicViewer ></ComicViewer>
      </div>
    );
  }
}

export default App;