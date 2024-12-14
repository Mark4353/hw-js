let counterValue = 0;


const valueEl = document.querySelector("#value");
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

const decrement = () => {
  counterValue -= 1;
  updateUI();
};

const increment = () => {
  counterValue += 1;
  updateUI();
};
const updateUI = () => {
  valueEl.textContent = counterValue;
};

decrementBtn.addEventListener("click", decrement);
incrementBtn.addEventListener("click", increment);
