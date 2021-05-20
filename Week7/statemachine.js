var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')
var timer = requestAnimationFrame(main);
var gameState = []
var currentState = 0
var x = 10
var gameOver = true




document.addEventListener("Keydown", KeyPressDown)
document.addEventListener("Keyup", KeyPressUp)

function KeyPressDown(e){
console.log(e.KeyCode)

}
function KeyPressUp(e){
    console.log(e.KeyCode)
    if(gameOver == false){

    }
    if(e.KeyCode == 32){

    }
        changeState()
     
}

function changeState(){
    if(currentState >= gameStates.Length){
       currentState = 0
    }

    else{
        currentState++
    }

}




//states of our gameState State Machine
gameState[0]= function(){
     ctx.fillStyle = "black"
     ctx.fillRect(0,0, canvas.width, canvas.height)
     ctx.fillStyle = "white"
     ctx.textAlign = "center"
     ctx.font = "30px Arial"
     ctx.fillText("Untitled HTML Game", Canvas.width/2, canvas.height/2 - 30)
     ctx.font = "15px Arial"
     ctx.fillText("(Press Spacebar to Start)", Canvas.width/2, canvas.height/2 + 15)
}
gameState[1] = function(){
    gameOver = false
    ctx.fillStyle = "cyan"
    ctx.fillRect(0,0, canvas.width, canvas.height)
    ctx.fillStyle = "black"
    ctx.fillRect(x, canvas.height/2, 100, 50)
    x+= 5

    if(x > 600){
        x = 10
        gameOver = true
        currentState++

    }
}

gameStates[2] = function(){
    ctx.fillStyle = "red"
     ctx.fillRect(0,0, canvas.width, canvas.height)
     ctx.fillStyle = "white"
     ctx.textAlign = "center"
     ctx.font = "30px Arial"
     ctx.fillText("Game Over", Canvas.width/2, canvas.height/2 - 30)
     ctx.font = "15px Arial"
     ctx.fillText("(Press Spacebar for Main Menu)", Canvas.width/2, canvas.height/2 + 15)



}

function main(){
    ctx.clearRect(0,0,canvas.Width, canvas.height)

    gameState[currentState]()

    timer = requestAnimationFrame(main)
}