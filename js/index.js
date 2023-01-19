let main = document.querySelector('.main');
let img = document.querySelector('.img');
let header = document.querySelector('h1');

function greatSize() {
    
    if (main.offsetWidth / main.offsetHeight < 3508 / 2480) {
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
        main.style.height = "calc(100vh - 65px)";
    }
    greatSize();
});