"use strict";

// constante y listener del botón reset
const resetBtn = document.querySelector(".js-resetBtn");
resetBtn.addEventListener("click", resetForm);

// función para resetear el formulario
function resetForm(event) {
  event.preventDefault();
  for (const eachInput of allInputs) {
    if (eachInput.name === "palette") {
      if (eachInput.id === "color_blue") {
        eachInput.checked = true;
      } else {
        eachInput.checked = false;
      }
    } else {
      eachInput.value = "";
    }

    namePreview.innerHTML = "Nombre Apellido";
    jobPreview.innerHTML = "Front-end developer";
    phonePreview.href = "";
    mailPreview.href = "";
    linkedinPreview.href = "";
    githubPreview.href = "";
    profileImage.style.backgroundImage = "";
    profilePreview.style.backgroundImage = "";
    generatedLink.innerHTML = "";
    generatedLink.href = "";
    if (shareBtn.classList.contains("greyBtn")) {
      shareResult.classList.add("collapseShare");
      shareBtn.classList.remove("greyBtn");
    }
    if (
      preview.classList.contains("palette-2") ||
      preview.classList.contains("palette-3")
    ) {
      preview.classList.remove("palette-2");
      preview.classList.remove("palette-3");
      preview.classList.add("palette-1");
    }
  }
  localStorage.setItem("userData", "{}");
}
