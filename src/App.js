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
        let numArray = [];
        let newString;
        let numImages = 12;
        let num;

        for (let i = 1; i <= numImages; i++) {
            let found = false
            while (!found) {
                num = Math.floor(Math.random() * numImages) + 1;
                if (!numArray.includes(num)) {
                    numArray.push(num);
                    found = true;
                }
            }

            newString = dirname + "image" + num + ".jpg";
            console.log(newString);
            pictureGallery.push(newString);
        }

        return pictureGallery;
    }

    static shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.ceil(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

  render() {


    return (

      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
            <Button function="reload" text="reload"></Button>
            <Button function="preference" text="preference"></Button>
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
      let x = 100;
      return pictureGallery.map((url, index) => (
          <Picture key={index} url={url} x={x} y={200}/>
      ));
  }
}

export default App;
