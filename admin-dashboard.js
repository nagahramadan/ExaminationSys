<<<<<<< HEAD
questions = [];
var counter = 1;
storedQuestions = localStorage.getItem("questions"); //takes the questions array from local storage returns it as string or null
if (storedQuestions) {
  questions = JSON.parse(storedQuestions); // convert string from local storage to javascript object

  if (questions.length > 0) {
    counter = questions[questions.length - 1].id + 1; //current id
  }
}

function renderQuestions() {
  var tbody = document.getElementById("questionTableBody");
  tbody.innerHTML = ""; // Clear old content

  for (let i = 0; i < questions.length; i++) {
    var q = questions[i];
    var row = document.createElement("tr");

    row.innerHTML =
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      q.question +
      "</td>" +
      "<td>" +
      q.choices.join(", ") +
      "</td>" +
      "<td>" +
      q.choices[q.correct] +
      "</td>" +
      "<td>" +
      "<button onclick='editQuestion(" +
      q.id +
      ")'>Edit</button> " +
      "<button onclick='deleteQuestion(" +
      q.id +
      ")'>Delete</button>" +
      "</td>";

    tbody.appendChild(row);
  }
}

function editQuestion(id) {
  //when clicking edit and displaying edit modal
  var q = null;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      q = questions[i];
      break;
    }
  }
  if (!q) return;

  document.getElementById("editId").value = q.id;
  document.getElementById("editTitle").value = q.question;
  document.getElementById("editChoice1").value = q.choices[0];
  document.getElementById("editChoice2").value = q.choices[1];
  document.getElementById("editChoice3").value = q.choices[2];
  document.getElementById("editChoice4").value = q.choices[3];
  document.getElementById("editAnswer").value = q.correct;

  document.getElementById("editModal").style.display = "block";
}

function saveEditedQuestion() {
  var id = parseInt(document.getElementById("editId").value);

  var title = document.getElementById("editTitle").value;
  var choice1 = document.getElementById("editChoice1").value;
  var choice2 = document.getElementById("editChoice2").value;
  var choice3 = document.getElementById("editChoice3").value;
  var choice4 = document.getElementById("editChoice4").value;
  var answer = parseInt(document.getElementById("editAnswer").value);

  var index = -1;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    questions[index].question = title;
    questions[index].choices = [choice1, choice2, choice3, choice4];
    questions[index].correct = answer;

    localStorage.setItem("questions", JSON.stringify(questions)); //update local storage
    renderQuestions(); // Rerender
    closeEditModal(); // Hide modal
  } else {
    console.error("No question found with id", id);
  }
}

function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}

function openAddQuestionModal() {
  document.getElementById("addQuestion").style.display = "flex";
}

function closeAddQuestionModal() {
  document.getElementById("addQuestion").style.display = "none";
}

function addNewQuestion() {
  var question = document.getElementById("questionText").value.trim();
  var choicesInput = document.getElementById("choicesText").value.trim();
  var correct = parseInt(document.getElementById("correctIndex").value);

  if (!question || !choicesInput || isNaN(correct)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  var tempChoices = choicesInput.split(",");
  var choices = [];
  for (var i = 0; i < tempChoices.length; i++) {
    choices.push(tempChoices[i].trim());
  }

  var newQuestion = {
    id: counter++, // unique ID
    question: question,
    choices: choices,
    correct: correct,
  };

  questions.push(newQuestion);
  localStorage.setItem("questions", JSON.stringify(questions)); //saves new questions array
  renderQuestions();
  closeAddQuestionModal();
}

function deleteQuestion(id) {
  var confirmDelete = confirm("Are you sure you want to delete this question?");
  if (!confirmDelete) return; // If user cancels, do nothing

  var index = -1;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    questions.splice(index, 1); //remove 1 index at this position
    localStorage.setItem("questions", JSON.stringify(questions));
    renderQuestions();
  } else {
    console.error("No question found with id", id);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderQuestions();
  
  document.getElementById("addQuestionBtn").onclick = openAddQuestionModal;
  document.getElementById("closeModalBtn").onclick = closeAddQuestionModal;
  document.getElementById("saveQuestionBtn").onclick = addNewQuestion;
  document.getElementById("editSaveBtn").onclick = saveEditedQuestion; 
});
=======
questions = [];
var counter = 1;
storedQuestions = localStorage.getItem("questions"); //takes the questions array from local storage returns it as string or null
if (storedQuestions) {
  questions = JSON.parse(storedQuestions); // convert string from local storage to javascript object

  if (questions.length > 0) {
    counter = questions[questions.length - 1].id + 1; //current id
  }
}

function renderQuestions() {
  var tbody = document.getElementById("questionTableBody");
  tbody.innerHTML = ""; // Clear old content

  for (let i = 0; i < questions.length; i++) {
    var q = questions[i];
    var row = document.createElement("tr");

    row.innerHTML =
      "<td>" +
      (i + 1) +
      "</td>" +
      "<td>" +
      q.question +
      "</td>" +
      "<td>" +
      q.choices.join(", ") +
      "</td>" +
      "<td>" +
      q.choices[q.correct] +
      "</td>" +
      "<td>" +
      "<button onclick='editQuestion(" +
      q.id +
      ")'>Edit</button> " +
      "<button onclick='deleteQuestion(" +
      q.id +
      ")'>Delete</button>" +
      "</td>";

    tbody.appendChild(row);
  }
}

function editQuestion(id) {
  //when clicking edit and displaying edit modal
  var q = null;
  for (let i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      q = questions[i];
      break;
    }
  }
  if (!q) return;

  document.getElementById("editId").value = q.id;
  document.getElementById("editTitle").value = q.question;
  document.getElementById("editChoice1").value = q.choices[0];
  document.getElementById("editChoice2").value = q.choices[1];
  document.getElementById("editChoice3").value = q.choices[2];
  document.getElementById("editChoice4").value = q.choices[3];
  document.getElementById("editAnswer").value = q.correct;

  document.getElementById("editModal").style.display = "block";
}

function saveEditedQuestion() {
  var id = parseInt(document.getElementById("editId").value);

  var title = document.getElementById("editTitle").value;
  var choice1 = document.getElementById("editChoice1").value;
  var choice2 = document.getElementById("editChoice2").value;
  var choice3 = document.getElementById("editChoice3").value;
  var choice4 = document.getElementById("editChoice4").value;
  var answer = parseInt(document.getElementById("editAnswer").value);

  var index = -1;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      index = i;
      break;
    }
  }

  if (index !== -1) {
    questions[index].question = title;
    questions[index].choices = [choice1, choice2, choice3, choice4];
    questions[index].correct = answer;

    localStorage.setItem("questions", JSON.stringify(questions)); //update local storage
    renderQuestions(); // Rerender
    closeEditModal(); // Hide modal
  } else {
    console.error("No question found with id", id);
  }
}

function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}

function openAddQuestionModal() {
  document.getElementById("addQuestion").style.display = "flex";
}

function closeAddQuestionModal() {
  document.getElementById("addQuestion").style.display = "none";
}

function addNewQuestion() {
  var question = document.getElementById("questionText").value.trim();
  var choicesInput = document.getElementById("choicesText").value.trim();
  var correct = parseInt(document.getElementById("correctIndex").value);

  if (!question || !choicesInput || isNaN(correct)) {
    alert("Please fill in all fields correctly.");
    return;
  }

  var tempChoices = choicesInput.split(",");
  var choices = [];
  for (var i = 0; i < tempChoices.length; i++) {
    choices.push(tempChoices[i].trim());
  }

  var newQuestion = {
    id: counter++, // unique ID
    question: question,
    choices: choices,
    correct: correct,
  };

  questions.push(newQuestion);
  localStorage.setItem("questions", JSON.stringify(questions)); //saves new questions array
  renderQuestions();
  closeAddQuestionModal();
}

function deleteQuestion(id) {
  var confirmDelete = confirm("Are you sure you want to delete this question?");
  if (!confirmDelete) return; // If user cancels, do nothing

  var index = -1;
  for (var i = 0; i < questions.length; i++) {
    if (questions[i].id == id) {
      index = i;
      break;
    }
  }
  if (index !== -1) {
    questions.splice(index, 1); //remove 1 index at this position
    localStorage.setItem("questions", JSON.stringify(questions));
    renderQuestions();
  } else {
    console.error("No question found with id", id);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  renderQuestions();
  
  document.getElementById("addQuestionBtn").onclick = openAddQuestionModal;
  document.getElementById("closeModalBtn").onclick = closeAddQuestionModal;
  document.getElementById("saveQuestionBtn").onclick = addNewQuestion;
  document.getElementById("editSaveBtn").onclick = saveEditedQuestion; 
});
>>>>>>> 6764437 (Initial commit)
