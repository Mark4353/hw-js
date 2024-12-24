const bodyElement = document.querySelector("body");
const openModalBtn = document.querySelector('[data-action="open-modal"]');
const closeModalBtn = document.querySelector('[data-action="close-modal"]');
const backdrop = document.querySelector(".backdrop");
const radioButtons = document.querySelectorAll('input[name="color"]');

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  document.body.classList.add("show-modal");
}

function closeModal() {
  document.body.classList.remove("show-modal");
}

backdrop.addEventListener("click", (event) => {
  if (event.target === backdrop) {
    closeModal();
  }
});

radioButtons.forEach((button) => {
  button.addEventListener("change", (event) => {
    document.body.style.backgroundColor = event.target.value;
  });
});

document.body.style.backgroundColor = document.querySelector('input[name="color"]:checked').value;


