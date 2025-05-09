// Sign Up Handler
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("registerName").value.trim();
  var email = document.getElementById("registerEmail").value.trim();
  var password = document.getElementById("registerPassword").value;
  var confirmPassword = document.getElementById("registerConfirm").value;
  var role = document.getElementById("registerRole").value;

  // Validate password match
  if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
  }

  // Validate password length
  if (password.length < 6) {
      alert("Password must be at least 6 characters long!");
      return;
  }

  var user = { name, email, password, role };

  var users = JSON.parse(localStorage.getItem("users")) || [];

  // Check if email already exists
  var emailExists = users.some(user => user.email === email);
  if (emailExists) {
      alert("Email already exists. Please login.");
      return;
  }

  // Add new user
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));

  alert("Registered successfully! Please login.");
  window.location.href = "login.html";
});