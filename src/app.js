import React, { Component } from "react";
import { defaultItemOptions, baseOptions, fuels } from "./defaults";
import materials from "./materials.json";
import TitleBar from "./components/TitleBar";
import SideBar from "./components/SideBar";
import ItemBox from "./components/ItemBox";
import ItemList from "./components/ItemList";
import PageButtons from "./components/PageButtons";
import Recipes from "./components/Recipes";
import PowerBox from "./components/PowerBox";

class App extends Component {
  constructor() {
    super();
    let itemOptions = {};
    for (let index in defaultItemOptions) {
      itemOptions[defaultItemOptions[index]] = 0;
    }

    let baseMats = {};
    for (let index in baseOptions) {
      baseMats[baseOptions[index]] = true;
    }

    let baseMaterials = {};
    let activeRecipes = {};
    let matsWithAlt = [];
    for (let key in materials) {
      baseMaterials[key] = materials[key].base;
      if (Object.keys(baseMats).includes(key)) {
        baseMaterials[key] = baseMats[key];
      }
      if (materials[key].alt === false) {
        activeRecipes[key] = materials[key];
      } else if (!matsWithAlt.includes(materials[key].item)) {
        matsWithAlt.push(materials[key].item);
      }
    }

    let fuel = {};
    Object.keys(fuels).map((key, index) => {
      fuel[key] = 0;
      return null;
    });

    this.state = {
      matsWithAlt: matsWithAlt,
      activeRecipes: activeRecipes, // The current list of active recipies, starts out with no alternative recipies
      baseMaterials: baseMaterials,
      baseOptions: baseMats,
      itemOptions: itemOptions,
      itemsToCraft: {},
      pageNum: 1,
      fuels: fuel
    };
  }

  updateItemsToCraft() {
    const itemOptions = this.state.itemOptions;
    let itemsToCraft = {};

    for (let key in itemOptions) {
      if (itemOptions[key] > 0) {
        itemsToCraft[key] = itemOptions[key];
      }
    }

    this.setState({ itemsToCraft: itemsToCraft });
  }

  handleAddItem = item => {
    let items = this.state.itemOptions;
    items[item] = items[item] + 1;
    this.setState({ itemOptions: items });
    this.updateItemsToCraft();
  };

  handleClearItem = item => {
    let items = this.state.itemOptions;
    items[item] = 0;
    this.setState({ itemOptions: items });
    this.updateItemsToCraft();
  };

  handleClearAll = () => {
    let itemOptions = this.state.itemOptions;
    for (var key in itemOptions) {
      itemOptions[key] = 0;
    }
    this.setState({ itemOptions: itemOptions });
    this.updateItemsToCraft();
  };

  handleBaseChange = material => {
    let baseMaterials = this.state.baseMaterials;
    baseMaterials[material] = !baseMaterials[material];

    let baseOps = this.state.baseOptions;
    baseOps[material] = !baseOps[material];

    this.setState({ baseMaterials: baseMaterials, baseOptions: baseOps });
  };

  handlePageChange = pageNum => {
    this.setState({ pageNum: pageNum });
  };

  handleRecipeChange = (recipeName, item) => {
    let activeRecipes = JSON.parse(JSON.stringify(this.state.activeRecipes));
    activeRecipes[item] = materials[recipeName];
    this.setState({ activeRecipes: activeRecipes });
  };

  handleFuelInput = (generator, event) => {
    let fuels = JSON.parse(JSON.stringify(this.state.fuels));
    fuels[generator] = event.target.value;
    if (fuels[generator] === "") {
      fuels[generator] = 0;
    }
    this.setState({ fuels: fuels });
  };

  handleItemInput = (item, event) => {
    let items = this.state.itemOptions;
    items[item] = parseFloat(event.target.value);
    if (items[item] === "") {
      items[item] = 0;
    }
    this.setState({ itemOptions: items });
    // console.log("updated");
    this.updateItemsToCraft();
    // console.log("updated item to", event.target.value);
  };

  renderPage() {
    switch (this.state.pageNum) {
      case 1:
        return (
          <React.Fragment>
            <SideBar
              materials={this.state.baseOptions}
              onChange={this.handleBaseChange}
            />
            <ItemBox
              items={this.state.itemOptions}
              onAddItem={this.handleAddItem}
              onClearItem={this.handleClearItem}
              onClearAll={this.handleClearAll}
              onItemChange={this.handleItemInput}
            />
            <div className="item-list-wrapper">
              <ItemList
                items={this.state.itemsToCraft}
                baseMaterials={this.state.baseMaterials}
                materials={this.state.activeRecipes}
              />
            </div>
          </React.Fragment>
        );
      case 2:
        return (
          <React.Fragment>
            <Recipes
              materials={this.state.activeRecipes}
              matsWithAlt={this.state.matsWithAlt}
              onChange={this.handleRecipeChange}
            />
          </React.Fragment>
        );
      case 3:
        return (
          <React.Fragment>
            <PowerBox
              onChange={this.handleFuelInput}
              fuelsAmt={this.state.fuels}
            />
          </React.Fragment>
        );
      default:
        // Should never reach
        return null;
    }
  }

  render() {
    // console.log("rendering");
    return (
      <div>
        <TitleBar />
        <PageButtons onClick={this.handlePageChange} />
        {this.renderPage()}
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default App;
