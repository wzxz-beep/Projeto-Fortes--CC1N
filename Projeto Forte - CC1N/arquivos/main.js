document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value.trim();

  if (email === "admin@ecoato.com.br" && senha === "123456") {
    window.location.href = "admin.html";
  } else if (email === "cooperativas@ecoato.com.br" && senha === "123456") {
    window.location.href = "cooperativa.html";
  } else {
    alert("Usuário ou senha inválidos.");
  }
});