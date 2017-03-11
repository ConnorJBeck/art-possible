import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Picture extends Component {


  render() {
      const { url, x, y } = this.props;
    return (
      <img src={url} alt="" style={{position: 'relative', height: '350px', paddingTop: "20px", paddingRight:'100px' }} />
    );
  }
}

export default Picture;
