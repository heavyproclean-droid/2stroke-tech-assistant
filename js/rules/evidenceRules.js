// evidenceRules.js

export const evidenceRules = [

  // =====================================
  // SPARK EVIDENCE
  // =====================================

  {
    symptom: "sparkPresent",
    value: true,

    weights: {
      ignitionFailure: -20
    },

    note: "Spark is present, reducing likelihood of ignition failure."
  },

  {
    symptom: "sparkPresent",
    value: false,

    weights: {
      ignitionFailure: 30
    },

    note: "No spark detected."
  },

  // =====================================
  // FUEL EVIDENCE
  // =====================================

  {
    symptom: "fuelFresh",
    value: false,

    weights: {
      fuelContamination: 30
    },

    note: "Old or contaminated fuel suspected."
  },

  {
    symptom: "runsOnPrime",
    value: true,

    weights: {
      fuelDelivery: 20,
      cloggedCarb: 15
    },

    note: "Engine runs briefly on primed fuel."
  },

  {
    symptom: "dryPlug",
    value: true,

    weights: {
      fuelDelivery: 20,
      cloggedCarb: 15,
      impulseFailure: 10
    },

    note: "Fuel may not be reaching cylinder."
  },

  {
    symptom: "wetPlug",
    value: true,

    weights: {
      floodedEngine: 20,
      ignitionFailure: 10
    },

    note: "Fuel is reaching cylinder."
  },

  // =====================================
  // RUNS ONLY ON CHOKE
  // =====================================

  {
    symptom: "runsOnlyOnChoke",
    value: true,

    weights: {
      cloggedCarb: 30,
      fuelDelivery: 15,
      crankcaseLeak: 10
    },

    note: "Engine requires choke to compensate for a lean mixture."
  },

  {
    symptom: "runsOnlyOnChoke",
    value: true,

    requires: {
      carbAdjustedRecently: true
    },

    weights: {
      carbAdjustment: 20
    },

    note: "Recent carb adjustment may have created a lean condition."
  },

  {
    symptom: "runsOnlyOnChoke",
    value: true,

    requires: {
      fuelAtPlug: true
    },

    weights: {
      cloggedCarb: 15
    },

    note: "Fuel reaches cylinder, increasing probability of carb restriction."
  },

  // =====================================
  // IDLE SURGING
  // =====================================

  {
    symptom: "surgesAtIdle",
    value: true,

    weights: {
      crankcaseLeak: 15,
      cloggedCarb: 10,
      carbAdjustment: 8
    },

    note: "Idle surge often indicates lean condition."
  },

  // =====================================
  // HIGH IDLE
  // =====================================

  {
    symptom: "highIdle",
    value: true,

    weights: {
      crankcaseLeak: 20,
      carbAdjustment: 15
    },

    note: "High idle often caused by excess air entering engine."
  },

  // =====================================
  // STARTER FEELS ABNORMAL
  // =====================================

  {
    symptom: "starterRopePullsTooEasy",
    value: true,

    weights: {
      lowCompression: 25
    },

    note: "Low compression suspected."
  },

  {
    symptom: "starterRopeHardToPull",
    value: true,

    weights: {
      floodedEngine: 10
    },

    note: "Check for flooding or mechanical interference."
  },

  // =====================================
  // OVERHEATING
  // =====================================

  {
    symptom: "overheats",
    value: true,

    weights: {
      crankcaseLeak: 15,
      carbAdjustment: 10,
      pluggedExhaust: 8
    },

    note: "Lean conditions commonly lead to overheating."
  },

  // =====================================
  // DIES WHEN HOT
  // =====================================

  {
    symptom: "diesWhenHot",
    value: true,

    weights: {
      ignitionFailure: 15,
      fuelDelivery: 10,
      crankcaseLeak: 8
    },

    note: "Failure after warming up."
  },

  // =====================================
  // BACKFIRE
  // =====================================

  {
    symptom: "backfires",
    value: true,

    weights: {
      crankcaseLeak: 10,
      carbAdjustment: 10,
      ignitionFailure: 8
    },

    note: "Backfire may indicate lean running or ignition issue."
  },

  // =====================================
  // FLOODS EASILY
  // =====================================

  {
    symptom: "floodsEasily",
    value: true,

    weights: {
      floodedEngine: 20,
      carbAdjustment: 15
    },

    note: "Excess fuel entering engine."
  }
];