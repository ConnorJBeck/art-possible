import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Picture extends Component {


  render() {
      const { url, x, y } = this.props;
    return (
      <img src={url} alt="" style={{position: 'relative', width: '300px'}} />
    );
  }
}

export default Picture;
