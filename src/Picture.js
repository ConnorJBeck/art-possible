import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Picture extends Component {


  render() {
      const { url, x, y } = this.props;
    return (
      <img src={url} style={{position: 'absolute', top: y, left: x }} />
    );
  }
}

export default Picture;
