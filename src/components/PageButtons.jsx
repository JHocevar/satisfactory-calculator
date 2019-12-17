import React, { Component } from "react";

class PageButtons extends Component {
  render() {
    return (
      <div className="text-center m-2">
        <button
          className="btn btn-primary btn-sm m-1"
          onClick={() => this.props.onClick(1)}
        >
          Crafting
        </button>
        <button
          className="btn btn-primary btn-sm m-1"
          onClick={() => this.props.onClick(2)}
        >
          Recipies
        </button>
        <button
          className="btn btn-primary btn-sm m-1"
          onClick={() => this.props.onClick(3)}
        >
          Power
        </button>
      </div>
    );
  }
}

export default PageButtons;
