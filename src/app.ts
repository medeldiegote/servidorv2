
// Importo Express
import express from 'express';

const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('Hola Nube Colectiva !');
});

app.listen(puerto, () => {
    console.info(`Ready on port ${puerto}`);
  }).on("error",err => {
    if (err) {
      return console.error(err);
    }
    return console.log(`El Servidor esta funcionado en el puerto ${puerto}`);
  });