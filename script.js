//all quiz
const quizData = [
  {
    question:
      "The largest circular storm in our solar system is on the surface of which of the following planets?",
    a: "Jupiter",
    b: "Venus",
    c: "Uranus",
    d: "Neptune",
    correct: "a",
  },
  {
    question:
      "One of the largest volcanos in our solar system-if not the largest is named Olympus Mons. This volcano is located on?",
    a: "Jupiter's moon Callisto",
    b: "Venus",
    c: "Saturn's moon Titan",
    d: "Mars",
    correct: "d",
  },
  {
    question: "About how many light years across is the Milky Way?",
    a: "1,000",
    b: "10,000",
    c: "100,000",
    d: "1,000,000",
    correct: "d",
  },
  {
    question:
      "Who was the first man to classify stars according to their brightness?",
    a: "Aristarchus",
    b: "Pythagorus",
    c: "Copernicus",
    d: "Hipparchus",
    correct: "d",
  },
  {
    question: "Which of the following is true for ORION?",
    a: "the brightest star in the sky",
    b: "a constellation",
    c: "the name given to a NASA spacecraft",
    d: "an asteroid",
    correct: "b",
  },
  {
    question:
      "In which spectral region is it possible for astronomers to observe through clouds?",
    a: "visual",
    b: "radio",
    c: "ultraviolet",
    d: "x-ray",
    correct: "b",
  },
  {
    question: "The Magellanic Clouds are?",
    a: "irregular galaxies",
    b: "spiral galaxies",
    c: "elliptical galaxies",
    d: "large clouds of gas and dust",
    correct: "a",
  },
  {
    question:
      "The study of the origin and evolution of the universe is known as?",
    a: "tomography",
    b: "cystoscopy",
    c: "cryology",
    d: "cosmology",
    correct: "d",
  },
  {
    question: "According to Kepler's Laws, all orbits of the planets are?",
    a: "ellipses",
    b: "parabolas",
    c: "hyperbolas",
    d: "square",
    correct: "a",
  },
  {
    question:
      "Which type of star is maintained by the pressure of an electron gas?",
    a: "Main Sequence Star",
    b: "White Dwarf",
    c: "Neutron Star",
    d: "Black Hole",
    correct: "b",
  },
];

//get reference to ui element for access alter
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionE = document.getElementById("question");
const aE = document.getElementById("a_text");
const bE = document.getElementById("b_text");
const cE = document.getElementById("c_text");
const dE = document.getElementById("d_text");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const submitE = document.getElementById("submit");

let currentQuestion = 0; //track current question being shown
let score = 0; //track score for each correct answer selected

//hide result area and initiate the quiz
resultContainer.style.display = "none";
loadQuiz();

function getSelectedValueAndEvaluate() {
  let optionSelected = "";

  if (a.checked) optionSelected = "a";
  if (b.checked) optionSelected = "b";
  if (c.checked) optionSelected = "c";
  if (d.checked) optionSelected = "d";

  //if answer provided is correct, increase score by 1
  if (quizData[currentQuestion].correct == optionSelected) {
    score++;
  }
}

function unCheckAllOptions() {
  a.checked = false;
  b.checked = false;
  c.checked = false;
  d.checked = false;
}

function checkSelectedStatus() {
  if (a.checked || b.checked || c.checked || d.checked) {
    return true;
  } else {
    return false;
  }
}

function loadQuiz() {
  //uncheck all options when next question is loaded
  unCheckAllOptions();

  let currentQuestionData = quizData[currentQuestion];

  questionE.innerText = currentQuestionData.question;
  aE.innerText = currentQuestionData.a;
  bE.innerText = currentQuestionData.b;
  cE.innerText = currentQuestionData.c;
  dE.innerText = currentQuestionData.d;
}

submitE.addEventListener("click", () => {
  getSelectedValueAndEvaluate();
  //Check if any option is selected
  const checkIfOptionSelected = checkSelectedStatus();

  if (!checkIfOptionSelected) {
    alert("You need to select at least one option !");
  } else {
    // compare selected to correct answer and evaluate score
    if (currentQuestion < quizData.length - 1) {
      currentQuestion++;
      loadQuiz();
    } else {
      //hide all quiz elements to make space for result information
      quizContainer.style.display = "none";
      resultContainer.style.display = "inline-block";
      resultContainer.innerHTML = `<h2>Your score ${score} </h2>
      <br/>
      <button onclick="location.reload()">Reload</button>`;
    }

    if (currentQuestion == quizData.length - 1)
      submitE.innerText = "Finish Quiz";
  }
});
