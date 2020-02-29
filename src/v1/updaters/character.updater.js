class CharacterUpdater extends Dodger.GameObjectUpdater {
  constructor() {
    super();
    this.boundaryDetector = new Dodger.GameObjectBoundaryDetector();
  }

  update(object, delta) {
    this._movement(object);
    this._boundary(object);
  }

  _movement(object) {
    if (Mouse.isDown(Mouse.LEFT)) {
      object.position.x += object.direction
        ? -object.velocity.x
        : object.velocity.x;
    }

    if (Mouse.noKeys()) {
      object.position.x += object.direction
        ? object.velocity.x
        : -object.velocity.x;
    }
  }

  _boundary(object) {
    const boundary = this.boundaryDetector.detect(
      object,
      CANVAS.width,
      CANVAS.height,
    );

    const Type = Dodger.GameObjectBoundaryDetector.Type;

    if (boundary !== Type.OnScreen) {
      switch (boundary) {
        case Type.OffScreenLeft: {
          object.position.x = 0;
          break;
        }

        case Type.OnScreenEdgeRight: {
          object.position.x = CANVAS.width - object.width;
          break;
        }
      }
    }
  }
}
