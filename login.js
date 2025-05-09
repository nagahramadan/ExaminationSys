// Sign In Handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("loginEmail").value.trim();
  var password = document.getElementById("loginPassword").value;
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var found = users.find(
      (user) => user.email === email && user.password === password
  );

  if (found) {
      alert("Welcome " + found.name + "!");
      
      // Store current user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(found));

      if (found.role === "student") {
          window.location.href = "exam.html";
      } else if (found.role === "admin") {
          window.location.href = "admin-dashboard.html";
      }
  } else {
      alert("Invalid email or password. Please try again or register.");
  }
});
// Sign In Handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var email = document.getElementById("loginEmail").value.trim();
  var password = document.getElementById("loginPassword").value;
  var users = JSON.parse(localStorage.getItem("users")) || [];

  var found = users.find(
      (user) => user.email === email && user.password === password
  );

  if (found) {
      alert("Welcome " + found.name + "!");
      
      // Store current user in localStorage
      localStorage.setItem("currentUser", JSON.stringify(found));

      if (found.role === "student") {
          window.location.href = "exam.html";
      } else if (found.role === "admin") {
          window.location.href = "admin-dashboard.html";
      }
  } else {
      alert("Invalid email or password. Please try again or register.");
  }

});