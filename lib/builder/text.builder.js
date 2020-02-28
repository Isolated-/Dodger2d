class TextBuilder {
  static build(
    ctx,
    string,
    x,
    y,
    font = '10px sans-serif',
    color = 'black',
    align = 'center',
    baseline = 'middle',
  ) {
    ctx.font = font;
    ctx.textAlign = align;
    ctx.textBaseline = baseline;
    ctx.fillStyle = color;
    ctx.fillText(string, x, y);
  }
}

module.exports = TextBuilder;
