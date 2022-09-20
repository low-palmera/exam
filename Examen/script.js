// eliminar elemento

var alertaCookie = document.querySelector(".alert-cookie");

function hide() {
    alertaCookie.remove();
}

// alerta
function emptyCart() {
    alert("Your cart is empty!");
}

// hoover
function hoverImg(element) {
    element.style.backgroundImage = "url(assets/succulents-2.jpg)";    
}

function outImg(element) {
    element.style.backgroundImage = "url(assets/succulents-1.jpg)";    
}