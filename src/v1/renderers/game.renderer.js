class GameRenderer extends Dodger.GameRenderer {
  constructor(ctx) {
    super(ctx);
    this._ctx = ctx;

    this._textRenderer = new Dodger.GameTextRenderer(ctx);
    this._characterRenderer = new CharacterRenderer(ctx);
  }

  render(game, context) {
    const ctx = context || this._ctx;
    if (!ctx || !game.state) return;

    // render texts (should be moved to menu/screen/overlay abstraction)
    const state = game.state.get('state');

    this._scoreText(game.state.get('score'));

    if (state === State.GameOver) {
      this._gameOverText();
      return;
    }

    if (state === State.Paused) {
      this._pausedText();
    }

    if (!game.rows) return;
    if (!game.character) return;

    game.rows.forEach(row => {
      if (row.delete) return;
      row.render();
    });
    this._characterRenderer.render(game.character);
  }

  _pausedText() {
    const canvas = this.ctx.canvas;
    const centerOfScreenX = canvas.width / 2;
    const centerOfScreenY = canvas.height / 2;

    const pausedText = new Dodger.GameTextBuilder(GameString.Paused)
      .setPosition(centerOfScreenX, centerOfScreenY - 80)
      .setFontSize(20)
      .setColor(GameColor.White)
      .build();

    const pausedTextInstructions = new Dodger.GameTextBuilder(
      GameString.PausedInstructions,
    )
      .setPosition(centerOfScreenX, centerOfScreenY - 50)
      .setFontSize(20)
      .setColor(GameColor.White)
      .build();

    this._textRenderer.render(pausedText);
    this._textRenderer.render(pausedTextInstructions);
  }

  _gameOverText() {
    const canvas = this.ctx.canvas;
    const centerOfScreenX = canvas.width / 2;
    const centerOfScreenY = canvas.height / 2;

    const gameOverText = new Dodger.GameTextBuilder(GameString.GameOver)
      .setPosition(centerOfScreenX, centerOfScreenY)
      .setColor(GameColor.Red)
      .setFontSize(18)
      .build();

    const gameOverInstructions = new Dodger.GameTextBuilder(
      GameString.GameOverInstructions,
    )
      .setPosition(centerOfScreenX, centerOfScreenY + 20)
      .setColor(GameColor.Red)
      .setFontSize(18)
      .build();

    this._textRenderer.render(gameOverText);
    this._textRenderer.render(gameOverInstructions);
  }

  _scoreText(score) {
    const canvas = this.ctx.canvas;
    const centerOfScreenX = canvas.width / 2;

    const scoreText = new Dodger.GameTextBuilder(score)
      .setPosition(centerOfScreenX, 40)
      .setFontSize(26)
      .setColor(GameColor.White)
      .build();

    this._textRenderer.render(scoreText);
  }
}
