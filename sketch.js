function setup() {
  createCanvas(windowWidth, windowWidth)
  angleMode(DEGREES)
}

function draw() {
  noStroke()
  background(30, 255, 255)
  drawClockFace()
  drawHourHand()
  drawMinuteHand()
  drawSecondHand()
}

function drawClockFace() {
  push()
  translate(windowWidth / 2, windowHeight / 2)
  fill(color('black'))
  ellipse(0, 0, windowWidth * 0.65, windowWidth * 0.65)
  fill(color('white'))
  ellipse(0, 0, windowWidth * 0.6, windowWidth * 0.6)
  fill(color('black'))
  textSize(windowWidth * 0.05)
  textAlign(CENTER, CENTER)
  'III IV V VI VII VIII IX X XI XII I II'.split(' ').forEach((n, index) => {
    text(n, windowWidth * 0.26 * cos(index * 30), windowWidth * 0.26 * sin(index * 30))
  })
  pop()
}

function drawHourHand() {
  push()
  translate(windowWidth / 2, windowHeight / 2)
  fill(color('black'))
  rotate((hour() % 12) * 30 - 90 + minute() / 2)
  ellipse(windowWidth * 0.09, 0, windowWidth * 0.2, windowWidth * 0.02)
  pop()
}

function drawMinuteHand() {
  push()
  translate(windowWidth / 2, windowHeight / 2)
  fill(color('black'))
  rotate(minute() * 6 - 90 + second() / 10)
  ellipse(windowWidth * 0.128, 0, windowWidth * 0.28, windowWidth * 0.012)
  pop()
}

function drawSecondHand() {
  push()
  translate(windowWidth / 2, windowHeight / 2)
  fill(color('red'))
  rotate(second() * 6 - 90)
  ellipse(windowWidth * 0.122, 0, windowWidth * 0.26, windowWidth * 0.005)
  fill(color('black'))
  ellipse(0, 0, windowWidth * 0.03, windowWidth * 0.03)
  pop()
}
