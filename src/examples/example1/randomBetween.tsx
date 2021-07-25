export function randomBetween(min: number, max: number) {
  // Thanks GitHub Co-Pilot!
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}
