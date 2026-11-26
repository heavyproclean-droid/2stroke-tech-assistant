// repairs.js

export const repairs = {

  fuelDelivery: {
    inspections: [
      "Inspect fuel filter",
      "Inspect fuel lines",
      "Check tank vent operation"
    ],

    tests: [
      "Verify fuel reaches carburetor",
      "Inspect fuel return line",
      "Check for collapsed fuel lines"
    ],

    repairs: [
      "Replace fuel filter",
      "Replace damaged fuel lines",
      "Clean fuel tank"
    ],

    difficulty: "Easy",
    repairTime: "15-30 minutes"
  },

  cloggedCarb: {
    inspections: [
      "Inspect carburetor screen",
      "Inspect metering diaphragm",
      "Inspect fuel passages"
    ],

    tests: [
      "Check if engine runs on primer fuel",
      "Check if engine runs only on choke"
    ],

    repairs: [
      "Clean carburetor",
      "Install carb kit",
      "Replace carburetor"
    ],

    difficulty: "Medium",
    repairTime: "30-90 minutes"
  },

  carbAdjustment: {
    inspections: [
      "Verify low-speed adjustment",
      "Verify high-speed adjustment"
    ],

    tests: [
      "Return carb to baseline settings"
    ],

    repairs: [
      "Adjust low-speed circuit",
      "Adjust high-speed circuit",
      "Perform final tuning"
    ],

    difficulty: "Easy",
    repairTime: "15-20 minutes"
  },

  floodedEngine: {
    inspections: [
      "Inspect spark plug condition",
      "Check choke operation"
    ],

    tests: [
      "Remove plug and purge cylinder"
    ],

    repairs: [
      "Install dry spark plug",
      "Correct starting procedure"
    ],

    difficulty: "Easy",
    repairTime: "10-15 minutes"
  },

  ignitionFailure: {
    inspections: [
      "Inspect spark plug",
      "Inspect ignition lead",
      "Inspect kill switch"
    ],

    tests: [
      "Spark tester test",
      "Kill switch isolation test"
    ],

    repairs: [
      "Replace spark plug",
      "Replace ignition module",
      "Repair wiring"
    ],

    difficulty: "Easy-Medium",
    repairTime: "15-45 minutes"
  },

  lowCompression: {
    inspections: [
      "Inspect piston",
      "Inspect cylinder",
      "Inspect rings"
    ],

    tests: [
      "Compression test",
      "Leakdown test"
    ],

    repairs: [
      "Replace piston rings",
      "Replace piston assembly",
      "Rebuild engine"
    ],

    difficulty: "Hard",
    repairTime: "2-5 hours"
  },

  crankcaseLeak: {
    inspections: [
      "Inspect crank seals",
      "Inspect intake boot",
      "Inspect carb gasket"
    ],

    tests: [
      "Pressure test",
      "Vacuum test"
    ],

    repairs: [
      "Replace crank seals",
      "Replace intake boot",
      "Replace gaskets"
    ],

    difficulty: "Hard",
    repairTime: "2-4 hours"
  },

  pluggedExhaust: {
    inspections: [
      "Inspect spark arrestor screen",
      "Inspect muffler outlet"
    ],

    tests: [
      "Run briefly with muffler removed"
    ],

    repairs: [
      "Clean spark arrestor",
      "Replace muffler"
    ],

    difficulty: "Easy",
    repairTime: "15-30 minutes"
  },

  impulseFailure: {
    inspections: [
      "Inspect impulse line",
      "Inspect impulse passage"
    ],

    tests: [
      "Check pulse signal to carburetor"
    ],

    repairs: [
      "Replace impulse line",
      "Repair impulse leak"
    ],

    difficulty: "Medium",
    repairTime: "30-60 minutes"
  },

  fuelContamination: {
    inspections: [
      "Inspect fuel quality",
      "Inspect fuel tank"
    ],

    tests: [
      "Drain and refill with fresh fuel"
    ],

    repairs: [
      "Replace fuel",
      "Clean fuel tank",
      "Replace fuel filter"
    ],

    difficulty: "Easy",
    repairTime: "15-20 minutes"
  }

};