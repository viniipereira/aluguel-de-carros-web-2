class Cliente {
  constructor(id, email, senha) {
    this.id = id;
    this.email = email;
    this.senha = senha;
  }

  static getSenha() {
    return this.senha;
  }

  static getEmail() {
    return this.email;
  }

  static alterarSenha(novaSenha) {
    this.senha = novaSenha;
  }

  static alterarEmail(novoEmail) {
    this.email = novoEmail;
  }
}

export default Cliente;
