function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  const clock = new Clock()
  clock.drawClock()
}

class Clock {
  constructor() {
    this.currentDateTime = new Date()
    this.hour = (this.currentDateTime.getHours() % 12) + this.currentDateTime.getMinutes() / 60
    this.minute = this.currentDateTime.getMinutes() + this.currentDateTime.getSeconds() / 60
    this.second = this.currentDateTime.getSeconds() + this.currentDateTime.getMilliseconds() / 1000
    this.degreesHour = this.hour * 30 - 90
    this.degreesMinute = this.minute * 6 - 90
    this.degreesSecond = this.second * 6 - 90
    this.relativeSize = min(windowWidth, windowHeight)
  }

  drawClock() {
    noStroke()
    background(30, 255, 255)
    this.drawClockFace()
    this.drawHourHand()
    this.drawMinuteHand()
    this.drawSecondHand()
  }

  drawClockFace() {
    push()
    translate(windowWidth / 2, windowHeight / 2)
    fill(color('black'))
    ellipse(0, 0, this.relativeSize * 0.65, this.relativeSize * 0.65)
    fill(color('white'))
    ellipse(0, 0, this.relativeSize * 0.6, this.relativeSize * 0.6)
    fill(color('black'))
    textSize(this.relativeSize * 0.05)
    textAlign(CENTER, CENTER)
    'III IV V VI VII VIII IX X XI XII I II'.split(' ').forEach((n, index) => {
      text(
        n,
        this.relativeSize * 0.26 * cos(index * 30),
        this.relativeSize * 0.26 * sin(index * 30)
      )
    })
    pop()
  }

  drawHourHand() {
    push()
    translate(windowWidth / 2, windowHeight / 2)
    fill(color('black'))
    rotate(this.degreesHour)
    ellipse(this.relativeSize * 0.09, 0, this.relativeSize * 0.2, this.relativeSize * 0.02)
    pop()
  }

  drawMinuteHand() {
    push()
    translate(windowWidth / 2, windowHeight / 2)
    fill(color('black'))
    rotate(this.degreesMinute)
    ellipse(this.relativeSize * 0.128, 0, this.relativeSize * 0.28, this.relativeSize * 0.012)
    pop()
  }

  drawSecondHand() {
    push()
    translate(windowWidth / 2, windowHeight / 2)
    fill(color('red'))
    rotate(this.degreesSecond)
    ellipse(this.relativeSize * 0.122, 0, this.relativeSize * 0.26, this.relativeSize * 0.005)
    fill(color('black'))
    ellipse(0, 0, this.relativeSize * 0.03, this.relativeSize * 0.03)
    pop()
  }
}
