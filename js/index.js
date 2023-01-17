let main = document.querySelector('.main');
let img = document.querySelector('.img');

function greatSize() {
    if (window.innerWidth / window.innerHeight < 3408 / 2480) {
        img.style.width = "100%";
        img.style.height = "auto";
    } else {
        img.style.width = "auto";
        img.style.height = "100%";
    }
}

greatSize();

window.addEventListener("resize", function(){
    greatSize();
});