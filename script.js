const nameUser = document.querySelector("#input-name");
const testmax = document.querySelector("#testmax");
const scoreStudent = document.querySelector("#score-student");
const scorePercent = document.querySelector(".final-score");
const btnCount = document.querySelector(".btn-count");
const btnAdd = document.querySelector(".btn-add");
const error = document.querySelector(".error");
const arch = document.querySelector(".archives");
const medium = document.querySelector(".medium");
const btnDel = document.querySelector(".btn-del");
const list = document.querySelectorAll(".archives li");

// Check form
const checkError = () => {
  if (nameUser.value == "" || testmax.value == 0 || scoreStudent == 0) {
    error.style.visibility = "visible";
    error.textContent = "Enter all fields!";
  } else {
    error.style.visibility = "hidden";
    countScore();
  }
};
// Counting the score
const countScore = () => {
  const a = Number(testmax.value);
  const b = Number(scoreStudent.value);

  const result = (b / (a * 0.1)) * 10;
  scorePercent.textContent = `${result.toFixed(1)} %`;
  btnAdd.style.visibility = "visible";

  return result;
};

//Creating Archives
const addArch = () => {
  result = countScore();

  // Li in archives
  const li = document.createElement("li");
  li.classList.add("li-arch");
  li.innerHTML = `<button class="remove-item">${nameUser.value} - Score: ${
    scoreStudent.value
  } pkt. Percentage: ${result.toFixed(1)}%. </button>`;

  arch.appendChild(li);

  let arrList = Array.from(arch.children, (li) => li.innerHTML); //Array with li in archives
  scorePercent.textContent = "";
  nameUser.value = "";
  scoreStudent.value = "";
  btnAdd.style.visibility = "hidden";

  // Array with only scores
  let score = result.toFixed(1);
  let arrScore = Array.from(score);
  let arrSc = arrScore.reduce((acc, cur) => acc + cur);
  let arrNumber = Number(arrSc);

  // Span with scores putting into Li
  const btnRemove = document.querySelector(".remove-item");
  const span = document.createElement("span");
  span.classList.add("remove-span");
  span.textContent = arrNumber;
  btnRemove.appendChild(span);

  // medium from all scores
  const medScor = () => {
    let arr = Array.from(btnRemove.children, (el) => el.textContent); // Array with scores from span
    let res = arr.map((i) => Number(i)); // string to number
    let newArr = res.reduce((acc, cur) => acc + cur);
    let finalResult = newArr / arr.length;
    medium.textContent = `${finalResult.toFixed(1)} %`;
  };
  medScor();

  //deleting archives
  const list = document.querySelectorAll(".archives li");
  const clearP = () => {
    list.forEach((element) => {
      element.remove();
      medium.textContent = "";
      testmax.value = "";
    });
  };
  btnDel.addEventListener("click", clearP);
};

btnCount.addEventListener("click", checkError);
btnAdd.addEventListener("click", addArch);
