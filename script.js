function getPilihanComputer() {
  const comp = Math.random() * 10;
  if (comp < 3.33) return "rock";
  if (comp > 3.33 && comp < 6.66) return "paper";
  return "scissors";
}

function getHasil(comp, player) {
  if (player == comp) return "DRAW!";
  if (player == "rock") return comp == "paper" ? " YOU LOSE" : " YOU WIN";
  if (player == "paper") return comp == "scissors" ? " YOU LOSE" : " YOU WIN";
  if (player == "scissors") return comp == "rock" ? " YOU LOSE" : " YOU WIN";
}

const comp = document.querySelector(".pil-comp");
const score = document.querySelector(".info");
const yourScore = document.querySelector(".your-score");
const compScore = document.querySelector(".comp-score");
let yScores = 1;
let cScores = 1;
const pilUser = document.querySelectorAll("li img");
pilUser.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilComp = getPilihanComputer();
    const pilPlayer = pil.className;
    const hasil = getHasil(pilComp, pilPlayer);
    random();

    setTimeout(function () {
      score.innerHTML = hasil;
      comp.src = `${pilComp}.png`;

      if (hasil == " YOU WIN") yourScore.innerHTML = yScores++;

      if (hasil == " YOU LOSE") compScore.innerHTML = cScores++;
    }, 1000);
  });
});

function random() {
  const imgComp = document.querySelector(".pil-comp");
  const image = ["rock", "paper", "scissors"];
  let i = 0;
  const waktuAwal = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuAwal > 1000) {
      clearInterval;
      return;
    }
    imgComp.setAttribute("src", image[i++] + ".png");
    if (i == image.length) i = 0;
  }, 100);
}
