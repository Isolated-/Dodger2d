const GameObject = require('./generic/object');

/**
 *  @class Collectable
 *  A reusable Collectable component
 *  That can either increase health or score
 *  In future this could be extended to support many collectable types
 */
class Collectable extends GameObject {
  static Size = 15;
  static Color = ['#402459', '#2ecc71'];

  static CollectionType = { Score: 0, Health: 1 };

  constructor(x, y, type, reward) {
    const color = Collectable.Color[type] || Collectable.Color[0];

    super(
      x,
      y,
      Collectable.Size,
      Collectable.Size,
      GameObject.Type.Collectable,
      color,
    );

    this._cType = type || Collectable.CollectionType.Score;
    this._cReward = reward || 1;
  }

  /**
   *  Return the type of Collectable
   *  @return {number} Collectable.CollectionType
   */
  getType() {
    return this._cType;
  }

  /**
   *  Set the type of Collectable
   *  @param {number} type Collectable.CollectionType
   */
  setType(type) {
    this._cType = type;
  }

  /**
   *  Get the reward amount of the Collectable
   */
  getReward() {
    return this._cReward;
  }

  /**
   *  Set the reward amount of the Collectable
   *  @param {number} reward
   */
  setReward(reward) {
    this._cReward = reward;
  }
}

module.exports = Collectable;
