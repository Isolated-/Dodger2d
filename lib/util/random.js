class Random {
  /**
   *  get a random floating point number (not rounded/floored) between min, max
   *  @param {number} min
   *  @param {number} max
   *  @return {number}
   */
  static float(min, max) {
    return min + Math.random() * max;
  }

  /**
   *  get a random number between min, max (floored)
   *  @param {number} min
   *  @param {number} max
   *  @return {number}
   */
  static number(min, max) {
    return Math.floor(min + Math.random() * max);
  }
}
module.exports = Random;
