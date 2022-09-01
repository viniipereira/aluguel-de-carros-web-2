const logado = () => {
  (function bemVindo() {
    alert("Bem Vindo!");
  })();
};

const usuario = {
  nome: "Vinicius",
  senha: "1234",
  email: "vini@gmail.com",
};

window.localStorage.setItem(1, usuario.nome);
window.localStorage.setItem(2, usuario.senha);
window.localStorage.setItem(3, usuario.email);

const verificarUsuario = () => {
  if (
    document.getElementsByTagName("form")[0].senha.value ==
      window.localStorage.getItem(2) &&
    document.getElementsByName("email-login")[0][0].value ==
      window.localStorage.getItem(3)
  ) {
    return true;
  } else {
    return false;
  }
};

if (document.getElementById("login") == null) {
} else {
  let login = (document.getElementById("login").onclick = function () {
    if (verificarUsuario()) {
      alert("Logado com sucesso");
      return window.location.assign(
        "http://127.0.0.1:5500/pagina-inicial.html"
      );
    } else {
      document.getElementsByTagName("form")[0].senha.value = "";
      document.getElementsByTagName("form")[0].email.value = "";
      alert("Email ou senha inválidos!");
    }
  });
}

function duvida() {
  prompt("Envie a sua duvida!");
  let confirmar = confirm("Confirmar envio ?");
  if (confirmar) {
    return alert("Duvida enviada com sucesso!!");
  } else {
    return alert("Envio cancelado com sucesso!!");
  }
}

let relogio = () => {
  let hoje = new Date();
  let horas = hoje.getHours();
  let minutos = hoje.getMinutes();
  let segundos = hoje.getSeconds();

  let tempo = (horas < 10 ? "0" : "") + horas;
  tempo = tempo + (minutos < 10 ? ":0" : ":") + minutos;
  tempo = tempo + (segundos < 10 ? ":0" : ":") + segundos;

  document.forms[0].visor.value = tempo;

  window.setTimeout("relogio()", 1000);
};
let color = () => {
  return "	#FF00FF";
};

let mudarInput = function (obj) {
  obj.style.backgroundColor = color();
};

function voltarInput(obj) {
  obj.style.backgroundColor = "transparent";
}

function mouseSobreLogin(obj, color) {
  obj.style.backgroundColor = color;
}

function mouseForaLogin(obj) {
  obj.style.backgroundColor = "#FFFFFF";
}

function mudarCard(card) {
  document.querySelector(card).style.backgroundColor = "#C76C81";
  document.querySelector(card).style.transition = "2s";
  document.querySelector(card).style.scale = "1.1";
}

function voltarCard(card) {
  document.querySelector(card).style.backgroundColor = "#FFFFFF";
  document.querySelector(card).style.scale = "1";
}

const listaDeCards = document.querySelectorAll(".card");

for (let contador = 0; contador < listaDeCards.length; contador++) {
  const card = listaDeCards[contador];
  const sobreOCard = card.classList[1];
  const idCard = `#${sobreOCard}`;

  card.onmouseover = function () {
    mudarCard(idCard);
  };

  card.onmouseout = function () {
    voltarCard(idCard);
  };
}
