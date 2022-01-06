

let filterList = document.querySelectorAll(".filter li");
filterList.forEach(li => {
    li.addEventListener('click', removeActive);
});

function removeActive() {
    filterList.forEach(li => {
        li.classList.remove('active');
        this.classList.add('active');
    });
}
//variables
let products = document.querySelectorAll(".categories .border-dark");
let liKitchens = document.getElementById('Kitchens');
let liLivingRoom = document.getElementById("LivingRoom");
let liDinningRoom = document.getElementById("DinningRoom");
let liBedRoom = document.getElementById("BedRoom");
let cardlivingroom = document.querySelectorAll(".categories .LivingRoom");
let cardKitchens = document.querySelectorAll(".categories .Kitchens");
let cardDinningRoom = document.querySelectorAll(".categories .DinningRoom");
let cardBedRoom = document.querySelectorAll(".categories .BedRoom");
let cath1 = document.getElementById("headercat");
//add event listener
liKitchens.addEventListener('click', kitchencat);
liLivingRoom.addEventListener('click', livingcat);
liDinningRoom.addEventListener('click', dinningcat);
liBedRoom.addEventListener('click', bedroomcat);
//function
function livingcat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardlivingroom.forEach(livingroom => {
            livingroom.style = 'display:block'
        })
    });
    cath1.innerHTML = "Living Room"
    filterList.forEach(li => {
        li.classList.remove('active');
        liLivingRoom.classList.add('active');
    });
}

function kitchencat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardKitchens.forEach(Kitchens => {
            Kitchens.style = 'display:block'
        })
    });
    cath1.innerHTML = "Kitchens"
    filterList.forEach(li => {
        li.classList.remove('active');
        liKitchens.classList.add('active');
    });
}

function dinningcat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardDinningRoom.forEach(DinningRoom => {
            DinningRoom.style = 'display:block'
        })
    });
    cath1.innerHTML = "Dinning Room"
    filterList.forEach(li => {
        li.classList.remove('active');
        liDinningRoom.classList.add('active');
    });
}

function bedroomcat() {
    products.forEach(card => {
        card.style = 'display:none';
        cardBedRoom.forEach(BedRoom => {
            BedRoom.style = 'display:block'
        })
    });
    cath1.innerHTML = "Bed Room"
    filterList.forEach(li => {
        li.classList.remove('active');
        liBedRoom.classList.add('active');
    });
}



// addtofav function on localstorage
var names = $(".productName");
var prices = $(".productPrice");
var imgsSrc = $(".productCard div img");

var itemList = [];

function obj(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
}
for (var i = 0; i < 24; i++) {
    var item = new obj(names[i].textContent, prices[i].textContent, imgsSrc[i].getAttribute("src"));
    itemList.push(item)
}


var favList = [];

function addToFav(x) {
    var r = favList.includes(itemList[x]);
    if (!r) {
        favList.push(itemList[x])
    }

    localStorage.setItem('products', JSON.stringify(favList));
}


//addtoCart function
// var names1=$(".productName");
// var prices1= $(".productPrice");
// var imgsSrc1=$(".productCard div img");
var O=new obj2;

var cartProducts = [];

function obj2(name, price, img) {
    this.name = name;
    this.price = price;
    this.img = img;
}
for (var i = 0; i < 24; i++) {
    var cartItem = new obj2(names[i].textContent, prices[i].textContent, imgsSrc[i].getAttribute("src"));
    cartProducts.push(cartItem)
}
console.log(cartProducts)
var cartList = []

function addToCart(e) {
    var r = cartList.includes(cartProducts[e]);
    if (!r) {
        cartList.push(cartProducts[e])
    }
    O=cartProducts[e];
    localStorage.setItem('cart_products', JSON.stringify(cartList));
}



var catIndex = parseInt(localStorage.getItem("catIndex"))
switch (catIndex) {
    case (0):
        livingcat()
        break;
    case (1):
        dinningcat()
        break;
    case (2):
        kitchencat()
        break;
    case (3):
        bedroomcat()
        break;
}
localStorage.removeItem("catIndex")

//...................toggle function for cart button*****
var cartCounter=0;
if(sessionStorage.cartCount){
    cartCounter==sessionStorage.getItem("cartCount")
}


/*..........................add tofev*********************/
let elementsArray = document.querySelectorAll(".btn-outline-danger");
for (let i = 0; i < elementsArray.length; i++) {
    elementsArray[i].addEventListener('click', togfav);
    if (localStorage.getItem(elementsArray[i].id) == elementsArray[i].id) {
        elementsArray[i].children[0].classList.add("fas");
    }

}

function togfav() {

    if (this.children[0].classList.contains("far")) {
        localStorage.setItem(this.id, this.id)
        this.children[0].classList.remove("far");
        this.children[0].classList.add("fas");
    } else {
        this.children[0].classList.add("far");
        this.children[0].classList.remove("fas");
        localStorage.removeItem(this.id, this.id)
        removeItemsFromFav()
    }
}
/*******************************function remove favourit item */
var indexOfRemovedItem;
  function removeItemsFromFav(){
      for(var e=0;e<favList.length;e++){
          if(favList[i] === O){
              indexOfRemovedItem=i;
          }
      }
      favList.splice(indexOfRemovedItem,1);
      console.log(favList);
      localStorage.setItem('products', JSON.stringify(favList));
      
  }

/*************************************counter************* */
 var itemCounter=sessionStorage.getItem("cartCount")
document.querySelector('.cart span').textContent=itemCounter;


// function for add to cart 
let elementsArray2 = document.querySelectorAll(".btn-outline-info");
for(let i=0;i<elementsArray2.length;i++){
    elementsArray2[i].addEventListener('click',togcart)
    if (localStorage.getItem(elementsArray2[i].id) ==  elementsArray2[i].id) {
        elementsArray2[i].children[0].classList.add("fa-shopping-cart");
    }

}
function togcart(){
    if (this.children[0].classList.contains("fa-cart-plus")) {
        localStorage.setItem(this.id, this.id)
        this.children[0].classList.remove("fa-cart-plus");
        this.children[0].classList.add("fa-shopping-cart");
    } else {
        this.children[0].classList.add("fa-cart-plus");
        this.children[0].classList.remove("fa-shopping-cart");
        localStorage.removeItem(this.id, this.id)
        removeItemsFromCart()
    }
}
//........
var indexOfRemovedItem;
function removeItemsFromCart(){
      for(var e=0;e<cartList.length;e++){
          if(cartList[i] === O){
              indexOfRemovedItem=i;
          }
      }
      cartList.splice(indexOfRemovedItem,1);
      console.log(cartList);
      localStorage.setItem('cart_products', JSON.stringify(cartList));
  }


