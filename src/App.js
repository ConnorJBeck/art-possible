import React, { Component } from 'react';
import logo from './logo.svg';
import Picture from './Picture'
import './App.css';
import Button from './Button'


class App extends Component {

    constructor (props) {
        super(props);
        this.state = { pictureGallery : App.initPictureGallery() }
    }

    static initPictureGallery() {
        const dirname = "/art/";
        let pictureGallery = [];
        let newString = "";
        for (let i = 1; i < 7; i++) {
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
            <Button text-on="yes" text-off="OFF"></Button>
            <Button text-on="yes" text-off="no"></Button>
        </div>
          <div id="root"></div>
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
      return pictureGallery.map((url, index) => (
          <Picture key={index} url={url} x={100} y={200}/>
      ));
  }
}

export default App;