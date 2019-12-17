const Excel = require("exceljs");
const fs = require("fs");
var workbook = new Excel.Workbook();
var allMaterials = {};
workbook.xlsx.readFile("./recipes.xlsx").then(function() {
  var worksheet = workbook.getWorksheet("recipes");

  for (i = 2; i < worksheet.rowCount; i++) {
    let row = worksheet.getRow(i);

    let itemName = row.getCell(2).value;
    let alt = row.getCell(6).value;
    if (alt !== false) {
      itemName = alt;
      alt = true;
    }

    let mat = new Material(
      row.getCell(1).value, // Building
      row.getCell(2).value, // Name
      row.getCell(3).value, // Amount produced
      row.getCell(4).value, // Time
      row.getCell(5).value, // Base
      alt, // Alt
      row.getCell(7).value, // Input 1
      row.getCell(8).value, // Amount 1
      row.getCell(9).value, // Input 2
      row.getCell(10).value, // Amount 2
      row.getCell(11).value, // Item 3
      row.getCell(12).value, // Amount 3
      row.getCell(13).value, // Item 4
      row.getCell(14).value // Amount 4
    );
    allMaterials[itemName] = mat; // Add new material into dict
  }
  // Write dict of all objects to JSON.
  fs.writeFile("Materials.json", JSON.stringify(allMaterials), err => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
});

class Material {
  constructor(
    building,
    item,
    producedAmt,
    time,
    base,
    alt,
    input1,
    amt1,
    input2,
    amt2,
    input3,
    amt3,
    input4,
    amt4
  ) {
    this.building = building;
    this.item = item; // Name of item
    this.producedAmt = producedAmt;
    this.produced = (producedAmt / time) * 60; // Produced per minute
    this.time = time;
    this.base = base;
    this.alt = alt;
    this.input1 = input1;
    this.amt1 = (amt1 / time) * 60; // Amount consumed per minute
    this.input2 = input2;
    this.amt2 = (amt2 / time) * 60; // Amount consumed per minute
    this.input3 = input3;
    this.amt3 = (amt3 / time) * 60; // Amount consumed per minute
    this.input4 = input4;
    this.amt4 = (amt4 / time) * 60; // Amount consumed per minute
  }
}
