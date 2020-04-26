let canvasX = 500;
let canvasY = 700;

// Create ellipse object
let ell = {
  p: [canvasX / 2, canvasY / 2],
  v: [0.5, 0.5],
  Width: 100,
  Height: 100,
  StrokeWeight: 4,
};

// The statements in the setup() function
// execute once when the program begins

function setup() {
  // Using Pixel Density to keep animation clear.
  // Set to 2x screen px density.
  // URL https://p5js.org/reference/#/p5/displayDensity
  pixelDensity(displayDensity() * 2);

  // createCanvas must be the first statement.
  // Set all line drawings to white
  // Set animation FrameRate to 120
  // Fill objects black.
  // Smoothen pixelated edges on shapes.
  var canvas = createCanvas(canvasX, canvasY);
  stroke(255); // Set line drawing color to white
  frameRate(120);
  smooth(8);
  fill(0);

  // Random velocity start for ell.
  ell.v[0] = random(1, 2);
  ell.v[1] = random(1, 2);

  // Move canas to DOM in HTML with id "sketch-holder"
  canvas.parent("sketch-holder");
}

function draw() {
  // Consider using delta time to make it framerate insensitive
  // URL https://p5js.org/reference/#/p5/deltaTime

  // Consider using Blend Modes
  // URL https://p5js.org/reference/#/p5/blendMode

  background(50, 69, 77);

  fill(227, 147, 31);
  stroke(255);
  strokeWeight(ell.StrokeWeight);
  ellipse(ell.p[0], ell.p[1], ell.Width, ell.Height);

  ell.p[0] += ell.v[0];
  ell.p[1] += ell.v[1];

  if (
    ell.p[0] < (ell.Width + ell.StrokeWeight * 2) / 2 ||
    ell.p[0] > canvasX - (ell.Width + ell.StrokeWeight * 2) / 2
  ) {
    ell.v[0] = ell.v[0] * -1 + random(-0.5, 0.5);
  }
  ("");

  if (
    ell.p[1] < (ell.Width + ell.StrokeWeight * 2) / 2 ||
    ell.p[1] > canvasY - (ell.Height + ell.StrokeWeight * 2) / 2
  ) {
    ell.v[1] = ell.v[1] * -1 + random(-0.5, 0.5);
  }
  ("");
}

// The statements in draw() are executed until the
// program is stopped. Each statement is executed in
// sequence and after the last line is read, the first
// line is executed again.
// function draw() {
//   background(0); // Set the background to black
//   y = y - 1;
//   if (y < 0) {
//     y = height;
//   }
//   line(0, y, width, y);
// }
