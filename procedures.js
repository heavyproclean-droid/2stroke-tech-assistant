// procedures.js

export const procedures = {

  fuelDelivery: {
    title: "Fuel System Inspection and Repair",

    tools: [
      "Fuel line pliers",
      "Flashlight",
      "Replacement fuel filter",
      "Replacement fuel lines"
    ],

    safety: [
      "Work in a well-ventilated area.",
      "Keep fuel away from ignition sources."
    ],

    steps: [
      "Drain old fuel from the tank.",
      "Inspect fuel lines for cracks, splits, or deterioration.",
      "Inspect the fuel filter for contamination.",
      "Inspect the fuel tank vent.",
      "Verify fuel flows freely through the fuel line.",
      "Replace damaged fuel system components.",
      "Refill with fresh properly mixed fuel.",
      "Test engine operation."
    ]
  },

  cloggedCarb: {
    title: "Carburetor Cleaning and Inspection",

    tools: [
      "Screwdrivers",
      "Carburetor cleaner",
      "Compressed air",
      "Carburetor rebuild kit"
    ],

    safety: [
      "Wear safety glasses.",
      "Avoid inhaling carburetor cleaner."
    ],

    steps: [
      "Remove air filter cover.",
      "Remove carburetor from engine.",
      "Inspect fuel inlet screen.",
      "Inspect metering diaphragm.",
      "Inspect pump diaphragm.",
      "Clean internal fuel passages.",
      "Blow passages clean with compressed air.",
      "Replace worn components if needed.",
      "Reassemble carburetor.",
      "Reset carburetor to baseline settings.",
      "Start engine and perform final adjustments."
    ]
  },

  carbAdjustment: {
    title: "Carburetor Adjustment",

    tools: [
      "Carburetor adjustment tool",
      "Tachometer (optional)"
    ],

    safety: [
      "Keep clear of moving cutting attachments."
    ],

    steps: [
      "Verify fresh fuel is installed.",
      "Inspect air filter condition.",
      "Reset carburetor to known baseline settings.",
      "For unknown settings, turn the inner idle adjustment screw counterclockwise until it clicks.",
      "Turn the screw clockwise 10 turns from thread engagement.",
      "Start the engine.",
      "Allow engine to reach operating temperature.",
      "Adjust low-speed circuit for smooth idle.",
      "Adjust for crisp throttle response.",
      "Adjust high-speed circuit if required.",
      "Verify proper idle and acceleration."
    ]
  },

  floodedEngine: {
    title: "Flooded Engine Recovery",

    tools: [
      "Spark plug wrench",
      "Clean rag"
    ],

    safety: [
      "Disable ignition if performing extensive inspection."
    ],

    steps: [
      "Remove spark plug.",
      "Inspect plug condition.",
      "Dry or replace spark plug.",
      "Pull starter rope several times to clear excess fuel.",
      "Install spark plug.",
      "Follow proper starting procedure.",
      "Attempt restart."
    ]
  },

  ignitionFailure: {
    title: "Ignition System Diagnosis",

    tools: [
      "Spark tester",
      "Feeler gauge",
      "Multimeter"
    ],

    safety: [
      "Avoid contact with spark plug lead during testing."
    ],

    steps: [
      "Inspect spark plug condition.",
      "Verify spark plug gap.",
      "Test for spark using a spark tester.",
      "Disconnect kill-switch wire and retest.",
      "Inspect ignition wiring.",
      "Inspect flywheel key.",
      "Verify ignition coil air gap.",
      "Replace ignition module if necessary."
    ]
  },

  lowCompression: {
    title: "Compression Diagnosis",

    tools: [
      "Compression tester",
      "Flashlight"
    ],

    safety: [
      "Remove spark plug before testing."
    ],

    steps: [
      "Install compression tester.",
      "Open throttle fully.",
      "Pull starter until reading stabilizes.",
      "Record reading.",
      "Compare reading to manufacturer specifications.",
      "Inspect piston through exhaust port.",
      "Inspect piston rings.",
      "Inspect cylinder condition.",
      "Perform leakdown test if necessary."
    ]
  },

  crankcaseLeak: {
    title: "Crankcase Leak Testing",

    tools: [
      "Pressure and vacuum tester",
      "Block-off plates"
    ],

    safety: [
      "Perform testing with engine off."
    ],

    steps: [
      "Remove carburetor and muffler.",
      "Install intake and exhaust block-off plates.",
      "Connect pressure tester.",
      "Pressurize crankcase.",
      "Monitor pressure loss.",
      "Perform vacuum test.",
      "Inspect crank seals.",
      "Inspect intake boot.",
      "Inspect carburetor mounting gaskets.",
      "Replace failed components.",
      "Retest system."
    ]
  },

  pluggedExhaust: {
    title: "Exhaust Restriction Inspection",

    tools: [
      "Socket set",
      "Wire brush"
    ],

    safety: [
      "Allow muffler to cool before servicing."
    ],

    steps: [
      "Remove muffler.",
      "Inspect spark arrestor screen.",
      "Inspect muffler outlet.",
      "Remove carbon buildup.",
      "Clean or replace spark arrestor screen.",
      "Reinstall muffler.",
      "Verify power restoration."
    ]
  },

  impulseFailure: {
    title: "Impulse System Inspection",

    tools: [
      "Flashlight",
      "Small pick"
    ],

    safety: [
      "Inspect engine with ignition disabled."
    ],

    steps: [
      "Locate impulse line.",
      "Inspect for cracks or deterioration.",
      "Inspect impulse fittings.",
      "Verify impulse passage is clear.",
      "Replace damaged impulse line.",
      "Verify pressure pulse reaches carburetor.",
      "Test engine operation."
    ]
  },

  fuelContamination: {
    title: "Fuel Contamination Repair",

    tools: [
      "Drain container",
      "Replacement fuel filter"
    ],

    safety: [
      "Dispose of fuel properly."
    ],

    steps: [
      "Drain fuel tank completely.",
      "Inspect for water or contamination.",
      "Clean fuel tank if needed.",
      "Replace fuel filter.",
      "Inspect fuel lines.",
      "Refill with fresh properly mixed fuel.",
      "Start engine and verify operation."
    ]
  }

};
