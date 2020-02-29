class CharacterRenderer extends Dodger.GameObjectRenderer {
  render(object, context) {
    const ctx = context || this.ctx;

    ctx.save();
    ctx.beginPath();
    ctx.fillStyle = object.color;
    ctx.fillRect(
      object.position.x,
      object.position.y,
      object.width,
      object.height,
    );

    // draw health on character
    ctx.font = '15px sans-serif';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(
      `${object.health}`,
      object.position.x + 15,
      object.position.y + 15,
    );

    ctx.restore();
  }
}
