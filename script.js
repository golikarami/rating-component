const submitBtn = document.querySelector(".circle-btn");
const firstContainer = document.querySelector(".container");
const secondContainer = document.querySelector(".second-container");
const rateBtn = document.querySelectorAll(".circle-num");
const selectedText = document.querySelector(".selected-text");
let selectedRate = null;

rateBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    rateBtn.forEach((b) => {
      b.classList.remove("active");
    });
    btn.classList.add("active");
    selectedRate = btn.textContent;
  });
});

submitBtn.addEventListener("click", () => {
  if (!selectedRate) {
    alert("You should select a rate!");
  }
  if (selectedRate) {
    firstContainer.style.display = "none";
    secondContainer.style.display = "flex";
    selectedText.textContent = `You selected ${selectedRate} of 5`;
  }
});
