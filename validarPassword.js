function validarPassword(password) {
  if (!password || password.length < 8) {
    return false;
  }
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);

  return tieneMayuscula && tieneNumero;
}

module.exports = validarPassword;