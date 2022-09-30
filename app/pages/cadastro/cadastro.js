import Cliente from "../../model/Cliente.js";

document.getElementById("cadastro").onclick = function () {
  let email = document.getElementsByTagName("form")[0].email.value;
  let senha = document.getElementsByTagName("form")[0].senha.value;
  let senhaRP = document.getElementsByTagName("form")[0].senhaRep.value;
  if ((senha == senhaRP && senha != "") || senhaRP != "") {
    let id = window.localStorage.length + 1;
    let usuario = new Cliente(id, email, senha);
    let user = [usuario.email, usuario.senha];
    window.localStorage.setItem(id, user);

    alert("Registrado com sucesso!!");
  } else {
    document.getElementsByTagName("form")[0].senha.value = "";
    document.getElementsByTagName("form")[0].email.value = "";
    alert("Verifique as senhas!!");
  }
};
