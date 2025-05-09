<<<<<<< HEAD
function submitExam() {
    let score = 0;
  
    // حساب عدد الإجابات الصحيحة
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correct) {
        score++;
      }
    }
  
    // حفظ النتيجة في sessionStorage
    sessionStorage.setItem("score", score);
    sessionStorage.setItem("total", questions.length);
  
    // الانتقال لصفحة النتيجة
    window.location.href = "result.html";
  }
=======
function submitExam() {
    let score = 0;
  
    // حساب عدد الإجابات الصحيحة
    for (let i = 0; i < questions.length; i++) {
      if (answers[i] === questions[i].correct) {
        score++;
      }
    }
  
    // حفظ النتيجة في sessionStorage
    sessionStorage.setItem("score", score);
    sessionStorage.setItem("total", questions.length);
  
    // الانتقال لصفحة النتيجة
    window.location.href = "result.html";
  }
>>>>>>> 6764437 (Initial commit)
  