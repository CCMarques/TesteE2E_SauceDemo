function login(username, password) {
    if (username === 'standard_user' && password === 'secret_sauce') {
      return { success: true };
    } else {
      return { success: false, error: 'Credenciais inválidas' };
    }
  }
  
  module.exports = { login };
  