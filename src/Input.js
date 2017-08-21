import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { text: '', fontType: "Times New Roman", fontSize: '12', bold: false, fontColor: "#ff0000" };
    this.handleText = this.handleText.bind(this);
    this.handleFont = this.handleFont.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.checkBold = this.checkBold.bind(this);
    this.fontColor = this.fontColor.bind(this);
  }

  handleText(event) {
    this.setState({ text: event.target.value });
  }

  handleFont(event) {
    this.setState({ fontType: event.target.value });
  }

  handleSize(event) {
    this.setState({ fontSize: event.target.value });
  }

  checkBold(event) {
    this.setState({ bold: event.target.checked });
  }

  fontColor(event) {
    this.setState({ fontColor: event.target.value });
  }

  render() {
    return (
      <div className="Editor">
        Text: 
        <input
          type="text"
          onChange={this.handleText}
          value={this.state.text}
        />
        <hr></hr>
        Font Type:
        <select value={this.state.fontType} onChange={this.handleFont}>
          <option value="Arial">Arial</option>
          <option value="Courier">Courier</option>
          <option value="Times New Roman">Times New Roman</option>
        </select>
        <p></p>
        Font Size: 
        <input
          type="text"
          onChange={this.handleSize}
          value={this.state.fontSize}
        />
        <p></p>
        Color:
          <input
            type="color"
            onChange={this.fontColor}
            name="fontColor"
            value={this.state.fontColor}
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
        <textarea rows="10" cols="50"
          value={this.state.text}
          style={{color: this.state.fontColor, fontFamily: this.state.fontType, fontSize: this.state.fontSize+"px", fontWeight: this.state.bold ? "bold" : "normal"}}
        />
      </div>
    );
  }
 }

export default Input;