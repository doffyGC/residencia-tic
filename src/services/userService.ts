import User from '../models/userModel';

export async function fetchUser(queryParams: any): Promise<any> {
  if (!queryParams.id) {
    throw new Error('Parâmetro obrigatório: id');
  }

  const user = new User(queryParams);
  return await user.checkUserById();
}

export async function createUserService(userData: any): Promise<any> {
  if (!userData.name || !userData.email || !userData.cpf || !userData.password) {
    throw new Error('Parâmetros obrigatórios: nome, email, CPF e Senha');
  }

  // TODO - Implementar a lógica de criação de usuário
  // return await checkUserById(userData);
}