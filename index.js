const express = require('express');
const cors = require('cors')
const errorHandler = require('./src/middleware/errorHandler');
require('dotenv').config()
const cancionesRoutes = require('./src/routes/cancionesRoutes')

const app = express();

app.use(express.json());
app.use(cors());

app.get('/download', (req, res) => {
  const fileUrl = 'https://drive.google.com/uc?export=download&authuser=0view&id=1haodCRVipkQ1S6p6O8bEGyr--Q-K3P0L';
  request(fileUrl).pipe(res);
});

app.get('/api', async (req, res) => {
  res.json('Hola mundo');
});

app.use('/api/canciones', cancionesRoutes);

app.use(errorHandler)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
