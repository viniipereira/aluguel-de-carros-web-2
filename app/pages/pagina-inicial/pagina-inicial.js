const logado = () => {
  (function bemVindo() {
    alert("Bem Vindo!");
  })();
};

function mudarImagens(url) {
  const img = document.getElementsByTagName("img");
  for (let i = 0; i, img.length; i++) {
    img[i].src = url;
  }
}
function alterarCor(chave) {
  chave
    ? mudarImagens(
        "https://png.pngtree.com/png-clipart/20200309/ourmid/pngtree-black-car-png-image_5330858.png"
      )
    : mudarImagens(
        "https://png.pngtree.com/element_pic/00/16/06/1457601093334c1.jpg"
      );
}

let chave = true;
setInterval(() => {
  chave ? (chave = false) : (chave = true);
  alterarCor(chave);
}, 3000);
