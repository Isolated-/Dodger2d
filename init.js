let game;
let canvas;
let context;

let updater;
let renderer;
let textRenderer;

function init() {
  canvas = document.querySelector('canvas');

  canvas.width = 300;
  canvas.height = 600;
  canvas.style = 'background: #2c3e50;';

  context = canvas.getContext('2d');

  game = new Game(canvas);

  updater = new GameUpdater();
  renderer = new GameRenderer(context);
  textRenderer = new Dodger.GameTextRenderer(context);

  update();
}

function update() {
  let last = 0,
    timestep = 1000 / 60,
    dt = 0,
    updated,
    updates = 0,
    renders = 0,
    fps = 0,
    delta;

  function frame(timestamp) {
    context.clearRect(0, 0, canvas.width, canvas.height);

    delta = timestamp - last;
    dt += delta;
    last = timestamp;

    fps = 1 / Math.min(1, delta / 1000);

    updated = false;

    while (dt > timestep) {
      dt -= timestep;
      updated = true;
      updates++;

      updater.update(game);
    }

    if (updated) {
      renderer.render(game);
      renders++;
    }

    if (DEBUG) {
      const updaterText = new Dodger.GameTextBuilder(`${updates} updates`)
        .setPosition(canvas.width - 5, canvas.height - 10)
        .setColor('red')
        .setTextAlign('right')
        .build();

      const renderText = new Dodger.GameTextBuilder(`${renders} renders`)
        .setPosition(canvas.width - 5, canvas.height - 20)
        .setColor('red')
        .setTextAlign('right')
        .build();

      const fpsText = new Dodger.GameTextBuilder(`${Math.round(fps)} fps`)
        .setPosition(canvas.width - 5, canvas.height - 30)
        .setColor('red')
        .setTextAlign('right')
        .build();

      textRenderer.render(fpsText);
      textRenderer.render(updaterText);
      textRenderer.render(renderText);
    }

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
