export function applyRules(
  diagnosticState,
  rules,
  scores
) {

  rules.forEach(rule => {

    const symptomValue =
      diagnosticState[rule.symptom];

    // Rule must match value if specified
    if (
      Object.prototype.hasOwnProperty.call(rule, "value") &&
      symptomValue !== rule.value
    ) {
      return;
    }

    // Standard true/false symptom
    if (
      !Object.prototype.hasOwnProperty.call(rule, "value") &&
      !symptomValue
    ) {
      return;
    }

    // Check required conditions
    if (rule.requires) {

      const requirementsMet =
        Object.entries(rule.requires)
          .every(([key, value]) =>
            diagnosticState[key] === value
          );

      if (!requirementsMet) {
        return;
      }
    }

    // Apply scores
    Object.entries(rule.weights)
      .forEach(([cause, points]) => {

        scores[cause] =
          (scores[cause] || 0) + points;

      });

  });
}