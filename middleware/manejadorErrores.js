const manejadorErrores =  (error, req, res, next)=>{
    const codigoEstado = error.statusCode || 500
    const mensaje = error.mensaje || "Error Inesperado"
    console.error = (`Hubo un error: ${new Date()} - ${codigoEstado} - ${mensaje}`)

    if (error.stack){
        console.error(error.stack)
    } 

    res.json({
        Estado: "ERROR",
        codigoEstado,
        mensaje,
        //solo cuando esta en desarrollo
        ...(process.env.NODE_ENV === "development" && {stack: error.stack})
    })
}

module.exports = manejadorErrores;