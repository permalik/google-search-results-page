//Sign-In Button
function darkBlue() {
  document.getElementById("link-sign-in").style.backgroundColor = "#2f79f3";
}

function lightBlue() {
  document.getElementById("link-sign-in").style.backgroundColor = "#4285f4";
}

//People Search | Close Toggle
function closeBox() {
  const x = document.getElementById("people-search");
  if (x.style.display === "inherit") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Arrow Toggle
function arrowOneTogg() {
  const arrOne = document.getElementById("dropbtn-one-arrow");
  arrOne.classList.toggle("rotateChev");
}

function arrowTwoTogg() {
  const arrTwo = document.getElementById("dropbtn-two-arrow");
  arrTwo.classList.toggle("rotateChev");
}

function arrowThreeTogg() {
  const arrThree = document.getElementById("dropbtn-three-arrow");
  arrThree.classList.toggle("rotateChev");
}

function arrowFourTogg() {
  const arrFour = document.getElementById("dropbtn-four-arrow");
  arrFour.classList.toggle("rotateChev");
}

function arrowUnoTogg() {
  const arrUno = document.getElementById("dropbtn-uno-arrow");
  arrUno.classList.toggle("rotateChev");
}

function arrowDosTogg() {
  const arrDos = document.getElementById("dropbtn-dos-arrow");
  arrDos.classList.toggle("rotateChev");
}
