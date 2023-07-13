

  function setup() {
    createCanvas(1000,650, WEBGL)
    angleMode(DEGREES)
    rectMode(CENTER)
  }
  
  function draw() {
    background(10, 20, 30)
    noFill()
    stroke(255)
  
    translate(10,20)
  
    for(var i =0;i<200;i++)
    {
      push()
  
      rotate(sin(frameCount+i)*100)
      
      
      var r=map(sin(frameCount), -1, 1, 50, 255)
      var g=map(cos(frameCount/2), -1, 1, 50, 255)
      var b=map(sin(frameCount/4), -1, 1, 50, 255)
  
      stroke(r,g,b)
  
      rect(0, 0, 600-i*3, 600-i*3, 200-i) 
  
      pop()
  
    }
  
  
  }