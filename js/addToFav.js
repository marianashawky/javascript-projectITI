var cartCounter =sessionStorage.getItem("cartCounter");
// addtofav function from localstorage
var favList = document.getElementById("fav");
var favItems=JSON.parse(localStorage.getItem("products"));

for(var i=0;i<favItems.length;i++){
	var fav=document.createElement("div");
     
	var image=document.createElement("img");
	image.setAttribute("src",favItems[i].img);
	var PName=document.createElement("span");
	var Pprice=document.createElement("span");
	var del =document.createElement("button");
	del.textContent="Remove";
	
	var addCart=document.createElement("button");
	addCart.textContent="Add to Cart"
	addCart.classList.add("needed");


	PName.textContent=favItems[i].name ;
	Pprice.textContent=favItems[i].price;
	fav.appendChild(image);
	fav.appendChild(PName);
	fav.appendChild(Pprice);
	fav.appendChild(del);
	fav.appendChild(addCart);
	
	
	favList.appendChild(fav);

}

// remove favlist from local storage
localStorage.removeItem('products');

// remove items from favourit list
var removeFavItemButtons=$('#fav div button:even')
for(var i =0; i< removeFavItemButtons.length;i++){
	var button1 = removeFavItemButtons[i]
	button1.addEventListener('click',removeFavItem)

}
function removeFavItem(event){
	    buttonClicked = event.target
		buttonClicked.parentElement.remove()



        updateCartTotal()

}


let go = document.querySelectorAll(".needed");
for(let i=0;i<go.length;i++){
    go[i].addEventListener('click',gotocart);
}
let glo=0;

function gotocart(e){
	
	// alert("it is done");
	
	document.querySelector('.cart span').textContent=++itemCounter
	sessionStorage.setItem("cartCount",itemCounter);
	var first=this.previousSibling;
	var second=first.previousSibling;
	var third=second.previousSibling;
	var fourth=third.previousSibling;
	
	// console.log(third.previousSibling.nodeName);
	var cartRow=document.createElement("tr");
	cartRow.classList.add('cart-row');
	var cartRowContent=`
	
	<th scope="row" class="border-0">
	  <div class="p-2">
		<img src= ${fourth.getAttribute("src")} alt="" width="70" class="img-fluid rounded shadow-sm">
		<div class="ml-3 d-inline-block align-middle">
		  <h5 class="mb-0 text-dark d-inline-block align-middle cart-item-title">${third.textContent}</h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
		</div>
	  </div>
	</th>
	<td class="border-0 align-middle cart-price"><strong>${second.textContent}</strong></td>
	 <td data-th="Quantity" style="width:10%">
			  <input type="number" class="form-control form-control-lg text-center mt-3 cart-quantity-input" value="1" min="1">
		  </td>
	<td class="border-0 align-middle"><button type="button" class="btn btn-danger adds">Remove</button></td>`
	cartRow.innerHTML=cartRowContent
//   console.log(cartItems)
  cartList.append(cartRow)
  cartRow.getElementsByClassName('adds')[0].addEventListener('click', removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('chang',quantityChanged)
  var k=parseFloat(second.textContent);
  var total =updateCartTotal()+k+glo;
  document.getElementsByClassName('cart-total-price')[0].innerText='$'+total;
	glo=glo+k;
	e.target.style.display = "none";
 
}


