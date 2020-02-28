/**
 *  @class GameState
 *  holds all the information required by each Scene
 */
class GameState {
  /**
   *  @param {number} HighScore global variable holding the players highest score
   */
  static HighScore = 0;

  constructor() {
    this.score = 0;
  }
}
module.exports = GameState;
