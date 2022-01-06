var cartList =document.getElementById("cart-items");
var cartItems=JSON.parse(localStorage.getItem("cart_products"));
for(var i=0;i<cartItems.length;i++){
	var cartRow=document.createElement("tr");
	cartRow.classList.add('cart-row');
	var cartRowContent=`
	
	<th scope="row" class="border-0">
	  <div class="p-2">
		<img src="${cartItems[i].img}" alt="" width="70" class="img-fluid rounded shadow-sm">
		<div class="ml-3 d-inline-block align-middle">
		  <h5 class="mb-0 text-dark d-inline-block align-middle cart-item-title">${cartItems[i].name}</h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
		</div>
	  </div>
	</th>
	<td class="border-0 align-middle cart-price"><strong>${cartItems[i].price}</strong></td>
	 <td data-th="Quantity" style="width:10%">
			  <input type="number" class="form-control form-control-lg text-center mt-3 cart-quantity-input" value="1" min="1">
		  </td>
	<td class="border-0 align-middle"><button type="button" class="btn btn-danger adds">Remove</button></td>`
	cartRow.innerHTML=cartRowContent
//   console.log(cartItems)
  cartList.append(cartRow)
  cartRow.getElementsByClassName('adds')[0].addEventListener('click',removeCartItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('chang',quantityChanged)

	
}
updateCartTotal()






//addtoCart function






var quantityInputs=document.getElementsByClassName('cart-quantity-input')
for(var i=0;i<quantityInputs.length;i++){
	var input=quantityInputs[i]
	input.addEventListener('change',quantityChanged)
}
function quantityChanged(event){
	var input= event.target
	if (isNaN(input.value) || input.value<=0) {
		input.value=1
	}
	updateCartTotal()
}

//remove item function

var removeCartItemButtons=document.getElementsByClassName('adds');
for(var i =0; i< removeCartItemButtons.length;i++){
	var button = removeCartItemButtons[i]
	button.addEventListener('click',removeCartItem)



}
function removeCartItem(event){
	    buttonClicked = event.target
		var x=parseFloat(buttonClicked.parentElement.previousElementSibling.previousElementSibling.textContent.replace("$",""))
		var q= buttonClicked.parentElement.previousElementSibling.children[0].value
		var oldTotal=$('.cart-total-price')[0].textContent
		var newTotal=parseFloat(oldTotal.replace('$',''))-x*q;
		// console.log(newTotal)
		$('.cart-total-price')[0].textContent=newTotal.toString();
		buttonClicked.parentElement.parentElement.remove()
		itemCounter--;
		sessionStorage.setItem("cartCount",itemCounter)
		document.querySelector('.cart span').textContent = itemCounter
        

}


//update subtotal function

function updateCartTotal(){
	var total = 0
	for(var i=0;i<cartItems.length;i++){
		var price =parseFloat(cartItems[i].price.replace('$',''))
		var quantityele=document.getElementsByClassName('cart-quantity-input')[i]
		var quantity = quantityele.value
		var total = total+quantity * price;


	}
document.getElementsByClassName('cart-total-price')[0].innerText='$'+total
return total;

}


// remove favlist from local storage
/*localStorage.removeItem('cart_products');*/

var itemCounter=$("table tr").length-1;
document.querySelector('.cart span').textContent=itemCounter;
sessionStorage.setItem("cartCount",itemCounter);



document.getElementsByClassName("btn  mb-4 btn-lg pl-5 pr-5 checkout_btn")[0].addEventListener("click",function(){
	alert(localStorage.getItem("fullName") + " Thank you for doing business with us ❤")
	
	localStorage.clear()
	sessionStorage.clear()
	alert("Thank you for doing business with us ❤")
})