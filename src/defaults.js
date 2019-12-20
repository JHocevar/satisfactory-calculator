const defaultItemOptions = [
  "Heavy Modular Frame",
  "Computer",
  "Supercomputer",
  "Encased Industrial Beam",
  "Modular Frame",
  "Crystal Oscillator",
  "Compacted Coal",
  "Fuel",
  "Turbofuel",
  "Reinforced Iron Plate",
  "Motor",
  "Concrete"
];

const baseOptions = [
  "Iron Ingot",
  "Copper Ingot",
  "Caterium Ingot",
  "Steel Ingot",
  "Iron Plate",
  "Iron Rod",
  "Screw",
  "Concrete",
  "Wire",
  "Quickwire",
  "Cable",
  "Fuel",
  "Compacted Coal",
  "Motor",
  "Rotor",
  "Stator",
  "Plastic",
  "Rubber"
];

const fuels = {
  coal: {
    burnTime: 5.4,
    powerGenerated: 50,
    name: "Coal",
    generator: "Coal Generators"
  },
  "compacted coal": {
    burnTime: 12,
    powerGenerated: 50,
    name: "Compacted Coal",
    generator: "Coal Generators"
  },
  fuel: {
    burnTime: 5,
    powerGenerated: 150,
    name: "Fuel",
    generator: "Fuel Generators"
  },
  turboFuel: {
    burnTime: 13.3,
    powerGenerated: 150,
    name: "Turbo Fuel",
    generator: "Fuel Generators"
  }
};

export { defaultItemOptions, baseOptions, fuels };
