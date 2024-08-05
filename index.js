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

const places = [
    {
        name: 'The Coffe Room',
        id: 1, address: 'Burgas Center, ul. "Slivnitsa" 8, 8000 Burgas',
        rating: 5, img: '/img/coffee-room.jpg',
        details: 'Българска верига кофишопове родена в Бургас.Прясно изпечено кафе приготвено от майстори.Кафе-коктейли, традиционни напитки, уникални десерти, съвременна уютна атмосфера',
        reviews: [
            { customer: 'Ogata Ap', comment: 'Правят яко кафе, имат един черен сладкиш прилича на изгорял, но е много вкусен, кенефа е добър става за отпускане .Препоръчвам' },
            { customer: 'Ana Vasileva', comment: 'Interior is super creative and conducive, the swings define as good choice. In terms of variety this place is a heaven to coffee and tea lovers. Probably one of the best-tasting cappuccinos I’ve tried and they offer sweets too. Staff was kind and friendly.' },
            { customer: 'Joe Kristiansen', comment: 'Great little coffee shop. The coffee is fantastic, snacks are amazing. I recommend the banana bread. It does a brisk business, staff is friendly and helpful, bathroom is clean. The owner is a cheerful young man, constantly improving the venue. They have recently started their own line of in house made snacks. A nice addition to a great environment.' }
        ],
        images: ['/img/galery/1/caffe-corner-01.jpeg', '/img/galery/1/caffe-corner-02.jpeg', '/img/galery/1/caffe-corner-03.jpeg', '/img/galery/1/caffe-corner-04.jpeg', '/img/galery/1/caffe-corner-05.jpeg']
    },
    {
        name: 'The Butlers coffe',
        id: 2,
        address: 'Burgas Center, ul. "Mihail Lermontov" 13, 8000 Burgas',
        rating: 4,
        img: '/img/butlers.jpg',
        details: 'Elegant and stylish coffee with top-notch service.',
        reviews: [
            {customer: 'Nazarii Hrytsenko', comment: 'Scrambled eggs sandwich was just excellent! Wish the waiter could speak a little bit of English, but overall it was good. Thank you.' },
            {customer: 'Bogdan Stamenov', comment: 'The food is delicious and Butlers has very affordable lunch menu which is also great. The ambience is astonishing. As to the service the employees are polite but when it is busier they forget orders or don\'t hear them properly. Overall it is great experience and I recommend to everyone to sit there for lunch or merely for coffee.' },
            {customer: 'Juanita Sierra Parrado', comment: 'Amazing place! Sad is a bit small. Food was amazing, my boyfriend and I had a delicious breakfast. I order eggs Benedict which were delicious and my boyfriend ordered English breakfast! We were very happy! Also the chocolate with peanut butter was crazy delicious ITS A MUST. Services was good and English friendly. Place is cozy and well decorated but definitely a bit small as it gets pretty full, definitely worth it tho.' },
        ],
        images: ['/img/galery/2/butlers-1.jpg', '/img/galery/2/butlers-2.jpg', '/img/galery/2/butlers-3.jpg', '/img/galery/2/butlers-4.jpg', '/img/galery/2/butlers-5.jpg', ]
    },
    {
        name: 'HashtagSTUDIO - The Culture Club',
        id: 3,
        address: 'Burgas Center, ul. "Vazrazhdane" 6, 8001 Burgas',

        rating: 4, img: '/img/hash-tag.jpg',
        details: 'A vibrant spot with a cultural touch.',
        reviews: [
            {},
            {},
            {}
        ],
        images: []
    },
    {
        name: 'The Coffe Room 1',
        id: 4,
        address: 'Burgas Center, ul. "Tsar Simeon I" 37, 8000 Burgas',

        rating: 3, img: '/img/coffe-room.jpg',
        details: 'Modern coffee room with a variety of blends.',
        reviews: [
            {},
            {},
            {}
        ],
        images: []
    },
    {
        name: 'The Cafe Center',
        id: 5,
        address: 'Burgas Center, ul. "Mihail Lermontov" 10, 8000 Burgas',

        rating: 4, img: '/img/dabov.jpg',
        details: 'Central location with a great selection of pastries.',
        reviews: [
            {},
            {},
            {}
        ],
        images: []
    },
];

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`);
});
