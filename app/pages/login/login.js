const users = [];



// eslint-disable-next-line no-plusplus
for (let i = 1; i <= window.localStorage.length; i++) {
  const sub = window.localStorage.getItem(i).indexOf(',');

  const user = {
    email: window.localStorage.getItem(i).substring(0, sub),
    senha: window.localStorage.getItem(i).substring(sub + 1),
  };

  users.push(user);
}

const verificarUsuario = () => {
  let user = false;
  // eslint-disable-next-line no-restricted-syntax
  for (const key of users) {
    if (
      key.senha === document.getElementsByTagName('form')[0].senha.value
      && key.email === document.getElementsByName('email-login')[0][0].value
    ) {
      user = true;
    }
  }
  return user;
};

(document.getElementById('logar').onsubmit = (e) => {
  e.preventDefault();
  if (verificarUsuario() === true) {
    alert('Logado com sucesso!!');

    window.location.assign(
      'http://127.0.0.1:5500/aluguel-de-carros-web-2/app/pages/pagina-inicial/pagina-inicial.html',
    );
  } else {
    document.getElementsByTagName('form')[0].senha.value = '';
    document.getElementsByTagName('form')[0].email.value = '';
    alert('Email ou senha inválidos!');
  }
});
