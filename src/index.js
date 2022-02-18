const express = require('express');

const app = express();

const { urlencoded } = require('express');

const homeController = require('./controllers/homeController');

app.use(urlencoded({ extended: true }));

app.get('/', homeController.renderHome);

app.get('/convocado', homeController.renderPg1);

app.get('/importante', homeController.renderPg3);



app.use((err, req, res, next) => {
  console.error(err, 'Erro inesperado');
  next();
});

app.set('view engine', 'ejs');

app.set('views', './views');

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Servidor configurado no localhost');
});