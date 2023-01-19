let main = document.querySelector('.main');
let img = document.querySelector('.img');
let header = document.querySelector('h1');

function greatSize() {
    if (window.innerWidth / (window.innerHeight - 65) < 3408 / 2480) {
        img.style.width = "100%";
        img.style.height = "auto";
    } else {
        img.style.width = "auto";
        img.style.height = "100%";
    }
}

greatSize();

window.addEventListener("resize", function(){
    if (window.innerHeight < 200) {
        main.style.height = "200px";
    } else {
        main.style.height = Number(window.innerHeight - 65) + "px";
    }
    greatSize();
});