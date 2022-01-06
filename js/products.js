// add listenters to Add To Cart Buttons
var cartBtns = document.getElementsByClassName('btn-outline-info');


function addToCartFn() {
    // here goes the logic
}



for (let i = 0; i < cartBtns.length; i++) {
    cartBtns[i].addEventListener('click', addToCartFn)
}



//************************************************************************************
// add listenters to Add To Favourites Buttons
var favBtns = document.getElementsByClassName('btn-outline-danger');

function addToFavFn() {
    // here goes the logic
}



for (let i = 0; i < favBtns.length; i++) {
    favBtns[i].addEventListener('click', addToFavFn)
}