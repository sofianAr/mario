document.getElementById("perso").style.top = "100px";
document.getElementById("perso").style.left = "100px";
let xmario = 100;
let ymario = 100;

let score = 0;
chronoSecondes()

let game = true 

const goomba = new Image (70,70);
document.body.appendChild(goomba);
goomba.style.position = "absolute"
goomba.style.left = "500px" ;
goomba.style.top = "100px" ;
goomba.src = "img/goomba.png";
// afficher goomba



let xpiece = Math.random() * window.innerWidth;
let ypiece = Math.random() * window.innerHeight;
document.getElementById("piece").style.top = ypiece + "px";
document.getElementById("piece").style.left = xpiece + "px";

document.getElementById("gameover").style.display="none";// enlever 

document.addEventListener("keydown", function (event) {
    if (event.key == "ArrowLeft" && game) {
        xmario = xmario - 40;
        document.getElementById("perso").style.left = xmario + "px";
    } else if (event.key == "ArrowRight" && game ) {
        xmario = xmario + 40;
        document.getElementById("perso").style.left = xmario + "px";
    } else if (event.key == "ArrowUp" && game) {
        ymario = ymario - 40;
        document.getElementById("perso").style.top = ymario + "px";
    } else if (event.key == "ArrowDown" && game) {
        ymario = ymario + 40;
        document.getElementById("perso").style.top = ymario + "px";
    }
    testColision();
});

function testColision() {
    if ((Math.abs(xmario - xpiece) <50) && (Math.abs(ymario - ypiece) < 50)) {
        xpiece = Math.random() * window.innerWidth;
        ypiece = Math.random() * window.innerHeight;
        document.getElementById("piece").style.top = ypiece + "px";
        document.getElementById("piece").style.left = xpiece + "px";
        score ++; 
        document.getElementById("score").innerHTML = "Score : " + score ;
    }
}
let secondes= document.getElementById("secondes").innerHTML
console.log(secondes);
let texteSecondes = secondes.split (" ");
console.log(texteSecondes [ 3 ]);


function chronoSecondes (){
    let chrono = 30;
    
     let intervalId = setInterval(function(){
    if (chrono > 0){
        chrono --;
        document.getElementById("secondes").innerText =  " temps restant : " + chrono ;
    }
    else {
        chrono-- ;
        game = false
        document.getElementById("gameover").style.display="block";
        document.getElementById("piece").style.display="none";
        document.getElementById("perso").style.display="none";
        stopTimer (intervalId);
    }
},1000);
}
function stopTimer(id){
    clearIntervalt(id);
    
}

 
