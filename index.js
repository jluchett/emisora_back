const express = require('express');
const errorHandler = require('./src/middleware/errorHandler');
require('dotenv').config()

const app = express();

app.use(express.json());

app.get('/api', async (req, res) => {
  res.json('Hola mundo');
});

app.use(errorHandler)

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
