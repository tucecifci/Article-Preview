const share = document.querySelector("#share");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const right = document.querySelector(".right");

//open share button

share.addEventListener("click", function () {
  overlay.classList.remove("hidden");
});
