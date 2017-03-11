import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Picture extends Component {


  render() {
      const { url, x, y } = this.props;
      return (
          <img src={url} alt="" style={{border: '20px solid #000000', position: 'relative', height: '350px', marginTop: "20px", marginRight:'100px' }} />
    );
  }
}

export default Picture;
