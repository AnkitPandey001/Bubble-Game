var timer = 25;
var score = 0;
var hitrn = 0;

//************** */
function inScore() {
  score += 10;
  document.querySelector("#sValue").textContent = score;
}
//********************* */

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitValue").textContent = hitrn;
}
//**************** */

function MakeBubbel() {
  var clutter = "";

  for (let i = 1; i <= 75; i++) {
    var Random = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${Random}</div>`;
  }

  document.querySelector("#p-bottom").innerHTML = clutter;
}
//************** */
function Timer() {
  var Cleartimer = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerValue").textContent = timer;
    } else {
      clearInterval(Cleartimer);
      document.querySelector(
        "#p-bottom"
      ).innerHTML = `<h1>Game Over Score = ${score}</h1>`;
      document.querySelector("#hitValue").innerHTML = "0";
      document.querySelector("#sValue").innerHTML = "0";
    }
  }, 1000);
}

//************************** */

document.querySelector("#p-bottom").addEventListener("click", function (det) {
  var clickNum = Number(det.target.textContent);
  if (clickNum === hitrn) {
    inScore();
    MakeBubbel();
    getNewHit();
  }
});

MakeBubbel();
Timer();
getNewHit();
