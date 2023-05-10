const dontShowAgainButton = document.querySelectorAll(".dont-show-again");
const helpModal = document.querySelector(".help-modal");
const dontShowAgainModal = document.querySelector(".dont-show-again-modal");
const submitLopRequestModal = document.querySelector(
  ".submit-lop-request-modal"
);
const closeBtn = document.querySelector("#close-btn");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const lopLink = document.querySelector("#lop-link");
const helpBtn = document.querySelector("#help-btn");

dontShowAgainButton[0].addEventListener("click", function () {
  helpModal.classList.add("hidden");
  dontShowAgainButton[0].classList.add("hidden");
  dontShowAgainModal.classList.remove("hidden");
  document.cookie = "dontShowAgain=true; path/";
});

dontShowAgainButton[1].addEventListener("click", function () {
  dontShowAgainButton[1].classList.add("hidden");
  dontShowAgainModal.classList.remove("hidden");
  submitLopRequestModal.classList.add("hidden");
  document.cookie = "dontShowAgain=true; path/";
});

closeBtn.addEventListener("click", function () {
  modal.classList.add("hidden");
  backdrop.classList.add("hidden");
  helpBtn.classList.remove("hidden");
});

lopLink.addEventListener("click", function () {
  helpModal.classList.add("hidden");
  submitLopRequestModal.classList.remove("hidden");
});

helpBtn.addEventListener("click", function () {
  helpModal.classList.remove("hidden");
});

if (document.cookie.includes("dontShowAgain=true")) {
  modal.style.display = "none";
  backdrop.style.display = "none";
}
