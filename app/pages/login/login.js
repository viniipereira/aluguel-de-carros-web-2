let senhas = [];
let users = [];

for (let i = 1; i <= window.localStorage.length; i++) {
  let sub = window.localStorage.getItem(i).indexOf(",");
  users.push({
    email: window.localStorage.getItem(i).substring(0, sub),
    senha: window.localStorage.getItem(i).substring(sub + 1),
  });
  
}

const verificarUsuario = () => {
  let user = false;
  for (const key of users) {
    if (
      key.senha == document.getElementsByTagName("form")[0].senha.value &&
      key.email == document.getElementsByName("email-login")[0][0].value
    ) {
     
      user = true;
    }
  }
  return user;
};

let login = (document.getElementById("login").onclick = function () {
  if (verificarUsuario() == true) {
    alert("Logado com sucesso!!");
    window.location.assign(
      "http://127.0.0.1:5500/app/pages/pagina-inicial/pagina-inicial.html"
    );
  } else {
    document.getElementsByTagName("form")[0].senha.value = "";
    document.getElementsByTagName("form")[0].email.value = "";
    alert("Email ou senha inválidos!");
  }
});
