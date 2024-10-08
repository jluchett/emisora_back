const express = require('express');
const cors = require('cors')
const errorHandler = require('./src/middleware/errorHandler');
require('dotenv').config()
const cancionesRoutes = require('./src/routes/cancionesRoutes')

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/canciones', cancionesRoutes);

app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
