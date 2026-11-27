// procedures.js

export const procedures = {

  fuelDelivery: {
    title: "Fuel System Inspection and Repair",

    tools: [
      "Fuel line pliers",
      "Flashlight",
      "Replacement fuel lines",
      "Replacement fuel filter"
    ],

    safety: [
      "Work in a well-ventilated area.",
      "Keep fuel away from ignition sources."
    ],

    steps: [
      "Drain old fuel from the tank.",
      "Inspect fuel lines for cracks, splits, or deterioration.",
      "Inspect the fuel filter for contamination.",
      "Check that the tank vent is clear and functioning properly.",
      "Ensure fuel flows freely through the fuel line.",
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
      "Wear eye protection.",
      "Avoid inhaling carburetor cleaner."
    ],

    steps: [
      "Remove the air filter cover.",
      "Remove the carburetor from the engine.",
      "Inspect the fuel inlet screen.",
      "Inspect metering and pump diaphragms.",
      "Clean passages with approved carburetor cleaner.",
      "Blow passages clean with compressed air.",
      "Install rebuild kit components if necessary.",
      "Reassemble carburetor.",
      "Reinstall on engine.",
      "Reset carburetor to baseline settings.",
      "Start engine and perform final tuning."
    ]
  },

  carbAdjustment: {
    title: "Carburetor Adjustment",

    tools: [
      "Proper carburetor adjustment tool",
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
      "Verify engine accelerates cleanly and idles properly."
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
      "Inspect spark plug condition.",
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
      "Spark tester