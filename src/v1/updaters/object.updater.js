class ObjectUpdater extends Dodger.GameObjectUpdater {
  constructor() {
    super();
    this.boundaryDetector = new Dodger.GameObjectBoundaryDetector();
  }

  update(object, delta) {
    object.position.y += object.velocity.y;
    this._boundary(object);
  }

  _boundary(object) {
    const boundary = this.boundaryDetector.detect(
      object,
      CANVAS.width,
      CANVAS.height,
    );

    const Type = Dodger.GameObjectBoundaryDetector.Type;

    if (boundary === Type.OffScreenBottom) {
      object.visible = false;
    }
  }
}
