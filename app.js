const express = require('express');
const exhbs = require('express-handlebars');
const menu = require('./menu.json');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');

app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { pageTitle: 'About' });
});

app.get('/menu', (req, res) => {
  res.render('menu', { menu, cssFileName: 'menu', pageTitle: 'Menu' });
});

app.get('/menu/:menuItemId', (req, res) => {
  const menuItem = menu.find(el => el.id === req.params.menuItemId);

  res.render('menuItem', { menuItem });
});

app.listen(4444, () => {
  console.log('sldfjkfn');
});
