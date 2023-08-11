const { login } = require('./auth');

test('usuário pode fazer login com sucesso', () => {
  const result = login('standard_user', 'secret_sauce');
  expect(result.success).toBe(true);
});

test('usuário recebe erro ao inserir credenciais incorretas', () => {
  const result = login('standard_use', 'secret_sauce1');
  expect(result.success).toBe(false);
  expect(result.error).toBe('Credenciais inválidas');
});
