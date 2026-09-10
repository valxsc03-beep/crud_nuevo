function validarNombre(nombre) {
  return typeof nombre === 'string' && nombre.trim().length > 2;
}

function validarCorreo(correo) {
  const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regexCorreo.test(correo);
}

// Middleware para Express
function validarCampos(req, res, next) {
  const { nombre, correo } = req.body;

  if (nombre && !validarNombre(nombre)) {
    return res.status(400).json({ error: 'El nombre debe tener más de 2 caracteres.' });
  }

  if (correo && !validarCorreo(correo)) {
    return res.status(400).json({ error: 'El formato del correo electrónico no es válido.' });
  }

  next(); // Si todo está bien, pasa al siguiente handler
}

module.exports = {
  validarNombre,
  validarCorreo,
  validarCampos
};