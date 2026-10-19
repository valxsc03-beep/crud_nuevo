const {Router} = require("express")
const enrutador = Router()
const {listarUsuarios, crearUsuarios} = require("../controllers/usuariosController")

enrutador.get("/listado", listarUsuarios)
enrutador.post("/crear", crearUsuarios)

module.exports = enrutador