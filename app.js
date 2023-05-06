const dontShowAgainButton = document.querySelector("dont-show-again")
const helpModal = document.querySelector("help-modal")
const dontShowAgainModal = document.querySelector("dont-show-again-modal")
const submitLopRequestModal = document.querySelector("submit-lop-request-modal")

dontShowAgainButton.addEventListener(function(){
    helpModal.classList.toggle("hidden")
    dontShowAgainButton.classList.toggle("hidden")
    dontShowAgainModal.classlist.toggle("hidden")
})