const jwtoken = require("jsonwebtoken");

const ingresar = (req, res) => {
    
    const { usuario, clave } = req.body;

    const usuarioid = {
        usuario: "valeria",
        clave: "12345"
    };

    if (usuario !== usuarioid.usuario || clave !== usuarioid.clave) {
        return res.json({
            mensaje: "Usuario y/o clave incorrecto",
        });
    }

    const token = jwtoken.sign(
        { user: usuario },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );
    
    res.json({ token });
};

module.exports = ingresar;