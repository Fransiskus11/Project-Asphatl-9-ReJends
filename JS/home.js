let currentIdx = 0;

function manualMove(pos){
    var images = document.getElementsByClassName("image-container");
    var buttons = document.getElementsByClassName("command-button");

    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "white";
    }

    images[pos].style.display = "block";
    buttons[pos].style.backgroundColor = "#999999";
}

function autoMove(){
    var images = document.getElementsByClassName("image-container");
    var buttons = document.getElementsByClassName("command-button");

    for(let i = 0; i < images.length; i++){
        images[i].style.display = "none";
    }

    for(let i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = "white";
    }

    currentIdx++;
    if(currentIdx >= images.length) currentIdx = 0;

    images[currentIdx].style.display = "block";
}

function carouselStart() {
    manualMove(currentIdx); 
    setInterval(autoMove, 2000);
}

carouselStart();
