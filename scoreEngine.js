// scoreEngine.js

import { rules } from "./rules.js";
import { evidenceRules } from "./evidenceRules.js";
import { causes } from "./causes.js";
import { repairs } from "./repairs.js";
import { procedures } from "./procedures.js";
import { applyRules } from "./applyRules.js";
import { scoreCompression } from "./compressionRules.js";

export function scoreEngine(diagnosticState) {

  // Initialize scores
  const scores = {};

  Object.keys(causes).forEach(cause => {
    scores[cause] = 0;
  });

  // Apply symptom rules
  applyRules(
    diagnosticState,
    rules,
    scores
  );

  // Apply evidence rules
  applyRules(
    diagnosticState,
    evidenceRules,
    scores
  );

  // Apply compression scoring
  scoreCompression(
    diagnosticState.compression,
    scores
  );

  // Build ranked results
  const rankedResults = Object.entries(scores)

    .map(([id, score]) => ({

      id,

      name: causes[id]?.name || id,

      score,

      inspections:
        repairs[id]?.inspections || [],

      tests:
        repairs[id]?.tests || [],

      repairs:
        repairs[id]?.repairs || [],

      difficulty:
        repairs[id]?.difficulty || "Unknown",

      repairTime:
        repairs[id]?.repairTime || "Unknown",

      procedure:
        procedures[id] || null

    }))

    .filter(result => result.score > 0)

    .sort((a, b) => b.score - a.score);

  // Calculate confidence percentages
  const highestScore =
    rankedResults[0]?.score || 1;

  rankedResults.forEach(result => {

    result.confidence = Math.round(
      (result.score / highestScore) * 100
    );

  });

  return rankedResults;
}