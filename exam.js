// var questions = [
//   // each array element is a question object carrying 3 values
//   {
//     question:
//       "What is the purpose of the meta tag with charset=UTF-8 in an HTML document?", //string
//     choices: [
//       "It sets the document's font to UTF-8",
//       " It specifies the character encoding for the document.",
//       "It defines the language of the content",
//       "It adds metadata to the HTML document",
//     ], //string[]
//     correct: 1, //number
//   },
//   {
//     question:
//       "Which CSS property is used to control the space between the content of an element and its border?",
//     choices: ["margin", "border-spacing", "padding", "line-height"],
//     correct: 2,
//   },
//   {
//     question: "What is the default value of the position property in CSS?",
//     choices: ["static", "absolute", "relative", "fixed"],
//     correct: 0,
//   },
//   {
//     question:
//       "Which of the following CSS properties can be used to center a block element horizontally within its parent container?",
//     choices: [
//       "text-align: center;",
//       "align-items: center;",
//       "margin: 0 auto;",
//       "justify-content: center;",
//     ],
//     correct: 2,
//   },
//   {
//     question:
//       "What will the following JavaScript code log to the console? <br> console.log(1 + '2' - 1);",
//     choices: ["12", "NaN", "11", "2"],
//     correct: 3,
//   },
//   {
//     question: "What will the following code return? <br> typeof NaN;",
//     choices: ["undefined", "number", "object", "NaN"],
//     correct: 1,
//   },
//   {
//     //use &lt; &gt; to avoid applying it in webpage
//     question:
//       "What is the difference between &lt;strong&gt; and &lt;b&gt; in HTML5?",
//     choices: [
//       "&lt;strong&gt; has semantic meaning (importance); &lt;b&gt; is just stylistic",
//       "&lt;b&gt; is for bold; &lt;strong&gt; is for italic",
//       "&lt;b&gt; emphasizes importance; &lt;strong&gt; is just bold text",
//       "There is no difference",
//     ],
//     correct: 0,
//   },
//   {
//     question:
//       "What will happen if a form element has both novalidate attribute and required on an input field?",
//     choices: [
//       "Validation will occur as usual",
//       "required will override novalidate",
//       "The form will not submit at all",
//       "The form will be submitted without client-side validation",
//     ],
//     correct: 3,
//   },
//   {
//     question: "What will be logged? <br> console.log(typeof null);",
//     choices: ["object", "null", "undefined", "NaN"],
//     correct: 0,
//   },
//   {
//     question:
//       "What is the result of this code? <br> var x = NaN; <br> console.log(x === x); ",
//     choices: ["true", "false", "error", "NaN"],
//     correct: 1,
//   },
// ];
// questions has 5 prop [question(string) , choices(string array)  , correct(number) , marked(boolean) , id(number)]
questions = [];
storedQuestions = localStorage.getItem("questions"); //takes the questions array from local storage returns it as string or null
if (storedQuestions) {
  questions = JSON.parse(storedQuestions); // convert string from local storage to javascript object
}
var currentIndex = 0; //global variable carrying index of the current question shown in the webpage
var answers = []; // array carrying answers of student in each question
//   console.log(answers[0]); -> undefined
function showQuestion(index) {
  var currQ = questions[index];

  var qNumber = "Question " + (index + 1) + " of " + questions.length; // Counter to show the current question number
  var html = "<h3>" + qNumber + "</h3>";
  html += "<h3>" + currQ.question + "</h3>";
  for (let i = 0; i < currQ.choices.length; i++) {
    html +=
      "<label><input type='radio' name='answer' value='" +
      i +
      "'> " +
      currQ.choices[i] +
      "</label><br>";
  }
  //show question with choices in webpage
  document.getElementById("question-box").innerHTML = html;

  // if answer already checked show that is is checked
  if (answers[index] != undefined) {
    document.querySelector(
      'input[value="' + answers[index] + '"]'
    ).checked = true;
  }

  // Add event listener for radio button selection
  var radioButtons = document.querySelectorAll('input[name="answer"]');
  //call back function
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("change", function () {
      saveAnswer();
      checkIfAllAnswered();
    });
  });

  //hide next button in the last question
  document.getElementById("next-btn").style.display =
    currentIndex == questions.length - 1 ? "none" : "inline";
  //hide prev button in the first question
  document.getElementById("prev-btn").style.display =
    currentIndex == 0 ? "none" : "inline";
}

function saveAnswer() {
  //selected is HTMLInputElement , if no answer is selcted selected value will be null
  var selected = document.querySelector('input[name="answer"]:checked');
  if (selected) answers[currentIndex] = parseInt(selected.value);
}

function checkIfAllAnswered() {
  var allAnswered = true;
  for (var i = 0; i < questions.length; i++) {
    if (answers[i] == undefined) {
      allAnswered = false;
      break;
    }
  }
  document.getElementById("submit-btn").disabled = !allAnswered;
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    showQuestion(currentIndex);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    showQuestion(currentIndex);
  }
}

// Show the first question when page loads
window.onload = showQuestion(currentIndex);

//Nada *_*
function markQuestion(){
  if(!(questions[currentIndex].marked)){
    questions[currentIndex].marked = true;
    //عملت div وحطيتها في الصفحة
  var markindex = currentIndex;
  var markDiv = document.createElement("div");
  document.body.append(markDiv);
  
  //ضفت للديف كلاس عشان احطله ستايل
  markDiv.classList.add("divmark");


  var quesnum = document.createElement("h6");

  // عملت  براجراف وحطيت فيه السؤال وحطيته جوا الديف ورقم السؤال كمان
  var p= document.createElement("p");
  p.style.fontSize = "13px";
  p.style.margin = 0;
  var qesnum = document.createElement("p");
  quesnum.style.fontSize = "16px";
  quesnum.style.margin = 0;
  quesnum.textContent = "Qestion " + (currentIndex + 1);
  var markedQues = questions[currentIndex].question ;
  p.textContent = markedQues;
  markDiv.append(quesnum);
  markDiv.append(p);

  // عملت زر للحذف
  var delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  markDiv.append(delbtn);
  delbtn.style.marginTop = "5px";
  delbtn.addEventListener("click",function(){
    markDiv.remove();
  })

  //زر الذهاب للسؤال
  var gobtn = document.createElement("button");
  gobtn.textContent = "Go";
  markDiv.append(gobtn);
  gobtn.style.marginLeft = "5px";

  gobtn.addEventListener("click",function(){
    currentIndex = markindex;
    showQuestion(markindex);

  })
  }
  
}



//هنا بحدد عدد الثواني و مسكت البراجراف اللي فيه الوقت جوا التايمر ايليمت
var timerElement = document.getElementById("timer");
var totalseconds = 120

    setInterval(function()  {
      //بحسب الثواني والدقايق في كل ثانية
      totalseconds--;
      var mints = Math.floor(totalseconds / 60);
      var seconds = totalseconds %  60;
      //شرط قفل الصفحة
      if(mints == 0 && seconds== 0){
      window.close();
    }
    // عرض الوقت و تنسيق شكله
      var formattedTime = String(mints).padStart(2, '0') + ":" + String(seconds).padStart(2, '0');
      timerElement.textContent ="Time " + formattedTime ;
      
    }, 1000);

    function selectAnswer(selected) {
      document.querySelectorAll('.answer-option').forEach(option => {
        option.classList.remove('selected');
      });
      selected.classList.add('selected');
    }
    
    function submitExam() {
      let score = 0;
    
      // حساب عدد الإجابات الصحيحة
      for (let i = 0; i < questions.length; i++) {
        if (answers[i] === questions[i].correct) {
          score++;
        }
      }
    
      let total = questions.length;
      let percentage = Math.round((score / total) * 100);
    
      let resultMessage = `لقد حصلت على درجة ${percentage} من 100.\n`;
    
      if (percentage >= 60) {
        resultMessage += "✅Gongrats";
      } else {
        resultMessage += "❌Faild";
      }
    
      alert(resultMessage);
    }
    