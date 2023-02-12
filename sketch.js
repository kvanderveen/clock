function setup() {
  createCanvas(windowWidth, windowHeight)
  angleMode(DEGREES)
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function draw() {
  const clock = new Clock(true)
  clock.drawClock()
}

class Clock {
  constructor(roman = false) {
    const currentDateTime = new Date()
    const hour = currentDateTime.getHours()
    const minute = currentDateTime.getMinutes()
    const second = currentDateTime.getSeconds()
    const milliseconds = currentDateTime.getMilliseconds()
    this.roman = roman
    this.degreesHour = (hour + minute / 60 + second / 3600) * 30 - 90
    this.degreesMinute = (minute + (second + milliseconds / 1000) / 60) * 6 - 90
    this.degreesSecond = (second + milliseconds / 1000) * 6 - 90
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
    const numbers = this.roman
      ? 'I II III IV V VI VII VIII IX X XI XII'.split(' ')
      : '1 2 3 4 5 6 7 8 9 10 11 12'.split(' ')
    numbers.forEach((n, index) => {
      text(
        n,
        this.relativeSize * 0.26 * cos(index * 30 - 60),
        this.relativeSize * 0.26 * sin(index * 30 - 60)
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
