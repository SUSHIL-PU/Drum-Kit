
// detecting click event and make sound
let numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(let i=0; i<numberOfDrumButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
            let buttonText = this.innerText;
            makeSound(buttonText); 
            buttonAnimation(buttonText);  
        });
}


// detecting key event and make sound
document.addEventListener("keypress" , function(event){
    makeSound(event.key);   
    buttonAnimation(event.key); 
    });


// function to make sound
function makeSound(key){
    switch (key) {
        case "w":
            let crash = new Audio("static/sounds/crash.mp3");   // Object of Audio is created to play the sound.
            crash.play();                    
            break;
        case "a":
            let kick = new Audio("static/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "s":
            let snare = new Audio("static/sounds/snare.mp3");
            snare.play();
            break;
        case "d":
            let tom1 = new Audio("static/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "j":
            let tom2 = new Audio("static/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "k":
            let tom3 = new Audio("static/sounds/tom-3.mp3");
            tom3.play(); 
            break;
        case "l":
            let tom4 = new Audio("static/sounds/tom-4.mp3");
            tom4.play();
    }
}

// for button animation 
function buttonAnimation(currentKey){
    let activeBtn = document.querySelector("."+currentKey);  // selecting the pressed key
    activeBtn.classList.add("pressed");  // adding pressed(css) i.e opacity: 0.5 to that button
    setTimeout(function(){
        activeBtn.classList.remove("pressed");
    }, 100);                                       // after a time gap of 100 ms removing the pressed class(css).
}