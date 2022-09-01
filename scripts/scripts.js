const logado = () => {
  (function bemVindo() {
    alert("Bem Vindo!");
  })();
};

let login = (document.getElementById("login").onclick = function () {
  (function paginaInicial() {
    return (window.location.href = "http://127.0.0.1:5500/pagina-inicial.html");
  })();
});

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
  return "#C78C94";
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
  console.log(document.querySelector(card).style);
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
