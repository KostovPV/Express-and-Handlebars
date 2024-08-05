const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');
const places = require('./public/js/dummy-data');

const loggerMidddleware = require('./middlewares/loggerMiddleware')
const app = express();
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    helpers: {
        stars: function (rating) {
            const fullStars = Math.floor(rating);
            return Array.from({ length: 5 }, (_, index) =>
                index < fullStars ? 'fa-solid fa-star' : 'fa-regular fa-star'
            );
        }
    }
}));

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.use(loggerMidddleware);



app.get('/', (req, res) => {
    res.render('home', {
        places,
    });
});

app.get('/list', (req, res) => {
    res.render('list', {
        places,
    });
});

app.get('/list/:id', (req, res) => {
    const place = places.find(p => p.id == req.params.id);
    if (place) {
        res.render('item-details', {
            place,
        });
    } else {
        res.status(404).send('Item not found');
    }
});
app.get('/create', (req, res) => {
    res.render('create', {
        
    });
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
