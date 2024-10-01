const db = require('../../db/db')

const updateCancion = async (req, res) => {
    const { mp3url, titulo, filename } = req.body;
    const { id } = req.params;

    try {
        const sqlUpdate = "UPDATE canciones SET titulo = $1, mp3url = $2, filename = $3 WHERE id = $4 RETURNING *"
        const values = [titulo, mp3url, filename, id];
        
        const actualSong = await db.query(sqlUpdate, values);
        if(actualSong){
            res.status(202).json({"Cancion Actualizada": actualSong.rows[0]})
        }else {
            res.status(500).json({'status': "No se pudo agregar cancion"})
        }
    } catch (error) {
        res.status(500).json({"error": error})
    }

}

module.exports  = updateCancion;
