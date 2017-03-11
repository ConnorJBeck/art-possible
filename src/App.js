import React, { Component } from 'react';
import logo from './logo.svg';
import Picture from './Picture'
import './App.css';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = { pictureGallery : ['/art/aerie W.jpg', 'url2'] }
    }

  render() {
        const pictureGallery = this.state.pictureGallery;
    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          {
              pictureGallery.map((url, index) => (
                  <Picture key={index} url={url} x={100} y={200}/>
              ))
          }
      </div>
    );
  }
}

export default App;
