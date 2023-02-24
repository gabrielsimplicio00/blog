export class UserService {
  async listarUsuarios() {
    return 'listando usuarios ';
  }

  async buscaUsuario(usuarioId: string) {
    return 'buscando o usuário...';
  }

  async criaUsuario(criaUsuario: any) {
    return 'criando usuario...';
  }

  async editaUsuario(usuarioId: string) {
    return 'editando usuario';
  }

  async deletaUsuario(usuarioId: string) {
    return 'deletando usuário';
  }
}
