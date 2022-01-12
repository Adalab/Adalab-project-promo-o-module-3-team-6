"use strict";

const legendShare = document.querySelector(".js_legendShare");
const legendFill = document.querySelector(".js_legendFill");
const legendDesign = document.querySelector(".js_legendDesign");
const collapsible = document.querySelector(".js_collapsible");

function handlerClickLegend(event) {
  collapseContent(event);
  rotateArrow(event);
}
                                                                   
function rotateArrow(event) {
  event.currentTarget.parentNode.classList.toggle("rotateArrow");
  if (event.currentTarget === legendShare) {
    legendFill.parentNode.classList.add("rotateArrow");
    legendDesign.parentNode.classList.add("rotateArrow");
  }
  else if (event.currentTarget === legendFill) {
    legendShare.parentNode.classList.add("rotateArrow");
    legendDesign.parentNode.classList.add("rotateArrow");
  }
  else {
    legendShare.parentNode.classList.add("rotateArrow");
    legendFill.parentNode.classList.add("rotateArrow");
  }
}

function collapseContent(event) {
  event.currentTarget.parentNode.classList.toggle("collapse");
  if (event.currentTarget === legendShare) {
    legendFill.parentNode.classList.add("collapse");
    legendDesign.parentNode.classList.add("collapse");
  }
  else if (event.currentTarget === legendFill) {
    legendShare.parentNode.classList.add("collapse");
    legendDesign.parentNode.classList.add("collapse");
  }
  else {
    legendShare.parentNode.classList.add("collapse");
    legendFill.parentNode.classList.add("collapse");
  }
}



legendShare.addEventListener("click", handlerClickLegend);
legendFill.addEventListener("click", handlerClickLegend);
legendDesign.addEventListener("click", handlerClickLegend);

