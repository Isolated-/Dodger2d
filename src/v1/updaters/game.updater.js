class GameUpdater extends Dodger.GameUpdater {
  constructor() {
    super();
    this._characterUpdater = new CharacterUpdater();

    this.updates = 0;
  }

  update(game, delta) {
    if (!game.state) return;

    const currentState = game.state.get('state');

    // check game state
    if (Mouse.isDown(Mouse.LEFT) && currentState === State.Paused) {
      game.state.set('state', State.Running);
      return;
    }

    if (currentState === State.Stopped) {
      game.state.set('state', State.Paused);
      game.start();
      return;
    }

    if (currentState === State.GameOver && Keyboard.isDown(Keyboard.SPACE)) {
      game.state.set('state', State.Stopped);
      game.clear();
      return;
    }

    if (currentState !== State.Running) return;

    if (this.updates >= 50) {
      game.rows.push(Row.create());
      this.updates = 0;
    }

    this._characterUpdater.update(game.character, delta);

    this._characterAliveCheck(game);
    this._collisionCheck(game);

    this.updates++;
  }

  _characterAliveCheck(game) {
    if (game.character.isDead()) {
      game.state.set('state', State.GameOver);
    }
  }

  _collisionCheck(game) {
    const rows = game.rows.filter(row => !row.delete);
    const { Block, Collectable } = Dodger.GameObjectType;

    rows.forEach((row, id) => {
      const collisionWith = row.hasCollision(game.character);

      if (collisionWith !== undefined) {
        const object = row.objects[collisionWith];
        if (!object.visible) return;

        switch (object.type) {
          case Block: {
            game.character.subHealth(object.damage || 1);
            break;
          }
          case Collectable: {
            const cType = object.cType;
            this._handleCollection(game, cType, object, id);
            break;
          }
          default: {
            if (DEBUG) {
              console.log('unknown object type');
            }
          }
        }

        object.visible = false;
      }

      if (row.isOffScreen()) {
        game.state.set('score', game.state.get('score') + 1);
        object.visible = false;
      }

      row.update();
    });

    game.rows = rows;
  }

  _handleCollection(game, cType, object) {
    const { Score, Health } = Collectable.CollectableType;

    switch (cType) {
      case Score: {
        game.state.set('score', game.state.get('score') + object.reward);
        break;
      }
      case Health: {
        game.character.addHealth(object.reward);
        break;
      }
      default: {
        if (DEBUG) {
          console.log('unknown collection type');
        }
      }
    }

    object.collected = true;
  }
}
