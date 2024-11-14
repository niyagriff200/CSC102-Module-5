//For background music
function sound(src)
{
    this.sound = document.createElement("audio") ;
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}

function musicStart()
{
    mySound = new sound("Sound/12 Wilderness of Danger and Beauty.mp3");
    mySound.play();
}
function musicStop()
{
    window.location.reload();
}

//For sound effects for pictures

function playBear() {
    document.getElementById("bearPic").play();
}

function playElephant() {
    document.getElementById("elephantPic").play();
}

function playLion() {
    document.getElementById("lionPic").play();
}

function playWolf() {
    document.getElementById("wolfPic").play();
}

//For animal movement
var bearInterval, elephantInterval, lionInterval, wolfInterval;
var bearPace = 100, elephantPace = 100, lionPace = 100, wolfPace = 100;
var bearDirection = 1, elephantDirection = 1, lionDirection = 1, wolfDirection = 1;

function startBear() {
    document.getElementById("bearMove").disabled = true;
    document.getElementById("stopBearMove").disabled = false;
    var image = document.getElementById("bearImg");
    bearInterval = setInterval(function(){
        image.style.left  = bearPace + "px";
        bearPace += 5 * bearDirection;
        if (bearPace >= window.innerWidth / 2 - image.width / 2 || bearPace <= 50) {
            bearDirection *= -1; // Reverse direction
            image.style.transform = `scaleX(${bearDirection})`; // Flip image
        }
    }, 100);
}

function stopBear() {
    document.getElementById("bearMove").disabled = false;
    document.getElementById("stopBearMove").disabled = true;
    clearInterval(bearInterval);
}

function startElephant() {
    document.getElementById("elephantMove").disabled = true;
    document.getElementById("stopElephantMove").disabled = false;
    var image = document.getElementById("elephantImg");
    elephantInterval = setInterval(function(){
        image.style.left  = elephantPace + "px";
        elephantPace += 5 * elephantDirection;
        if (elephantPace >= window.innerWidth / 2 - image.width / 2 || elephantPace <= 50) {
            elephantDirection *= -1; // Reverse direction
            image.style.transform = `scaleX(${elephantDirection})`; // Flip image
        }
    }, 100);
}

function stopElephant() {
    document.getElementById("elephantMove").disabled = false;
    document.getElementById("stopElephantMove").disabled = true;
    clearInterval(elephantInterval);
}

function startLion() {
    document.getElementById("lionMove").disabled = true;
    document.getElementById("stopLionMove").disabled = false;
    var image = document.getElementById("lionImg");
    lionInterval = setInterval(function(){
        image.style.left  = lionPace + "px";
        lionPace += 5 * lionDirection;
        if (lionPace >= window.innerWidth / 2 - image.width / 2 || lionPace <= 50) {
            lionDirection *= -1; // Reverse direction
            image.style.transform = `scaleX(${lionDirection})`; // Flip image
        }
    }, 100);
}

function stopLion() {
    document.getElementById("lionMove").disabled = false;
    document.getElementById("stopLionMove").disabled = true;
    clearInterval(lionInterval);
}

function startWolf() {
    document.getElementById("wolfMove").disabled = true;
    document.getElementById("stopWolfMove").disabled = false;
    var image = document.getElementById("wolfImg");
    wolfInterval = setInterval(function(){
        image.style.left  = wolfPace + "px";
        wolfPace += 5 * wolfDirection;
        if (wolfPace >= window.innerWidth / 2 - image.width / 2 || wolfPace <= 50) {
            wolfDirection *= -1; // Reverse direction
            image.style.transform = `scaleX(${wolfDirection})`; // Flip image
        }
    }, 100);
}

function stopWolf() {
    document.getElementById("wolfMove").disabled = false;
    document.getElementById("stopWolfMove").disabled = true;
    clearInterval(wolfInterval);
}
