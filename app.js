const dontShowAgainButton = document.querySelector(".dont-show-again");
const helpModal = document.querySelector(".help-modal");
const dontShowAgainModal = document.querySelector(".dont-show-again-modal");
const submitLopRequestModal = document.querySelector(
  ".submit-lop-request-modal"
);
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const lopLink = document.querySelector("#lop-link");

dontShowAgainButton.addEventListener("click", function () {
  helpModal.classList.add("hidden");
  dontShowAgainButton.classList.add("hidden");
  dontShowAgainModal.classList.remove("hidden");
  submitLopRequestModal.classList.add("hidden");
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
});

lopLink.addEventListener("click", function () {
  helpModal.classList.toggle("hidden");
  submitLopRequestModal.classList.toggle("hidden");
});
