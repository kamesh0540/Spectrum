const quizData = [
  {
    question: "Does Your Child act to young For his / her age   ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Drinks Alchohol without parents approval ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
  {
    question: "Argues a Lot ?",
    a: "Not True ",
    b: "Sometimes True",
    c: "Often True",
    aVal: 0,
    bVal: 1,
    cVal: 2,
  },
];

var withDrawwal = 10.32;
var soMatic = 5;
let anxiEty = 0;
var soCial = 10;
let thoUght = 0;
let attenTion = 0;
let delinQuent = 0;
let aggreSive = 0;
let internAlizing = 0;
let externAlizing = 0;
let toTal = 0;

const socialMeanP = 2.97;
const socialSDP = 2.55;
var socialTTemp = 0;

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_tex = document.getElementById("a_text");
const b_tex = document.getElementById("b_text");
const c_tex = document.getElementById("c_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;

let score = 0;

function loadQuiz() {
  deselectAnsweres();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;

  a_tex.innerText = currentQuizData.a;
  b_tex.innerText = currentQuizData.b;
  c_tex.innerText = currentQuizData.c;
}

loadQuiz();

function deselectAnsweres() {
  answerEls.forEach((answerEls) => (answerEls.checked = false));
}

function getselected() {
  let selectedAnswerEls = document.querySelectorAll(".answer");
  let answer = null;
  selectedAnswerEls.forEach((selectedAnswerEl) => {
    if (selectedAnswerEl.checked) {
      answer = selectedAnswerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getselected();
  window.socialTTemp = 50;// + (10 * ((soCial - socialMeanP) / (socialSDP)));
  if (
    currentQuiz === 41 ||
    currentQuiz === 63 ||
    currentQuiz === 67 ||
    currentQuiz === 73 ||
    currentQuiz === 87 ||
    currentQuiz === 99 ||
    currentQuiz === 101 ||
    currentQuiz === 109
  ) {
    if (answer === "b") {
      withDrawwal += 1;
    } else if (answer === "c") {
      withDrawwal += 2;
    }
  }

  if (
    currentQuiz === 11 ||
    currentQuiz === 13 ||
    currentQuiz === 30 ||
    currentQuiz === 31 ||
    currentQuiz === 32 ||
    currentQuiz === 33 ||
    currentQuiz === 34 ||
    currentQuiz === 44 ||
    currentQuiz === 49 ||
    currentQuiz === 51 ||
    currentQuiz === 69 ||
    currentQuiz === 87 ||
    currentQuiz === 101 ||
    currentQuiz === 110
  ) {
    if (answer === "b") {
      anxiEty += 1;
    } else if (answer === "c") {
      anxiEty += 2;
    }
  }
  if (
    currentQuiz === 0 ||
    currentQuiz === 10 ||
    currentQuiz === 24 ||
    currentQuiz === 37 ||
    currentQuiz === 47 ||
    currentQuiz === 54 ||
    currentQuiz === 60 ||
    currentQuiz === 62
  ) {
    if (answer === "b") {
      soCial += 1;
    } else if (answer === "c") {
      soCial += 2;
    }
  }
  if (
    currentQuiz === 8 ||
    currentQuiz === 39 ||
    currentQuiz === 64 ||
    currentQuiz === 68 ||
    currentQuiz === 78 ||
    currentQuiz === 82 ||
    currentQuiz === 83
  ) {
    if (answer === "b") {
      thoUght += 1;
    } else if (answer === "c") {
      thoUght += 2;
    }
  }
  if (
    currentQuiz === 0 ||
    currentQuiz === 7 ||
    currentQuiz === 9 ||
    currentQuiz === 12 ||
    currentQuiz === 16 ||
    currentQuiz === 40 ||
    currentQuiz === 44 ||
    currentQuiz === 45 ||
    currentQuiz === 59 ||
    currentQuiz === 60 ||
    currentQuiz === 78
  ) {
    if (answer === "b") {
      attenTion += 1;
    } else if (answer === "c") {
      attenTion += 2;
    }
  }
  if (
    currentQuiz === 25 ||
    currentQuiz === 38 ||
    currentQuiz === 42 ||
    currentQuiz === 61 ||
    currentQuiz === 65 ||
    currentQuiz === 70 ||
    currentQuiz === 79 ||
    currentQuiz === 80 ||
    currentQuiz === 88 ||
    currentQuiz === 94 ||
    currentQuiz === 99 ||
    currentQuiz === 103 ||
    currentQuiz === 104
  ) {
    if (answer === "b") {
      delinQuent += 1;
    } else if (answer === "c") {
      delinQuent += 2;
    }
  }

  if (
    currentQuiz === 2 ||
    currentQuiz === 6 ||
    currentQuiz === 15 ||
    currentQuiz === 18 ||
    currentQuiz === 19 ||
    currentQuiz === 20 ||
    currentQuiz === 21 ||
    currentQuiz === 22 ||
    currentQuiz === 26 ||
    currentQuiz === 36 ||
    currentQuiz === 55 ||
    currentQuiz === 66 ||
    currentQuiz === 72 ||
    currentQuiz === 84 ||
    currentQuiz === 85 ||
    currentQuiz === 91 ||
    currentQuiz === 92 ||
    currentQuiz === 93 ||
    currentQuiz === 95 ||
    currentQuiz === 102
  ) {
    if (answer === "b") {
      aggreSive += 1;
    } else if (answer === "c") {
      aggreSive += 2;
    }
  }

  if (
    currentQuiz === 50 ||
    currentQuiz === 53 ||
    currentQuiz === 112 ||
    currentQuiz === 113 ||
    currentQuiz === 114 ||
    currentQuiz === 115 ||
    currentQuiz === 116 ||
    currentQuiz === 117 ||
    currentQuiz === 118 ||
    currentQuiz === 119
  ) {
    if (answer === "b") {
      soCial += 1;
    } else if (answer === "c") {
      soCial += 2;
    }
  }
  if (answer) {
    if (answer === "a") {
      toTal = toTal + 0;
    } else if (answer === "b") {
      toTal = toTal + 1;
    } else {
      toTal = toTal + 2;
    }
    internAlizing = withDrawwal + soMatic + anxiEty;
    externAlizing = delinQuent + aggreSive;
    socialTTemp = 50 ;//+ (10 * ((soCial - socialMeanP) / (socialSDP)));

    //localStorage.setItem('socialTTemp', socialTTemp);
    //console.log(socialTTemp);
    currentQuiz++;
    
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
      <a href="report.html"><button>hi</button></a>`;
    }
  }
});






