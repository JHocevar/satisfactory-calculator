import React, { Component } from "react";
import allMaterials from "../materials.json";

class Recipes extends Component {
  renderRecipe(key) {
    let { matsWithAlt } = this.props;
    if (matsWithAlt.includes(key)) {
      return (
        <div className="recipe-box" key={key}>
          <h5 className="text-center">{key}</h5>
          {this.renderButtons(key)}
        </div>
      );
    }
  }

  renderButtons(item) {
    let alts = [];
    for (let key in allMaterials) {
      if (allMaterials[key].item === item) {
        let material = allMaterials[key];
        material.name = key;
        alts.push(material);
      }
    }

    return alts.map((object, name) => {
      return (
        <div className="contain" key={name}>
          <label className="ml-2">
            <input
              type="radio"
              name={item}
              value="object.name"
              onChange={() => this.props.onChange(object.name, item)}
              checked={this.props.materials[object.item].name === object.name}
            />
            {object.name}
            <br />
          </label>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="recipes">
        {Object.keys(this.props.materials).map(key => {
          return this.renderRecipe(key);
        })}
      </div>
    );
  }
}

export default Recipes;
