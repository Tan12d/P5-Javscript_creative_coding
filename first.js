function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL)
    angleMode(DEGREES)

    // noLoop()
}

function draw() {
    background(200)

    translate(0, 200, 0)

    rotateY(frameCount)

    branch(100)

}

function branch(len)
{
    line(0, 0, 0, 0, -len, 0)

    translate(0, -len, 0)

    if(len > 10)
    {
        for(var i=0;i<3;i++)
        {
            rotateY(120)

            push()

            rotateZ(30)
            branch(len * 0.7)

            pop()
        }
    }
}