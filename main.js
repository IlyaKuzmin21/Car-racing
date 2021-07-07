var canv = document.getElementById('canvas')
var ctx = canv.getContext('2d')

canv.width = 386
canv.height = 896

var car = new Image()
var car_1 = new Image()
var car_2 = new Image()
var car_3 = new Image()
var road = new Image()
var line = new Image()

car.src = "img/car.png"
car_1.src = "img/car_1.png"
car_2.src = "img/car_2.png"
car_3.src = "img/car_3.png"
road.src = "img/road.png"
line.src = "img/line.png"

var xPos = 210
var yPos = 500
var car_width = 61
var car_height = 124
var score = 0

// function random(min, max)
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

//// massive cars begin
var cars = []
cars[0] = {

// lines
  xLineL: 90,
  yLineL: -100,

  xLineR: 285,
  yLineR: -100,

// cars
  xCar1: 10,
  yCar1: Math.floor(getRandom(-1, -5)) * 100,

  xCar2: 110,
  yCar2: Math.floor(getRandom(-5, -10)) * 100,

  xCar3: 210,
  yCar3: Math.floor(getRandom(-2, -10)) * 100,

  xCar4: 310,
  yCar4: Math.floor(getRandom(-2, -10)) * 100
}
//// massive cars end

// clear
ctx.fillRect(0, 1000, 386, 1500)

//// main function begin
function draw () {
  ctx.drawImage(road, 0, 0, 386, 890)
  
  // cars
  for(var i = 0; i < cars.length; i++) {
    ctx.drawImage(line, cars[i].xLineL, cars[i].yLineL, 10, 50)
    ctx.drawImage(line, cars[i].xLineR, cars[i].yLineR, 10, 50)

    ctx.drawImage(car, cars[i].xCar1, cars[i].yCar1, car_width, car_height)
    ctx.drawImage(car_1, cars[i].xCar2, cars[i].yCar2, car_width, car_height)
    ctx.drawImage(car_2, cars[i].xCar3, cars[i].yCar3, car_width, car_height)
    ctx.drawImage(car_3, cars[i].xCar4, cars[i].yCar4, car_width, car_height)

    // speed
    cars[i].yLineL += 3.5
    cars[i].yLineR += 3.5
    cars[i].yCar1 += 5
    cars[i].yCar2 += 5
    cars[i].yCar3 += 2.5
    cars[i].yCar4 += 2.5

    // short lines
    if (cars[i].yLineL == 1.5) {
      cars.push({
        xLineL: 90,
        yLineL: -100
      })
    } 

    if (cars[i].yLineR == 1.5) {
      cars.push({
        xLineR: 285,
        yLineR: -100
      })
    } 

    // push cars
    // car 1
    if (cars[i].yCar1 == 700) {
      cars.push({
        xCar1: 10,
        yCar1: Math.floor(getRandom(-2, -10)) * 100
      })
    } 
    if (cars[i].yCar1 >= 1000 && cars[i].yCar1 <= 1124) {
      ctx.clearRect(0, 1000, 386, car_height)
    }
    
    // car 2
    if (cars[i].yCar2 == 200) {
      cars.push({
        xCar2: 110,
        yCar2: Math.floor(getRandom(-2, -10)) * 100
      })
    } 
    if (cars[i].yCar2 >= 1000 && cars[i].yCar2 <= 1124) {
      ctx.clearRect(0, 1000, 386, car_height)
    }
    
    // car 3
    if (cars[i].yCar3 == 300) {
      cars.push({
        xCar3: 210,
        yCar3: Math.floor(getRandom(-2, -10)) * 100
      })
    } 
    if (cars[i].yCar3 >= 1000 && cars[i].yCar3 <= 1124) {
      ctx.clearRect(0, 1000, 386, car_height)
    }
    
    // car 4
    if (cars[i].yCar4 == 700) {
      cars.push({
        xCar4: 310,
        yCar4: Math.floor(getRandom(-2, -10)) * 100
      })
    }
    if (cars[i].yCar4 >= 1000 && cars[i].yCar4 <= 1124) {
      ctx.clearRect(0, 1000, 386, car_height)
    }

    // check cars
    // car 1
    xPos == cars[i].xCar1 && yPos == cars[i].yCar1 + car_height ? location.reload() : '';
    ((cars[i].yCar1 + car_height) >= yPos && (cars[i].yCar1 + car_height) <= yPos + (car_height * 2)) && 
    (xPos == 10 && yPos + car_height) ? location.reload() : '';
    
    // car 2
    xPos == cars[i].xCar2 && yPos == cars[i].yCar2 + car_height ? location.reload() : '';
    ((cars[i].yCar2 + car_height) >= yPos && (cars[i].yCar2 + car_height) <= yPos + (car_height * 2)) && 
    (xPos == 110 && yPos + car_height) ? location.reload() : '';
    
    // car 3
    xPos == cars[i].xCar3 && yPos == cars[i].yCar3 + car_height ? location.reload() : '';
    ((cars[i].yCar3 + car_height) >= yPos && (cars[i].yCar3 + car_height) <= yPos + (car_height * 2)) && 
    (xPos == 210 && yPos + car_height) ? location.reload() : '';
    
    // car 4
    xPos == cars[i].xCar4 && yPos == cars[i].yCar4 + car_height ? location.reload() : '';
    ((cars[i].yCar4 + car_height) >= yPos && (cars[i].yCar4 + car_height) <= yPos + (car_height * 2)) && 
    (xPos == 310 && yPos + car_height) ? location.reload() : '';

    // score
    cars[i].yLineL == 99.5 ? score++ : '';

    // keyboard
    window.onkeydown = function move_left(){
      if (event.keyCode==37){
        xPos != 10 ? xPos -= 100 : xPos -= 0;
      }
      if(event.keyCode==39){
        xPos != 310 ? xPos += 100 : xPos += 0
      }
    }
  }

  // our car
  ctx.drawImage(car_3, xPos, yPos, car_width, car_height)

  // score
  ctx.fillStyle = "#FF0000"
  ctx.font = "24px verdana"
  ctx.fillText("Счет:" + score, 20, 620)

  function win () {
    console.log('Вы победили!')
    ctx.fillStyle = "#FF0000"
    ctx.font = "24px verdana"
    ctx.fillText("Вы победили. Счет: " + score, 60, 384)
  }

  score != 80 ? requestAnimationFrame(draw) : requestAnimationFrame(win)
}
//// main function end

draw()

road.onload = draw
