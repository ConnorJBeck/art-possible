import React, { Component } from 'react';
import Picture from './Picture'
import './App.css';
import Button from './Button'


class App extends Component {

    constructor (props) {
        super(props);
        this.state = {
            pictureGallery : App.initPictureGallery() ,
            pictures : [],
            count: 0,
            width : '0px',
            height : '0px',
            pictureInformation: null
        };
        this.displayPicture = this.displayPicture.bind(this);
        this.loadImage = this.loadImage.bind(this);
        this.loadPictures = this.loadPictures.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
        this.loadImage()
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    static initPictureGallery() {
        const dirname = "/art/";
        let pictureGallery = [];
        let numArray = [];
        let newImgURL;
        let numImages = 12;
        let num;

        for (let i = 1; i <= numImages; i++) {
            let found = false;
            while (!found) {
                num = Math.floor(Math.random() * numImages) + 1;
                if (!numArray.includes(num)) {
                    numArray.push(num);
                    found = true;
                }
            }

            newImgURL = dirname + "image" + num + ".jpg";
            console.log(newImgURL);

            pictureGallery.push(newImgURL);
        }

        return pictureGallery;
    }

    loadImage() {
        const pictures = this.state.pictureGallery.map((url) => {
            const img = new Image();
            img.onload = () => {
                console.log('loaded');
                const { count } = this.state;
                this.setState({
                    count: count+1,
                })
            };
            img.src = url;
            return img
        });
        console.log(pictures);
        this.setState({
            pictures
        });
    }

  render() {


    return (
      <div className="App">
        <div className="App-header">
            <Button function="reload" text="reload"></Button>
            <Button function="preference" text="preference"></Button>
        </div>
          <div id="root"></div>

            {
                this.loadPictures()
            }
      </div>
    );
  }

    loadPictures() {
        const { count, pictureGallery, pictures, width, height} = this.state;
        if (count !== pictureGallery.length) {
            return (<div>Loading...{count}/{pictureGallery.length}</div>);
        }
        return (
            <div className="App-main">
                {
                    pictures.map((image, index) => (
                        <Picture onClick={this.displayPicture} key={index} url={image.src} height={height/2.5} />
                    ))
                }
            </div>
        );
    }

    displayPicture() {
        this.setState({pictureInformation: "renderNothing"});
    }

    renderNothing() {
        return (
            <div className="picInfo">
                <h1>Picture information for {this.props.index}</h1>
                <ul>
                    <li>Creator: TODO</li>
                    <li>Location TODO:</li>
                    <li>Personal Website: TODO</li>
                </ul>
            </div>
        )
    }
}

export default App;
