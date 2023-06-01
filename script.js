var questions = [
    {
      question: "Qual é o maior planeta do sistema solar?",
      answer: "Júpiter",
      discipline: "Ciências",
      hints: ["Possui uma grande mancha vermelha", "Possui anéis"]
    },
    {
      question: "Quem escreveu a obra 'Dom Quixote'?",
      answer: "Miguel de Cervantes",
      discipline: "Literatura",
      hints: ["Autor espanhol", "Obra é considerada um dos maiores clássicos da literatura"]
    },
    {
      question: "Qual é a fórmula química da água?",
      answer: "H2O",
      discipline: "Química",
      hints: ["Composta por dois átomos de hidrogênio e um átomo de oxigênio"]
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      answer: "Deodoro da Fonseca",
      discipline: "História",
      hints: ["Proclamou a República", "Líder militar"]
    },
    {
      question: "Qual é o símbolo químico do ouro?",
      answer: "Au",
      discipline: "Química",
      hints: ["Símbolo vem do latim 'aurum'", "É um metal precioso"]
    },
    {
      question: "Quem pintou a obra 'Mona Lisa'?",
      answer: "Leonardo da Vinci",
      discipline: "Artes",
      hints: ["Artista renascentista italiano", "Obra está exposta no Museu do Louvre"]
    },
    {
      question: "Qual é o maior país da América do Sul?",
      answer: "Brasil",
      discipline: "Geografia",
      hints: ["Possui a maior floresta tropical do mundo", "Capital é Brasília"]
    },
    {
      question: "Quem descobriu a penicilina?",
      answer: "Alexander Fleming",
      discipline: "Ciências",
      hints: ["Cientista escocês", "Descoberta em 1928"]
    },
    {
      question: "Qual é o maior oceano do mundo?",
      answer: "Oceano Pacífico",
      discipline: "Geografia",
      hints: ["Cobre mais de um terço da superfície terrestre", "É conhecido por sua extensão e profundidade"]
    },
    {
      question: "Qual é a capital da França?",
      answer: "Paris",
      discipline: "Geografia",
      hints: ["Conhecida como 'Cidade Luz'", "Abriga a Torre Eiffel"]
    },
    {
      question: "Quem escreveu a peça 'Romeu e Julieta'?",
      answer: "William Shakespeare",
      discipline: "Literatura",
      hints: ["Autor inglês", "Considerado um dos maiores dramaturgos da história"]
    },
    {
      question: "Qual é o menor país do mundo?",
      answer: "Vaticano",
      discipline: "Geografia",
      hints: ["Localizado dentro de Roma", "Sede da Igreja Católica"]
    },
    {
      question: "Quem foi o inventor do telefone?",
      answer: "Alexander Graham Bell",
      discipline: "Ciências",
      hints: ["Cientista e inventor escocês", "Patenteou o telefone em 1876"]
    },
    {
      question: "Qual é o maior deserto do mundo?",
      answer: "Deserto do Saara",
      discipline: "Geografia",
      hints: ["Localizado no norte da África", "É o deserto mais quente do mundo"]
    },
    {
      question: "Quem foi o primeiro homem a pisar na Lua?",
      answer: "Neil Armstrong",
      discipline: "Ciências",
      hints: ["Aconteceu em 1969", "Fazia parte da missão Apollo 11"]
    },
    {
      question: "Quem pintou a obra 'A Noite Estrelada'?",
      answer: "Vincent van Gogh",
      discipline: "Artes",
      hints: ["Pintor holandês", "Obra é um dos ícones do movimento pós-impressionista"]
    },
    {
      question: "Qual é o símbolo químico do carbono?",
      answer: "C",
      discipline: "Química",
      hints: ["Elemento fundamental para a vida", "Presente em diversas substâncias orgânicas"]
    },
    {
      question: "Quem foi o fundador da Microsoft?",
      answer: "Bill Gates",
      discipline: "Informática",
      hints: ["Empresário e filantropo americano", "Um dos homens mais ricos do mundo"]
    },
    {
      question: "Qual é o maior rio do mundo?",
      answer: "Rio Amazonas",
      discipline: "Geografia",
      hints: ["Localizado na América do Sul", "Possui a maior bacia hidrográfica do mundo"]
    },
    {
      question: "Quem escreveu a obra '1984'?",
      answer: "George Orwell",
      discipline: "Literatura",
      hints: ["Autor inglês", "Livro é uma distopia futurista"]
    }
  ];
  
  var timerInterval;
var timeLeft;
var timerBar;

function startTimer() {
  var timerSelect = document.getElementById("timer-select");
  var selectedOption = timerSelect.options[timerSelect.selectedIndex];
  var minutes = parseInt(selectedOption.value);
  
  timeLeft = minutes * 60;
  timerBar = document.getElementById("timer-bar");
  timerBar.style.animationDuration = timeLeft + "s";
  
  updateTimerDisplay();
  
  timerInterval = setInterval(function() {
    timeLeft--;
    updateTimerDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      timerBar.style.width = "0%";
      handleTimeUp();
    }
  }, 1000);
}

function updateTimerDisplay() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;
  var timeDisplay = document.getElementById("time");
  timeDisplay.textContent = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
  
  var progress = (timeLeft / (parseInt(timerBar.style.animationDuration) || 1)) * 100;
  timerBar.style.width = progress + "%";
}

function handleTimeUp() {
  alert("Tempo esgotado!");
}
  
  var currentQuestion = 0;
  var score = 0;
  var timer;
  var timeLeft;
  var hintsUsed = 0;
  
  function startTimer() {
    var minutes = document.getElementById("timer-select").value;
    timeLeft = minutes * 60;
    timer = setInterval(updateTimer, 1000);
    document.body.style.color = 'initial'
  }
  
  function updateTimer() {
    var minutes = Math.floor(timeLeft / 60);
    var seconds = timeLeft % 60;
    document.getElementById("time").innerHTML = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  
    if (timeLeft < 10) {
      document.body.style.color = 'red';
    } else if (timeLeft < 0) {
      document.body.style.color = 'initial';
    }
  
    if (timeLeft === 0) {
      endGame();
    } else {
      timeLeft--;
      updateTimerDisplay();
    }
  }
  
  function updateTimerDisplay() {
    var timerSelect = document.getElementById("timer-select");
    var selectedOption = timerSelect.options[timerSelect.selectedIndex];
    var minutes = parseInt(selectedOption.value);
    var totalTime = minutes * 60;
    var remainingTime = timeLeft;
    var progressBar = document.getElementById("timer-bar");
    var progress = ((totalTime - remainingTime) / totalTime) * 100;
    progressBar.style.width = progress + "%";
  }
          
  function checkAnswer() {
    var userAnswer = document.getElementById("answer").value;
    var feedback = document.getElementById("feedback");
    var correctAnswer = questions[currentQuestion].answer;
  
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      feedback.innerHTML = "Resposta correta!";
      score++;
      document.getElementById("score-value").innerHTML = score;
    } else {
      feedback.innerHTML = "Resposta incorreta! A resposta correta é: " + correctAnswer;
    }
  
    document.getElementById("answer").value = "";
  
    currentQuestion++;
    if (currentQuestion === questions.length) {
      currentQuestion = 0;
    }
  
    hintsUsed = 0;
    updateHints();
  
    document.getElementById("materia").innerText = questions[currentQuestion].discipline;
    document.getElementById("question").innerText = questions[currentQuestion].question;
  }
  
  function skipQuestion() {
    currentQuestion++;
    if (currentQuestion === questions.length) {
      currentQuestion = 0;
    }
  
    hintsUsed = 0;
    updateHints();
  
    document.getElementById("materia").innerText = questions[currentQuestion].discipline;
    document.getElementById("question").innerText = questions[currentQuestion].question;
  }
  
  function endGame() {
    clearInterval(timer);
    document.getElementById("question").innerHTML = "Fim do Jogo!";
    document.getElementById("answer").disabled = true;
  }
  
  function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("open");
  }
  
  function selectDiscipline(discipline) {
    var filteredQuestions = questions;
    if (discipline !== "Geral") {
      filteredQuestions = questions.filter(function(question) {
        return question.discipline === discipline;
      });
    }
  
    currentQuestion = 0;
    questions = filteredQuestions;
  
    document.getElementById("materia").innerText = questions[currentQuestion].discipline;
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("feedback").innerText = "";
    document.getElementById("score-value").innerHTML = score;
    document.getElementById("answer").value = "";
    document.getElementById("answer").disabled = false;
    clearInterval(timer);
    hintsUsed = 0;
    updateHints();
  }
  
  function useHint() {
    var hints = questions[currentQuestion].hints;
    if (hintsUsed < hints.length) {
      var hintsValue = document.getElementById("hints-value");
      hintsValue.innerHTML += hints[hintsUsed] + "<br>";
      hintsUsed++;
    }
  }
    
  function updateHints() {
    var hintsValue = document.getElementById("hints-value");
    hintsValue.innerHTML = "";
  }
  
  window.onload = function() {
    document.getElementById("materia").innerText = questions[currentQuestion].discipline;
    document.getElementById("question").innerHTML = questions[currentQuestion].question;
  
    document.getElementById("start-button").addEventListener("click", function() {
      startTimer();
    });
  
    document.getElementById("answer").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        checkAnswer();
      }
    });
  
    document.getElementById("hints").addEventListener("click", function() {
      useHint();
    });
  };
  