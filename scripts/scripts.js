function logado() {
  (function bemVindo() {
    window.location.assign("http://127.0.0.1:5500/pagina-inicial.html");
  })();
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

let mudarInput = function (obj) {
  obj.style.backgroundColor = "#C78C94";
};

function voltarInput(obj) {
  obj.style.backgroundColor = "transparent";
}

function mouseSobreLogin(obj, color) {
  obj.style.backgroundColor = color;
}

let color = function () {
  return "#C78C94";
};

function mouseForaLogin(obj) {
  obj.style.backgroundColor = "#FFFFFF";
}
