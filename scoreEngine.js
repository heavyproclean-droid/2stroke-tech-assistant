// scoreEngine.js

import { rules } from "../data/rules.js";
import { evidenceRules } from "../data/evidenceRules.js";
import { scoreCompression } from "./compressionRules.js";
import { causes } from "../data/causes.js";
import { repairs } from "../data/repairs.js";

export function scoreEngine(diagnosticState) {

  // Initialize scores
  const scores = {};

  Object.keys(causes).forEach(cause => {
    scores[cause] = 0;
  });

  // Apply primary symptom rules
  applyRules(diagnosticState, rules, scores);

  // Apply advanced evidence rules
  applyRules(diagnosticState, evidenceRules, scores);

  // Apply compression scoring
  scoreCompression(
    diagnosticState.compression,
    scores
  );

  // Convert to ranked list
  const rankedResults = Object.entries(scores)
   .map(([id, score]) => ({
  id,
  name: causes[id]?.name || id,
  score,

  inspections: repairs[id]?.inspections || [],

  tests: repairs[id]?.tests || [],

  repairs: repairs[id]?.repairs || [],

  difficulty: repairs[id]?.difficulty || "Unknown",

  repairTime: repairs[id]?.repairTime || "Unknown"
}))

    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score);

  // Add confidence percentages
  const highestScore = rankedResults[0]?.score || 1;

  rankedResults.forEach(result => {
    result.confidence = Math.round(
      (result.score / highestScore) * 100
    );
  });

  return rankedResults;
}
