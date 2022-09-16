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

function mouseSobreLogin(obj, color) {
  obj.style.backgroundColor = color;
}

function mouseForaLogin(obj) {
  obj.style.backgroundColor = "#FFFFFF";
}

let color = () => {
  return "	#FF00FF";
};

let mudarInput = function (obj) {
  obj.style.backgroundColor = color();
};

function voltarInput(obj) {
  obj.style.backgroundColor = "transparent";
}

function mudarCard(card) {
  document.querySelector(card).style.backgroundColor = "#f014c0";
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
