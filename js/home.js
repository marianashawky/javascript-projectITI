
var images=["../Source/2.jpg","../Source/3.jpg","../Source/4.jpg","../Source/1.jpg"];
var slidIndex=0;
var img=document.getElementById("slider")
function increase(){
    if(slidIndex==3){
        slidIndex=-1
    }
    slidIndex++;
    return slidIndex;
    }

function display(){
    img.setAttribute("src",images[increase()]);
}
var interval=setInterval(display,3000);


// directing select menu options to selected category : 


var btnLiv = document.getElementsByClassName("btnLiv");
var btnKit = document.getElementsByClassName("btnKit");
var btnBed = document.getElementsByClassName("btnBed");
var btnDin = document.getElementsByClassName("btnDin");

for (let i = 0; i < btnLiv.length; i++) {
    btnLiv[i].addEventListener('click', function () {
        location.href = "./productsLiv.html";
    }); 
}

for (let i = 0; i < btnKit.length; i++) {
    btnKit[i].addEventListener('click', function () {
        location.href = "./productsKit.html";
    }); 
}

for (let i = 0; i < btnBed.length; i++) {
    btnBed[i].addEventListener('click', function () {
        location.href = "./productsBed.html";
    }); 
}


for (let i = 0; i < btnDin.length; i++) {
    btnDin[i].addEventListener('click', function () {
        location.href = "./productsDin.html";
    }); 
}


function check(x){
    localStorage.setItem("catIndex",x);
}

document.querySelector('.cart span').textContent=sessionStorage.getItem("cartCount")
