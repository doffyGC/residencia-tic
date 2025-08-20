export default class User {
  id: number;
  name: string;

  constructor(body: any) {
    // TODO - arrumar a lógica do ID
    this.id = body.id;
    this.name = body.name;
  }

  async checkUserById(): Promise<any> {
    // TODO - implementar a lógica de verificação do usuário
    return { id: this.id, name: this.name, message: "Usuário encontrado" }; 
    
  }
}
