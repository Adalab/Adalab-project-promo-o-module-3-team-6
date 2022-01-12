"use strict";

// constantes
const shareResult = document.querySelector(".share__result");
const shareBtn = document.querySelector(".js_shareBtn");

// listener del evento
shareBtn.addEventListener("click", shareCard);

// función para que aparezca la parte de compartir la tarjeta
function removeCollapse() {
  shareResult.classList.remove("collapseShare");
}

// función para cambiar el color al botón
function changeColor() {
  shareBtn.classList.add("greyBtn");
}

// función para llamar a las funciones anteriores

function shareCard() {
  removeCollapse();
  changeColor();
}



