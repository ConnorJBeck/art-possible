import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Picture extends Component {

    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick();
    }

  render() {
  const { url, height } = this.props;
      return (
          <img onClick={this.handleClick} src={url} alt="" style={{border: '20px solid #000000', position: 'relative', height: height + 'px', marginTop: "20px", marginRight:'100px' }} />
    );
  }
}

export default Picture;
