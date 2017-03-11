import React, { Component } from 'react';
import logo from './logo.svg';
import Picture from './Picture'
import './App.css';

class App extends Component {

    constructor (props) {
        super(props);
        this.state = { pictureGallery : App.initPictureGallery() }
    }

    static initPictureGallery() {
        const dirname = "/art/";
        let pictureGallery = [];
        let newString = "";
        for (let i = 1; i < 13; i++) {
            newString = dirname + "image" + i + ".jpg";
            console.log(newString);
            pictureGallery.push(newString);
        }
        return pictureGallery;
    }

  render() {


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
              this.renderPictures()
          }
      </div>
    );
  }

  renderPictures() {
      const pictureGallery = this.state.pictureGallery;
      let x = 100;
      return pictureGallery.map((url, index) => (
          <Picture key={index} url={url} x={x} y={200}/>
      ));
  }
}

export default App;
