import React, { Component } from "react";
import ItemRow from "./ItemRow";

class ItemList extends Component {
  renderList(items) {
    return (
      <div>
        {Object.keys(items).map((key, index) => (
          <React.Fragment key={index}>
            <ol className="item-list">
              <ItemRow
                item={key}
                count={items[key]}
                baseMaterials={this.props.baseMaterials}
                materials={this.props.materials}
              />
            </ol>
          </React.Fragment>
        ))}
      </div>
    );
  }

  render() {
    return (
      <div className="text-center white">
        <h3>Currently Crafting</h3>
        {this.renderList(this.props.items)}
      </div>
    );
  }
}

export default ItemList;
