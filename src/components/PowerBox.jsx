import React, { Component } from "react";
import { fuels } from "../defaults";

class PowerBox extends Component {
  state = {};

  renderFuels() {
    return (
      <div>
        {Object.keys(fuels).map((key, index) => (
          <div className="fuels" key={index}>
            <div className="fuel-row">
              <label className="fuel-title">{fuels[key].name}</label>
              <input
                className="fuel-input"
                type="number"
                min="0"
                value={this.props.fuelsAmt[key]}
                onChange={event => this.props.onChange(key, event)}
              />
              <label className="fuel-text">
                {"Using " +
                  " " +
                  (
                    (this.props.fuelsAmt[key] * fuels[key].burnTime) /
                    60
                  ).toFixed(3) +
                  " " +
                  fuels[key].generator}
              </label>
              <span>
                {"Producing: " +
                  (
                    ((this.props.fuelsAmt[key] * fuels[key].burnTime) / 60) *
                    fuels[key].powerGenerated
                  ).toFixed(3) +
                  " MW"}
              </span>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    return <div>{this.renderFuels()}</div>;
  }
}

export default PowerBox;
