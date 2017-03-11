import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Picture extends Component {


  render() {
      const { url, height } = this.props;
      return (
        <img src={url} alt="" style={{position: 'relative', height: height + 'px', paddingTop: "20px", paddingRight:'100px' }} />
      );
  }
}

export default Picture;
