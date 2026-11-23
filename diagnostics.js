// diagnostics.js
// 2-Stroke Tech Assistant
// Secure Diagnostic Engine

// =====================================================
// DIAGNOSTIC TREE
// =====================================================

const diagnosticTree = {
  start: {
    question: "What symptom best matches the machine?",
    options: [
      {
        text: "Engine Will Not Start",
        next: "no_start_spark"
      },
      {
        text: "Starts Then Dies",
        next: "starts_dies_idle"
      },
      {
        text: "Bogs At Full Throttle",
        next: "bog_wot_filter"
      },
      {
        text: "Excessive Smoke",
        next: "smoke_mix"
      }
    ]
  },

  // ==========================
  // NO START
  // ==========================

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
      "Inspect kill switch wiring",
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
      "Inspect crank seals"
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
      "Inspect fuel lines",
      "Clean carburetor",
      "Inspect fuel tank vent"
    ]
  },

  // ==========================
  // STARTS THEN DIES
  // ==========================

  starts_dies_idle: {
    question: "Will the engine idle normally?",
    options: [
      { text: "Yes", next: "starts_dies_tank_vent" },
      { text: "No", next: "idle_circuit" }
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
