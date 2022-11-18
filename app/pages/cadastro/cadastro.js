import Cliente from '../../model/Cliente';

document.getElementById('cadastro').onclick = function () {
  const email = document.getElementsByTagName('form')[0].email.value;
  const senha = document.getElementsByTagName('form')[0].senha.value;
  const senhaRP = document.getElementsByTagName('form')[0].senhaRep.value;
  if ((senha === senhaRP && senha !== '') || senhaRP !== '') {
    const id = window.localStorage.length + 1;
    const usuario = new Cliente(id, email, senha);
    const user = [usuario.email, usuario.senha];
    window.localStorage.setItem(id, user);

    alert('Registrado com sucesso!!');
  } else {
    document.getElementsByTagName('form')[0].senha.value = '';
    document.getElementsByTagName('form')[0].email.value = '';
    alert('Verifique as senhas!!');
  }
};
