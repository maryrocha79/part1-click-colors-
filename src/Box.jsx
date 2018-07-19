import React, { Component } from 'react';
import Square from './Square';
import './Box.css';

class Box extends Component {
  render() {
    return (
      <div className="Box">
        <div className="row">
          {Array.from({ length: 24 }).map(c => <Square />)}
        </div>
      </div>
    );
  }
}

export default Box;
