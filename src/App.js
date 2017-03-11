import React, { Component } from 'react';
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

  render() {


    return (

      <div className="App">
        <div className="App-header">
            <Button function="reload" text="reload"></Button>
            <Button function="preference" text="preference"></Button>
        </div>
          <div id="root"></div>

        <p className="App-main">
            {
                this.renderPictures()
            }
        </p>

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
