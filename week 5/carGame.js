var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

var timer = RequestAnimationFrame(main)

function main(){
    //call frame
    timer = requestAnimationFrame(main)

    //clear canvas
    ctx.clearect(0,0,canvas.clientHeight, canvas.width)

    //draw the things
    ctx.fillstyle = "red"
    ctx.fillRect(20, canvas.height/2,30,20)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
}