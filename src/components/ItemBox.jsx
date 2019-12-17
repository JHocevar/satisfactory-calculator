import React, { Component } from "react";

class ItemBox extends Component {
  renderItemBox(items) {
    return (
      <div>
        {Object.keys(items).map((key, index) => (
          <React.Fragment key={index}>
            <div className="item-box">
              <span>{key}</span>
              <span> IMG </span>
              <br />

              <input
                className="item-input"
                type="number"
                min-value="0"
                value={items[key]}
                onChange={event => this.props.onItemChange(key, event)}
              />
              <br />
              <button
                className="btn btn-sm btn-secondary m-2"
                onClick={() => this.props.onAddItem(key)}
              >
                {" Add 1 "}
              </button>
              <button
                className="btn btn-sm btn-secondary m-2"
                onClick={() => this.props.onClearItem(key)}
              >
                {" Clear all "}
              </button>
              <br />
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="items">
        <button
          className="btn btn-large btn-primary mb-2"
          onClick={this.props.onClearAll}
        >
          Reset
        </button>
        <br />
        {this.renderItemBox(this.props.items)}
        <br />
      </div>
    );
  }
}

export default ItemBox;
