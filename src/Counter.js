import React, { Component } from 'react';
import { ThemeContext } from './App';

/** -------------- Class Components --------------------- */
export default class Counter extends Component {
  // all of the code inside this class will be a react component
  constructor(props) {
    super(props);
    this.state = {
      count: props.initialCount,
    };
  }
  render() {
    console.log('render the component');
    return (
      <ThemeContext.Consumer>
        {style => (
          <div>
            <button style={style} onClick={() => this.changeCount(-1)}>
              -
            </button>
            <span>{this.state.count}</span>
            <button style={style} onClick={() => this.changeCount(1)}>
              +
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
  changeCount(amount) {
    // to increase the count with 2. can't be done with object version
    this.setState(prevState => {
      return { count: prevState.count + amount };
    });
    this.setState(prevState => {
      return { count: prevState.count + amount };
    });
  }
}
