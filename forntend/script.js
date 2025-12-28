const API_URL = "http://localhost:5000";

fetch('http://localhost:5000/api/users')
  .then(res => res.json())
  .then(data => {
    console.log(data);

    document.getElementById('studentName').innerText =
      data[0]?.name || 'No User';
  })

  document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  // Username validation
  if (username.length < 4) {
    error.innerText = "Username must be at least 4 characters";
    return;
  }

  // Password validation
  if (password.length < 6) {
    error.innerText = "Password must be at least 6 characters";
    return;
  }

  error.innerText = "";
  alert("Frontend validation passed ✅");

  // Send to backend
  fetch("http://localhost:5000/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
});

