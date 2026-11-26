// diagnostics.js
// 2-Stroke Tech Assistant
// Guided Diagnostic Tree v1.0

const diagnosticTree = {

  start: {
    question: "What symptom best matches the machine?",
    options: [
      { text: "Engine Will Not Start", next: "no_start_spark" },
      { text: "Starts Then Dies", next: "starts_dies_idle" },
      { text: "Bogs At Full Throttle", next: "bog_wot_filter" },
      { text: "Excessive Smoke", next: "smoke_mix" }
    ]
  },

  // =====================================
  // NO START
  // =====================================

  no_start_spark: {
    question: "Does the engine have spark?",
    options: [
      { text: "Yes", next: "no_start_compression" },
      { text: "No", next: "ignition_failure" }
    ]
  },

  ignition_failure: {
    diagnosis: "Ignition System Failure",
    probability: 95,
    repairs: [
      "Inspect spark plug",
      "Check ignition module",
      "Inspect kill-switch wiring",
      "Inspect flywheel key",
      "Verify coil air gap"
    ]
  },

  no_start_compression: {
    question: "Is compression above 120 PSI?",
    options: [
      { text: "Yes", next: "no_start_fuel" },
      { text: "No", next: "low_compression" }
    ]
  },

  low_compression: {
    diagnosis: "Low Compression",
    probability: 90,
    repairs: [
      "Inspect piston rings",
      "Inspect cylinder scoring",
      "Inspect piston damage",
      "Perform leakdown test"
    ]
  },

  no_start_fuel: {
    question: "Is the spark plug wet after cranking?",
    options: [
      { text: "Yes", next: "flooded_engine" },
      { text: "No", next: "fuel_delivery" }
    ]
  },

  flooded_engine: {
    diagnosis: "Engine Flooding",
    probability: 85,
    repairs: [
      "Inspect metering needle",
      "Inspect metering diaphragm",
      "Inspect fuel inlet needle",
      "Verify choke operation"
    ]
  },

  fuel_delivery: {
    diagnosis: "Fuel Delivery Failure",
    probability: 85,
    repairs: [
      "Replace fuel filter",
      "Inspect fuel line in tank",
      "Inspect fuel line at carburetor",
      "Inspect fuel lines for leaks",
      "Clean carburetor",
      "Inspect fuel tank vent"
    ]
  },

  // =====================================
  // STARTS THEN DIES
  // =====================================

  starts_dies_idle: {
    question: "How does the engine behave after starting?",
    options: [
      { text: "Will Idle Normally", next: "starts_dies_tank_vent" },
      { text: "Will Not Idle", next: "idle_circuit" },
      { text: "Only Runs With Choke", next: "runs_on_choke" }
    ]
  },

  idle_circuit: {
    diagnosis: "Idle Circuit Restriction",
    probability: 80,
    repairs: [
      "Clean idle circuit",
      "Adjust low-speed circuit",
      "Rebuild carburetor",
      "Inspect intake gasket"
    ]
  },

  runs_on_choke: {
    diagnosis: "Lean Fuel Condition",
    probability: 90,
    repairs: [
      "Clean carburetor low-speed circuit",
      "Inspect fuel filter",
      "Inspect fuel lines",
      "Inspect crank seals",
      "Inspect intake gasket",
      "Verify carburetor adjustment"
    ]
  },

  starts_dies_tank_vent: {
    question: "Does loosening the fuel cap improve operation?",
    options: [
      { text: "Yes", next: "tank_vent_issue" },
      { text: "No", next: "intermittent_fuel" }
    ]
  },

  tank_vent_issue: {
    diagnosis: "Blocked Tank Vent",
    probability: 95,
    repairs: [
      "Clean vent",
      "Replace vent valve",
      "Check fuel cap",
      "Inspect tank vent line"
    ]
  },

  intermittent_fuel: {
    diagnosis: "Intermittent Fuel Delivery",
    probability: 78,
    repairs: [
      "Check fuel pickup",
      "Inspect fuel lines",
      "Test fuel pump diaphragm",
      "Inspect carburetor metering system"
    ]
  },

  // =====================================
  // BOGS AT FULL THROTTLE
  // =====================================

  bog_wot_filter: {
    question: "Is the air filter clean and unrestricted?",
    options: [
      { text: "No", next: "air_filter" },
      { text: "Yes", next: "bog_wot_fuel" }
    ]
  },

  air_filter: {
    diagnosis: "Restricted Air Filter",
    probability: 88,
    repairs: [
      "Clean or replace air filter",
      "Clean filter housing",
      "Inspect intake for restriction"
    ]
  },

  bog_wot_fuel: {
    question: "Is the fuel mixture rich or lean?",
    options: [
      { text: "Rich", next: "rich_mix" },
      { text: "Lean", next: "lean_mix" },
      { text: "Unknown", next: "carburetor_bog" }
    ]
  },

  rich_mix: {
    diagnosis: "Rich Fuel Mixture",
    probability: 82,
    repairs: [
      "Clean carburetor",
      "Inspect metering diaphragm",
      "Verify choke operation",
      "Verify approved fuel mixture"
    ]
  },

  lean_mix: {
    diagnosis: "Lean Fuel Mixture",
    probability: 82,
    repairs: [
      "Check tank vent",
      "Inspect fuel delivery",
      "Check carburetor settings",
      "Inspect crank seals"
    ]
  },

  carburetor_bog: {
    diagnosis: "Carburetor or Fuel Delivery Issue",
    probability: 80,
    repairs: [
      "Service carburetor",
      "Replace fuel filter",
      "Inspect fuel lines",
      "Verify correct fuel mixture"
    ]
  },

  // =====================================
  // EXCESSIVE SMOKE
  // =====================================

  smoke_mix: {
    question: "What color is the smoke?",
    options: [
      { text: "Blue or White", next: "oil_mix" },
      { text: "Black", next: "rich_smoke" }
    ]
  },

  oil_mix: {
    diagnosis: "Oil-Rich or Oil-Fouled Operation",
    probability: 84,
    repairs: [
      "Verify manufacturer oil ratio",
      "Drain contaminated fuel",
      "Inspect spark plug",
      "Inspect crankshaft seals"
    ]
  },

  rich_smoke: {
    diagnosis: "Black Smoke / Rich Mixture",
    probability: 86,
    repairs: [
      "Clean air filter",
      "Clean carburetor",
      "Check choke operation",
      "Verify fuel mixture"
    ]
  }

};

// Make globally accessible to app.js
window.diagnosticTree = diagnosticTree;