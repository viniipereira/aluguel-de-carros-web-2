const relogio = () => {
  const hoje = new Date();
  const horas = hoje.getHours();
  const minutos = hoje.getMinutes();
  const segundos = hoje.getSeconds();

  let tempo = (horas < 10 ? '0' : '') + horas;
  tempo = tempo + (minutos < 10 ? ':0' : ':') + minutos;
  tempo = tempo + (segundos < 10 ? ':0' : ':') + segundos;

  document.forms[0].visor.value = tempo;

  // eslint-disable-next-line no-implied-eval
  window.setTimeout('relogio()', 1000);
};

function mouseSobreLogin(obj, color) {
  obj.style.backgroundColor = color;
}

function mouseForaLogin(obj) {
  obj.style.backgroundColor = '#FFFFFF';
}

const color = () => '#FF00FF';

const mudarInput = function (obj) {
  obj.style.backgroundColor = color();
};

function voltarInput(obj) {
  obj.style.backgroundColor = 'transparent';
}

function mudarCard(card) {
  document.querySelector(card).style.backgroundColor = '#f014c0';
  document.querySelector(card).style.transition = '2s';
  document.querySelector(card).style.scale = '1.1';
}

function voltarCard(card) {
  document.querySelector(card).style.backgroundColor = '#FFFFFF';
  document.querySelector(card).style.scale = '1';
}

const listaDeCards = document.querySelectorAll('.card');

listaDeCards.forEach((card) => {
  const sobreOCard = card.classList[1];
  const idCard = `#${sobreOCard}`;

  card.onmouseover = function () {
    mudarCard(idCard);
  };

  card.onmouseout = function () {
    voltarCard(idCard);
  };
});

// for (let contador = 0; contador < listaDeCards.length; contador++) {
//   const card = listaDeCards[contador];
//   const sobreOCard = card.classList[1];
//   const idCard = `#${sobreOCard}`;

//   card.onmouseover = function () {
//     mudarCard(idCard);
//   };

//   card.onmouseout = function () {
//     voltarCard(idCard);
//   };
// }
