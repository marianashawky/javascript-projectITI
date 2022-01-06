// function selecter(this_id, other_id) {
//     var e = document.getElementById(this_id);
//     var d = document.getElementById(other_id);
//     e.classList.add("active");
//     d.classList.remove("active");

// }



let contact = document.getElementById("a1");
let message = document.getElementById("a2");
contact.addEventListener("click", active)
message.addEventListener("click", active1)
function active() {
  document.getElementById("message").style.display = "none";
  document.getElementById("contact").style.display = "block";
  contact.classList.add("active");
  message.classList.remove("active");
  contact.style.color="gray";
  message.style.color="white";
}

function active1() {
  document.getElementById("contact").style.display = "none";
  document.getElementById("message").style.display = "block";
  message.classList.add("active");
  contact.classList.remove("active");
message.style.color="gray";
contact.style.color="white";

}

//************************************************************ */
var sendBtn = document.getElementById('sent');
var msgInput = document.getElementById('comment');


sendBtn.addEventListener('click', recive);

function recive() {
    console.log(msgInput.value)
    console.log(msgInput.textContent)

    if (msgInput.value === "") {
        alert("Please Enter the message");
    } else {
        alert("Your Message is sent Succefully");
    }

}
document.querySelector('.cart span').textContent=sessionStorage.getItem("cartCount")
//******************************************************************* */