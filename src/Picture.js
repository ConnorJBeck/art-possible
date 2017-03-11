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
      const { url, x, y } = this.props;
    return (
      <img onClick={this.handleClick} src={url} alt="" style={{position: 'relative', height: '350px', paddingRight:'100px' }} />
    );
  }
}

export default Picture;
