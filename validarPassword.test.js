const validarPassword = require('./validarPassword');

test('Contraseña válida (cumple todas las reglas)', () => {
  expect(validarPassword('Password123')).toBe(true);
});

test('Contraseña muy corta (menos de 8 caracteres)', () => {
  expect(validarPassword('Pass1')).toBe(false);
});

test('Contraseña sin letra mayúscula', () => {
  expect(validarPassword('password123')).toBe(false);
});

test('Contraseña sin número', () => {
  expect(validarPassword('PasswordSinNum')).toBe(false);
});

test('Texto vacío', () => {
  expect(validarPassword('')).toBe(false);
});