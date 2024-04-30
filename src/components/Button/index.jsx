import "./styles.css";

import { Component } from "react";

export class Button extends Component {
  render() {
    const { text, onClick, isDisable } = this.props;

    return (
      <>
        <button disabled={isDisable} className="btn" onClick={onClick}>
          {text}
        </button>
      </>
    );
  }
}
