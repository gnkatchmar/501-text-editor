import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', bold: false, italics: false };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.checkBold = this.checkBold.bind(this);
    this.checkItalics = this.checkItalics.bind(this);
  }

  handleUpdate(event) {
    this.setState({ text: event.target.value });
  }

  checkBold(event) {
    this.setState({ bold: event.target.checked });
  }

  checkItalics(event) {
    this.setState({ italics: event.target.checked });
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
        <p></p>
        Italics?:
        <input 
          type="checkbox"
          id="italics"
          onChange={this.checkItalics} 
          checked={this.state.italics}
        />






        <hr></hr>
        <p>Output:</p>
        <textarea rows="10" cols="50"
          value={this.state.text}
          style={{fontWeight: this.state.bold ? "bold" : "normal"}}
          style={{fontWeight: this.state.italics ? "italics" : "normal"}}
        />

      </div>
    );
  }
 }

export default Input;