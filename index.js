
const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');  

const loggerMidddleware = require('./middlewares/loggerMiddleware')
const app = express();
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials'),
    helpers: {
        stars: function(rating) {
            const fullStars = Math.floor(rating);
            return Array.from({ length: 5 }, (_, index) => 
                index < fullStars ? 'fa-solid fa-star' : 'fa-regular fa-star'
            );
        }
    }
    
}));



// app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');

app.use(loggerMidddleware);

const places = [
    {name: 'The corner Coffe', id: 1, address: 'Burgas Center, ul. "Slivnitsa" 8, 8000 Burgas', rating: 5, img: '/img/coffee-room.jpg', details: 'A cozy corner coffee shop with great ambiance.'},
    {name: 'The Butlers coffe', id: 2, address: 'Burgas Center, ul. "Mihail Lermontov" 13, 8000 Burgas', rating: 4, img: '/img/butlers.jpg', details: 'Elegant and stylish coffee with top-notch service.'},
    {name: 'HashtagSTUDIO - The Culture Club', id: 3, address: 'Burgas Center, ul. "Vazrazhdane" 6, 8001 Burgas', rating: 4, img: '/img/hash-tag.jpg', details: 'A vibrant spot with a cultural touch.'},
    {name: 'The Coffe Room 1', id: 4, address: 'Burgas Center, ul. "Tsar Simeon I" 37, 8000 Burgas', rating: 3, img: '/img/coffe-room.jpg', details: 'Modern coffee room with a variety of blends.'},
    {name: 'The Cafe Center', id: 5, address: 'Burgas Center, ul. "Mihail Lermontov" 10, 8000 Burgas', rating: 4, img: '/img/dabov.jpg', details: 'Central location with a great selection of pastries.'},
];




app.get('/', (req, res) => {
    res.render('home', {
        places,
    });

})


app.get('/list', (req, res) => {
    console.log('Hello from Express');
    // res.send('<h1>Hello from res. Express</h1>');
    res.render('list', {
        places,
    });
})



const port = 5000;
app.listen(port, () => {
    console.log(('Server listening on port http://localhost:5000...'));
});

