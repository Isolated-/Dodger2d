let game;
let canvas;
let context;

function init() {
  canvas = document.querySelector('canvas');

  canvas.width = 300;
  canvas.height = 600;
  canvas.style = 'background: #2c3e50;';

  context = canvas.getContext('2d');

  game = new Game(canvas);
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

      game.update(dt);
    }

    if (updated) {
      game.render();
      renders++;
    }

    context.font = '10px sans-serif';
    context.fillStyle = 'red';
    context.textAlign = 'right';
    context.fillText(
      `${Math.round(fps)} fps`,
      canvas.width - 5,
      canvas.height - 30,
    );
    context.fillText(
      `${updates} updates`,
      canvas.width - 5,
      canvas.height - 20,
    );
    context.fillText(
      `${renders} renders`,
      canvas.width - 5,
      canvas.height - 10,
    );

    requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}
