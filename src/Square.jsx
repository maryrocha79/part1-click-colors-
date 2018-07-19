import React, { Component } from 'react';
import './Square.css';

const colors = [
  'grey',
  'blue',
  'orange',
  'red',
  'yellow',
  'magenta',
  'yellowgreen',
  'salmon',
  'purple',
  'white',
  'pink',
  'greenyellow'
];

class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.getRandomColor() // "pink"
    };
  }
  getRandomColor() {
    return Math.floor(Math.random() * colors.length);
  }

  handleClick() {
    this.setState(cst => ({ color: (cst.color + 1) % colors.length }));
  }

  render() {
    return (
      <div className="col-2">
        <div
          className="Square"
          onClick={evt => this.handleClick()}
          style={{ backgroundColor: colors[this.state.color] }}
        />
      </div>
    );
  }
}

export default Square;
