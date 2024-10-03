const db = require('../../db/db');

const deleteCancion = async (req, res)=>{
    const { id } = req.params;
    try {
        const cancion = await db.query("SELECT * FROM canciones WHERE id = $1", [id]);
        const sqlDelete = "DELETE FROM canciones WHERE id = $1";
        const delSong = await db.query(sqlDelete,[id])

        if(delSong){
            res.status(202).json({'Cancion eliminada: ': cancion})
        }else{
            res.status(500).json({'status': "No se pudo eliminar cancion"})
        }
    } catch (error) {
        res.status(500).json({"error": error})
    }
}

module.exports = deleteCancion;