
function semafor(){

    boje = document.getElementsByClassName("boje");
    boje[0].style.background = "red";
    boje[1].style.background = "gray";
    boje[2].style.background = "gray";

function changeToYellow() {
    boje[1].style.background = "yellow";

}
function changeToGreen() {
    boje[0].style.background = "gray";
    boje[1].style.background = "gray";
    boje[2].style.background = "greenyellow";
    
}




    x = setTimeout(changeToYellow,3000);
    y = setTimeout(changeToGreen, 5000, );
    start = setInterval(semafor ,12000);

}

semafor();