import React, { Component } from "react";

class SideBar extends Component {
  renderCheckboxes() {
    let values = this.props.materials;
    return (
      <div>
        {Object.keys(values).map((key, index) => (
          <React.Fragment key={index}>
            <span className="item-checkbox">
              <input
                type="checkbox"
                onChange={() => this.props.onChange(key)}
                checked={values[key] === true}
              />{" "}
              {key}
            </span>
            <br />
          </React.Fragment>
        ))}
      </div>
    );
  }
  render() {
    return (
      <div className="sidebar white">
        <span>Base Materials</span> <br />
        {this.renderCheckboxes()}
      </div>
    );
  }
}

export default SideBar;
