import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', bold: false };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.checkBold = this.checkBold.bind(this);
  }

  handleUpdate(event) {
    this.setState({ text: event.target.value });
  }

  checkBold(event) {
    this.setState({ bold: event.target.checked });
  }



  render() {
    return (
      <div className="Editor">
      text: 
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.text}
        />
        <p></p>
        Bold?:
        <input 
          type="checkbox"
          id="bold"
          onChange={this.checkBold} 
          checked={this.state.bold}
        />
        <hr></hr>
        <p>Output:</p>
        <textarea rows="10" cols="50"
          value={this.state.text}
          style={{fontWeight: this.state.bold ? "bold" : "normal"}}
        />

      </div>
    );
  }
 }

export default Input;