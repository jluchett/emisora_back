const db = require('../../db/db');

const addCancion = async (req, res) =>{
    const { titulo, url, file } = req.body;
    try {
        const sqlInsert = "INSERT INTO canciones (titulo, mp3url, filename) VALUES ($1, $2, $3) RETURNING *"
        const values = [titulo, url, file]
        const cancion = await db.query(sqlInsert, values);
        if(cancion){
            res.status(201).json({"Agregada:": cancion.rows});
        } else {
            res.status(500).json({'status': "No se pudo agregar cancion"})
        }
    } catch (error) {
        res.status(500).json({"error": error})
    }
}

module.exports = addCancion;