class State {
  static SCORE = 0;
  static HIGH_SCORE = 0;

  static SPEED = 4;

  static Paused = 0;
  static Running = 1;
  static Stopped = 2;
  static GameOver = 3;

  static CurrentState = State.Stopped;

  constructor() {
    const canvas = CANVAS;
    this.ctx = canvas.getContext('2d');

    const posX = canvas.width / 2 - Character.Size / 2;
    const posY = canvas.height - Character.Size * 1.5;

    this.gameOver = false;
    this.updates = 0;
    this.rows = [Row.create()];

    this.character = new Character(posX, posY);
    this.characterUpdater = new CharacterUpdater();
    this.characterRenderer = new CharacterRenderer(this.ctx);
  }

  increaseGameSpeed() {
    State.SPEED += 0.005;
  }

  update(delta) {
    if (State.CurrentState !== State.Running) return;

    this.updates++;

    // TODO: make time based
    if (this.updates >= 50) {
      this.updates = 0;
      this.rows.push(new Row());
    }

    if (this.character.isDead()) {
      State.CurrentState = State.GameOver;
      return;
    }

    /**
     *  Garbage Collection
     *  this creates a new array, removing any rows that are due to be deleted
     *  this hopefully keeps the array to around 3/4 rows
     *  as we depend on forEach this will avoid the array getting bigger than needed
     *  meaning that the loop won't slow down as the array gets larger
     */
    this.rows = this.rows.filter(row => !row.delete);

    this.rows.forEach(row => {
      const collisionWith = row.hasCollision(this.character);

      if (collisionWith !== undefined) {
        const object = row.objects[collisionWith];

        if (object.type === Dodger.GameObjectType.Block && object.visible) {
          this.character.subHealth(object.damage || 1);
          object.visible = false;
        }

        if (
          object.type === Dodger.GameObjectType.Collectable &&
          !object.collected
        ) {
          object.collected = true;

          switch (object.cType) {
            case Collectable.CollectableType.Score: {
              State.SCORE += object.reward;
              break;
            }
            case Collectable.CollectableType.Health: {
              this.character.addHealth(object.reward);
              break;
            }
            default: {
              console.log('unknown collectable type');
            }
          }

          object.visible = false;
        }
      }

      row.update(delta);
    });

    this.characterUpdater.update(this.character, delta);
  }

  render() {
    this.characterRenderer.render(this.character);
    this.rows.forEach(row => row.render(this.ctx));
  }
}
