export function scoreCompression(
  psi,
  scores
) {

  if (!psi) return;

  if (psi < 90) {

    scores.lowCompression += 40;

  } else if (psi < 110) {

    scores.lowCompression += 25;

  } else if (psi < 125) {

    scores.lowCompression += 10;

  } else if (psi >= 130) {

    scores.lowCompression -= 15;

  }
}