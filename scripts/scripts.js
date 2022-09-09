const logado = () => {
  (function bemVindo() {
    alert("Bem Vindo!");
  })();
};

let senhas = []
let users = []


for (let i = 1; i <= window.localStorage.length; i++) {
  let sub = window.localStorage.getItem(i).indexOf(',')
  users.push({email:window.localStorage.getItem(i).substring(0,sub),senha:window.localStorage.getItem(i).substring(sub+1,)})
  
}


const verificarUsuario = () => {
    
  let user = false
for (const key of users) {
  if(key.senha == document.getElementsByTagName("form")[0].senha.value && key.email == document.getElementsByName("email-login")[0][0].value){
    user =  true
    }
}
return user

};

if (document.getElementById("login") == null) {
} else {
  let login = (document.getElementById("login").onclick = function () {
    if (verificarUsuario() == true) {
      console.log("ta aqui")
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


function  cadastro() {
class Cliente {
  constructor(id,email,senha) {
    this.id= id
    this.email=email
    this.senha=senha
  }

  alterarSenha(novaSenha) {
    this.senha = novaSenha;
  }

  alterarEmail(novoEmail) {
    this.email = novoEmail
  }
}

let email = document.getElementsByTagName("form")[0].email.value;
let senha = document.getElementsByTagName("form")[0].senha.value;
let senhaRP = document.getElementsByTagName("form")[0].senhaRep.value;

if(senha == senhaRP){
  let id = window.localStorage.length + 1;
    let usuario = new Cliente(id,email,senha)
    let user = [usuario.email ,usuario.senha ]
    window.localStorage.setItem(id,user)
  
}else {
  console.log("deu erro")
}
}

(document.getElementById("cadastro").onclick = function () {
    cadastro();
    document.getElementsByTagName("form")[0].senha.value = "";
    document.getElementsByTagName("form")[0].email.value = "";
  
});

