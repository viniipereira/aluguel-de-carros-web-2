let relogio = () => {
  let hoje = new Date();
  let horas = hoje.getHours();
  let minutos = hoje.getMinutes();
  let segundos = hoje.getSeconds();

  let tempo = (horas < 10 ? "0" : "") + horas;
  tempo = tempo + (minutos < 10 ? ":0" : ":") + minutos;
  tempo = tempo + (segundos < 10 ? ":0" : ":") + segundos;

  document.forms[0].visor.value = tempo;
};

export { relogio };
