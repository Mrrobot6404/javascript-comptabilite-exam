
let questions = [
  {
    id: 1,
    question: "Le bilan comptable sert à :",
    answer: "analyser la santé financière de l'entreprise",
    options: [
      "calculer le solde bancaire prévisionnel",
      "calculer la rentabilité des activités sur une période",
      "analyser la santé financière de l'entreprise"
    ]
  },
  {
    id: 2,
    question: " Le bilan est composé :",
    answer: "d'un actif-passif",
    options: [
      "de charges- produits",
      "d'un actif-passif",
      "de dépenses-recettes"
    ]
  },
  {
    id: 3,
    question: "Le bilan comptable concerne :",
    answer: "l'état des financement à un moment donné",
    options: [
      "les activités sur une période",
      "l'état des financement à un moment donné",
      "uniquement les investissements"
    ]
  },
  {
    id: 4,
    question: "L'actif du bilan comporte notamment : ",
    answer: "les immobilisations",
    options: [
      "les immobilisations",
      "les emprunts",
      "le capital propre"
    ]
  },
  {
    id: 5,
    question: "On trouve dans les immobilisations :",
    answer: "le matériel en propriété",
    options: [
      "des créances",
      "des terres en fermage",
      "le matériel en propriété"
    ]
  },
  {
    id: 6,
    question: " Les immobilisations sont évaluées au bilan à :",
    answer: " l'amortissement",
    options: [
      "leur valeur d'origine",
      "leur valeur résiduelle",
      "l'amortissement"
    ]
  },
  {
    id: 7,
    question: "L'actif circulant comprend :",
    answer: "les stocks",
    options: [
      "les stocks",
      "les parts sociales",
      "les immobilisations"
    ]
  },
  {
    id: 8,
    question: "Le compte bancaire apparaît, s'il est à découvert : ",
    answer: "à l'actif",
    options: [
      "à l'actif",
      "au passif",
      "aux immobilisations"
    ]
  },
  {
    id: 9,
    question: "Le compte de résultat est composé :",
    answer: "de charges- produits",
    options: [
      "d'un actif-passif",
      "de charges- produits",
      "de dépenses-recettes"
    ]
  },
  {
    id: 10,
    question: "Les comptes du plan comptable appartiennent  aux classes suivantes :",
    answer: "1,2,3,4,5 au bilan et  6,7 au compte de résultat",
    options: [
      "1,2,3,4,5 au bilan et  6,7,8,9,10 au compte de résultat",
      "1 au bilan et 2 au compte de résultat",
      "1,2,3,4,5 au bilan et  6,7 au compte de résultat"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 2;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
