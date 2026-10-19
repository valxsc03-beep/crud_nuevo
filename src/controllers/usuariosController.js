//importar servicios
const ingresar = require("../services/autenticarService");
//funcion para listar todos los usarios
const listadoUsuarios = async (req, res) => {
    try{
        const usuarios = await listarTodo();
        res.status(200).json(usuarios);

    } catch (error) {
        res.status(500).json({ error: "Error: error.massage" });
    }

const     

};


module.exports = listadoUsuarios