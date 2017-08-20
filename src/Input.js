import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { message: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    return (
      <div className="Editor">
      Message: 
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.message}
        />
        <hr></hr>


        <p>Output:</p>
        <textarea rows="10" cols="50"
          value={this.state.message}
        />

      </div>
    );
  }
 }

export default Input;