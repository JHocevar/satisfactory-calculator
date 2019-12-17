import React, { Component } from "react";

class ItemRow extends Component {
  renderRow() {
    const { item, count } = this.props;
    return (
      <React.Fragment>
        <li>{item + " " + count.toFixed(3)}</li>
        <ol className="item-list">{this.calculateItem(item, count)}</ol>
      </React.Fragment>
    );
  }

  renderItem(itemNum) {
    const { item, count, baseMaterials, materials } = this.props;
    let ratio = count / materials[item].produced;
    switch (itemNum) {
      case 1:
        if (materials[item].input1 === null) break;
        return (
          <ItemRow
            item={materials[item].input1}
            count={ratio * materials[item].amt1}
            baseMaterials={baseMaterials}
            materials={materials}
          />
        );
      case 2:
        if (materials[item].input2 === null) break;
        return (
          <ItemRow
            item={materials[item].input2}
            count={ratio * materials[item].amt2}
            baseMaterials={baseMaterials}
            materials={materials}
          />
        );
      case 3:
        if (materials[item].input3 === null) break;
        return (
          <ItemRow
            item={materials[item].input3}
            count={ratio * materials[item].amt3}
            baseMaterials={baseMaterials}
            materials={materials}
          />
        );
      case 4:
        if (materials[item].input4 === null) break;
        return (
          <ItemRow
            item={materials[item].input4}
            count={ratio * materials[item].amt4}
            baseMaterials={baseMaterials}
            materials={materials}
          />
        );
      default:
        return null;
    }
  }

  calculateItem() {
    const { item, baseMaterials } = this.props;
    if (baseMaterials[item] === true) {
      return; // Do nothing if the item is a base item
    }

    return (
      <React.Fragment>
        {this.renderItem(1)}
        {this.renderItem(2)}
        {this.renderItem(3)}
        {this.renderItem(4)}
      </React.Fragment>
    );
  }

  render() {
    return <React.Fragment>{this.renderRow()}</React.Fragment>;
  }
}

export default ItemRow;
