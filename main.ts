input.onButtonPressed(Button.A, function () {
    running = !(running)
    left = -1
    right = -1
})
let running = false
let left = 0
let right = 0
// in aer = 0
// 
// pe podea alb = 1, negru = 0
let speed = 100
right = -1
let newRight = -1
left = -1
let newLeft = -1
basic.forever(function () {
    if (!(running)) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 0)
        return;
    }
    newLeft = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    newRight = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (newLeft == left && newRight == right) {
        return;
    } else {
        // comment
        // basic.showNumber(newLeft)
        left = newLeft
        right = newRight
    }
    if (left == 0 && right == 0 || left == 1 && right == 1) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, speed)
    } else if (left == 0) {
        // left pe negru, right pe alb, deci deviez in dreapta, deci tr sa o iau in stanga
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed / 4)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed)
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, speed)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, speed / 4)
    }
})
