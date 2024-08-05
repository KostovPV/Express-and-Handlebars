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
            {customer: 'Иван Иванов', comment: 'Специално посетих заради  DJ Cass в събота вечер... Прекарах си много приятно, много хип-хоп музика и добро обслужване от страна на персонала. Пак ще се посети на следващото участие на DJ Cass.'},
            {customer: 'Marina Dimitrova', comment: 'Всъщност трите ми звезди са основно заради музиката. В Бургас няма особено голям избор на нощни заведения, което явно е предпоставка и за липсата на качествени DJ. Винаги съм смятала, че клубовете създават трендове и формират музикални вкусове. Е при вас, а и въобще в целият град това липсва. Всеки път е една конкрерна миксирана песен на Ред Хот примерно или Лени Кравиц или пък три определени песни на Бионсе или бг песните са винаги Ъпсурт, Спенс, 100кила и това се върти от идея нямам сигурно 10 години, че и повече.Голямо браво имате, че развихте и наложихте стенд ъп комеди-то в Бургас, както и quiz вечерите. Постарайте се и със съботните вечери!'},
            {customer: 'DIMITAR RADOSLAVOV (Ribarsky)', comment: 'Не зная как този клуб е получил разрешение за подобна дейност, но три дни бях под наем в съседно студио и нямаше сън...Шумът бе отвратителен!Не завиждам на постоянно живущите наоколо!'},
        ],
        images: ['/img/galery/3/hash-tag-1.jpg', '/img/galery/3/hash-tag-2.jpg', '/img/galery/3/hash-tag-3.jpg', '/img/galery/3/hash-tag-4.jpg', '/img/galery/3/hash-tag-5.jpg', ]
    },
    {
        name: 'The Coffe Room 1',
        id: 4,
        address: 'Burgas Center, ul. "Tsar Simeon I" 37, 8000 Burgas',

        rating: 3, img: '/img/coffe-room.jpg',
        details: 'Modern coffee room with a variety of blends.',
        reviews: [
            {customer: 'VTonchev', comment: 'Най-доброто кафе в целия град! Обслужването ни беше страхотно  - личи си, че всичко тук е правено с много любов - от дизайна, до напитките и снаковете. Обстановката е прекрасна, а кафето е без забележка. Мястото е удобно за паркиране и лесно за намиране. Благодарим от сърце! Определено ще се върнем скоро. Браво!'},
            {customer: 'Niki Vladov', comment: 'Прекрасно капучино❤️🍀Хубави донътиМалко местенце, но с приятна атмосфераЛюбезен персонал'},
            {customer: 'Hristo Velev', comment: 'The espresso is great! Really liked the peanut butter muffin. The barista was very friendly and cute.'},
        ],
        images: ['/img/galery/4/coffee-room-1.jpeg', '/img/galery/4/coffee-room-2.jpeg', '/img/galery/4/coffee-room-3.jpeg', '/img/galery/4/coffee-room-4.jpg', '/img/galery/4/coffee-room-5.jpg', ]
    },
    {
        name: 'The Cafe Center',
        id: 5,
        address: 'Burgas Center, ul. "Mihail Lermontov" 10, 8000 Burgas',

        rating: 4, img: '/img/dabov.jpg',
        details: 'Central location with a great selection of pastries.',
        reviews: [
            {customer: 'DIMFIT', comment: 'Wonderful coffee. Very tasty croissants. Extremely friendly staff. Highly recommended.'},
            {customer: 'Stoyan Stoyanov', comment: 'Малко заведение в центъра на Бургас. Всичко предлагано като асортимент е постигнато със знание, качество и отговорност. Собствениците мили и внимателни към всеки един клиент. Кафето е божествено. По добра не съм пил до сега. Посетете ще останете доволни!'},
            {customer: 'Phil Meadows', comment: 'This place cares about its coffee - high quality speciality beans and great service.'},
        ],
        images: ['/img/galery/5/cafe-center-1.jpg', '/img/galery/5/cafe-center-2.jpg', '/img/galery/5/cafe-center-3.jpg', '/img/galery/5/cafe-center-4.jpg', '/img/galery/5/cafe-center-5.jpg', ]
    },
];

module.exports = places;