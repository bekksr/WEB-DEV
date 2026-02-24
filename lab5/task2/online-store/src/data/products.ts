import { Product } from '../app/models/product.model';  
import { Category } from '../app/models/category.model';        



export const CATEGORIES: Category[] = [
    {id: 1, name: 'Смартфоны'},
    {id: 2, name: 'Ноутбук'},
    {id: 3, name: 'Наушники'},
    {id: 4, name: 'Часы'}
];



export const PRODUCTS: Product[] = [
      {
    id: 1,
    name: 'Смартфон Apple iPhone 17 256Gb черный',
    description: 'Apple iPhone 17 — новый уровень мобильной фотографии и безупречной производительности в стильном черном корпусе.',
    price: 562_190,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p14/pa5/64165039.png?format=gallery-large',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p54/pa2/64165043.png?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pd6/p0c/64462383.jpg?format=gallery-large',
      'https://resources.cdn-kaspi.kz/img/m/p/pa8/pa2/64165040.png?format=gallery-large'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-256gb-chernyi-145466647/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_sports_and_outdoors_goods_for_hunting_and_shooting_clothes_and_shoes&gbraid=0AAAAAC7-v7gMNqukD5oY2hH3dtLpvlA0l&gclid=CjwKCAiAncvMBhBEEiwA9GU_fszt98LZ0Mmao08wHepLxAFTaB-PGpmKg_D3m8u8q42HAYk6ewDUyxoCVnkQAvD_BwE',
    categoryId: 1,
    likes: 0,
  },


  {
    id: 2,
    name: 'Смартфон Apple iPhone Air 512Gb золотистый',
    description: 'Apple iPhone Air 512Gb — это воплощение инноваций и элегантности в мире смартфонов, сочетающее в себе мощный процессор A19 Pro и передовой дизайн.',
    price: 734_990,
    rating: 4.8,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p90/pb1/64171067.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/pe9/64477325.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pcf/pae/64171071.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p74/pb1/64171068.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-air-512gb-zolotistyi-145468555/?c=750000000',
    categoryId: 1,
    likes: 0,
  }, 
  {
    id: 3,
    name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
    description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
    price: 799_990,
    rating: 5,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000',
    categoryId: 1,
    likes: 0,
    },

    {
        id: 4,
        name: 'Смартфон Apple iPhone 16 256Gb черный',
        description: 'iPhone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании.',
        price: 446_910,
        rating: 4.2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h47/87295471124510.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/ha2/h79/87295471157278.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h66/h8f/87295471190046.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h51/hc0/87295471222814.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-belyi-123726722/?c=750000000',
        categoryId: 1,
        likes: 0,
    },
    {
        id: 5,
        name: 'Смартфон Apple iPhone 16 Pro Max 256Gb золотистый',
        description: 'Флагманский IPhone 16 Pro Max вобрал в себя лучшие черты современного гаджета. Это самое производительное устройство в линейке Apple iPhone с масштабным дисплеем, потрясающей производительностью и невероятной внешней эргономикой. Iphone 16 pro max – настоящий титан в своем семействе. Флагманская модель с тончайшими рамками корпуса обладает эргономичным дизайном, высокой ударо- и влагозащитой. Дополнена передней панелью Ceramic Shield последнего поколения и задней – из особого текстурированного стекла с матовой поверхностью. В серии несколько вариантов смартфонов – на 1Тб, на 256Гб, а также iphone 16 pro max 512GB в черном, титановом, белом цвете и новом нежном оттенке Desert Titanium.',
        price: 709_500,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h96/ha4/87295491735582.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h3c/h66/87295491768350.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/heb/hcc/87295491801118.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000',
        categoryId: 1,
        likes: 0,
    }, 
    {
        id: 6,
        name: 'Смартфон Apple iPhone 13 256Gb белый',
        description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.',
        price: 385_716,
        rating: 4.0,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hd5/hdc/64004911824926.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h9b/hec/64004914577438.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hf7/he2/64004917035038.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h28/hfc/64004919296030.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-256gb-belyi-102298423/?c=750000000',
        categoryId: 1,
        likes: 0,
    }, 

    {
        id: 7,
        name: 'Смартфон Apple iPhone 14 Pro Max 128Gb черный',
        description: 'Смартфон Apple iPhone 14 Pro Max имеет обновленную камеру с 48-мегапиксельной матрицей. Объектив пропускает большое количество света. Благодаря этому фотографии получаются яркими даже при съемке глубокой ночью. Высокое разрешение модуля позволяет использовать основную камеру в качестве телеобъектива с двухкратным оптическим зумом. Умные алгоритмы оптимизации подбирают необходимый уровень контрастности, яркости и детализации изображения. Технология Action Mode исключает риск размытия кадров при съемке движущихся объектов. Для создания селфи в устройстве есть фронтальная камера TrueDepth.',
        price: 565_719,
        rating: 3.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/haf/64503528718366.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h2c/h37/64503531143198.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h99/h5d/64503533436958.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hfb/ha1/64503535927326.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-pro-max-128gb-chernyi-106363270/?c=750000000',
        categoryId: 1,
        likes: 0,
    },
    {
        id: 8,
        name: 'Смартфон Apple iPhone 16e 256Gb белый',
        description: 'Apple iPhone 16e 256Gb — это идеальный выбор для тех, кто ценит передовые технологии и стильный дизайн в компактном корпусе.',
        price: 559_889,
        rating: 3.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p56/p66/26476802.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/p01/p02/26473823.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/pde/p04/26473818.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/p55/p02/26473820.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16e-256gb-belyi-135186217/?c=750000000',
        categoryId: 1,
        likes: 0,
    }, 
    {
        id: 9,
        name: 'Смартфон Apple iPhone 16 Plus 256Gb зеленый',
        description: 'Флагманский iPhone 16 Plus – объединение передовых технологий, превосходного дизайна и уникальных решений. Это не просто смартфон Apple, а высокотехнологичное произведение искусства с продуманными до мелочей, стильными деталями, высокой производительностью, комфортным функционалом. Это именно то, что вам нужно для безграничного общения, яркого творчества и развлечений.',
        price: 640_000,
        rating: 4.2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/hbd/87295482265630.png?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h18/h82/87295482298398.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h19/h19/87295482331166.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hf3/h43/87295482363934.png?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-16-plus-256gb-zelenyi-123776586/?c=750000000',
        categoryId: 1,
        likes: 0,
    },
    {
        id: 10,
        name: 'Смартфон Apple iPhone 14 128Gb Dual eSim голубой',
        description: 'Apple iPhone 14 128Gb Dual eSim — это воплощение инноваций и стиля, предлагающее передовые технологии и безупречный пользовательский опыт. 📸 Снимайте невероятные фотографии и видео, наслаждайтесь высокой производительностью и надежной защитой.',
        price: 429_957,
        rating: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h67/hcf/86694731579422.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h87/hb4/86694731644958.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h9f/h77/86694731710494.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h46/h8d/86694731776030.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-iphone-14-128gb-dual-esim-goluboi-122062592/?c=750000000',
        categoryId: 1,
        likes: 0,
    }, 


    {
        id: 11,
        name: 'Apple MacBook Air 13 2020 13.3" / 8 Гб / SSD 256 Гб / macOS /',
        description: 'Первый чип, разработанный специально для Mac. Поразительно, но система на чипе Apple M1 вмещает 16 миллиардов транзис­торов и объединяет центральный и графи­ческий процессоры, систему Neural Engine, контроллеры ввода-вывода и множество других компонентов. Чип Apple M1 позволяет использовать на Mac уникальные технологии и обеспечивает невероятную производи­тельность в сочетании с лучшей в отрасли энергоэффективностью. Это не просто ещё один шаг для Mac — это принципиально новый уровень возможностей.',
        price: 439_975,
        rating: 3.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
        images: [
            'https://resources.cdn-kaspi.kz/img/m/p/h2d/h82/83648592183326.png?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/h0a/h85/64213178351646.jpg?format=gallery-medium',
            'https://resources.cdn-kaspi.kz/img/m/p/hdb/hb3/64213181169694.jpg?format=gallery-medium'
        ],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
        categoryId: 2,
        likes: 0,

    },

    {
        id: 12,
        name: 'Apple MacBook Air 13 2025 / 16 Гб / SSD 256 Гб / macOS ',
        description: 'Представляем Apple MacBook Air 13 2025 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. Этот ноутбук станет идеальным спутником для работы и развлечений.',
        price: 521_993,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pab/pc3/35723922.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p72/pc3/35723924.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/p3a/pc3/35723926.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/p1e/pc3/35723927.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw123-137582956/?c=750000000',
        categoryId: 2,
        likes: 0

    },

    {
        id: 13,
        name: ' Apple MacBook Pro 14 2024 14.2" / 24 Гб / SSD 512 Гб / macOS ',
        description: 'Apple MacBook Pro 14 2024 — это мощный и компактный ультрабук для профессионалов, которым нужна максимальная производительность в любом месте.',
        price: 1_155_000,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p80/pc6/29100257.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pef/pa4/15675603.png?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/pd3/pa4/15675604.png?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/pb7/pa4/15675605.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-14-2024-14-2-24-gb-ssd-512-gb-macos-mx2e3-137220943/?c=750000000',
        categoryId: 2,
        likes: 0
    },

    {
        id: 14,
        name: 'Apple MacBook Air 15 2024 15.3" / 8 Гб / SSD 512 Гб / macOS',
        description: 'Представляем Apple MacBook Air 15 2024 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность. С процессором Apple M3 и 8 Гб оперативной памяти, он идеально подходит для работы и учебы.',
        price: 697_444,
        rating: 4.2,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pe7/pc5/29100383.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h76/haf/85669216354334.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hbe/85669216485406.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h21/85669216616478.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2024-15-3-8-gb-ssd-512-gb-macos-mryq3-118169894/?c=750000000',
        categoryId: 2,
        likes: 0
    },

    {
        id: 15,
        name: 'Apple MacBook Pro 16 2023 16.2" / 36 Гб / SSD 512 Гб / macOS ',
        description: 'Apple MacBook Pro 16 M3 Pro 2023 - идеально подходит для профессионалов в любых областях и сферах. Он сделает вашу работу более продуктивной за счет повышенной производительности, времени автономной работы и возможностей подключения.',
        price: 2_549_999,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/ha5/h31/84577572159518.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h62/hab/84577677672478.png?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/h81/h42/84577677738014.png?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h3b/84577677803550.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2023-16-2-36-gb-ssd-512-gb-macos-mrw63-137243454/?c=750000000',
        categoryId: 2,
        likes: 0
    },

    {
        id: 16,
        name: 'Наушники Apple AirPods 4 белый',
        description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио и адаптивным эквалайзером сделают музыку неотъемлемой частью твоей жизни. ',
        price: 60_448,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hc8/he6/87309386219550.png?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/p00/p20/108964628.png?format=gallery-medium',
                  'https://api.technodom.kz/f3/api/v1/images/48/48/284730_2.webp'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000',
        categoryId: 3,
        likes: 0
    },

    {
        id: 17,
        name: 'Наушники Apple AirPods Max 2 черно-синий',
        description: 'Модель автоматически умеет определять, когда нужно отключить шумоподавление. За счет излучателей большого диаметра наушники выдают громкий звук с хорошим балансом частот. Пространственный звук создается благодаря динамическому отслеживанию положения головы пользователя',
        price: 277_872,
        rating: 4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p68/p4c/3527586.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p83/p4b/3531601.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/p4c/p4c/3527587.png?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/pd3/p0d/3532810.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-max-2-cherno-sinii-128622804/?c=750000000',
        categoryId: 3,
        likes: 0
    },

    {
        id: 18,
        name: 'Наушники Apple AirPods Pro 2nd generation белый',
        description: 'И кейс, и наушники сертифицированы по стандарту влагозащиты IPX4 от воды и пота, как и их предшественники. Размеры кейса и вес остались прежними. Есть поддержка голосового ассистента Siri с возможностью зачитывания уведомлений и сообщений, и функцией ответа голосом, а также управления громкостью и треками.',
        price: 109_926,
        rating: 3.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hb7/h5e/64511113199646.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/hf5/h7a/64511116378142.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/hf0/hce/64511118704670.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/h22/h14/64511121489950.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-belyi-106362968/?c=750000000',
        categoryId: 3,
        likes: 0
    },

    {
        id: 19,
        name: 'Наушники Apple EarPods 3.5 мм with Remote and Mic белый',
        description: 'В отличие от круглой формы обычных наушников-вкладышей, конструкция наушников EarPods продиктована геометрией ушной раковины. Именно поэтому для многих пользователей они будут удобнее любых других наушников-вкладышей.',
        price: 10_065,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h46/63759082946590.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h0f/h31/63759083372574.jpg?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/h0f/h31/63759083372574.jpg?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/h68/h9a/63759083831326.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-earpods-3-5-mm-with-remote-and-mic-belyi-4802297/?c=750000000',
        categoryId: 3,
        likes: 0
    },

    {
        id: 20,
        name: 'Наушники Apple AirPods Pro 3 белый',
        description: '',
        price: 134_000,
        rating: 4.6,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p89/pc5/64466278.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pa6/pc5/64466279.png?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/p6d/pc5/64466277.png?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/p12/pc8/64466280.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-3-belyi-145554533/?c=750000000',
        categoryId: 3,
        likes: 0
    },

    {
        id: 21,
        name: 'Смарт-часы Apple Watch Ultra Series 2 2024 GPS + Cellular 49 мм черный',
        description: 'Apple Watch Ultra 2 2024 - обновлённые смарт-часы с повышенной производительностью. Облегчённый корпус отличается высокой прочностью, стойкостью к коррозии. Его края приподняты для защиты сапфирового стекла от ударов по бокам. Диаметр изделия составляет 49 мм. Устройство выдерживает погружение на глубине до сотни метров. Гаджет соответствует уровню защиты MIL-STD 810H1, а также классу влагозащиты IP6X2.',
        price: 410_305,
        rating: 5,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pdb/pd6/2456905.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pf7/pd6/2456906.jpg?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/p13/pd7/2456907.jpg?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/p2f/pd7/2456908.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-watch-ultra-series-2-2024-gps-cellular-49-mm-chernyi-128355600/?c=750000000',
        categoryId: 4,
        likes: 0
    },

    {
        id: 22,
        name: 'Смарт-часы Apple Watch Series 10 S/M 46 мм черный',
        description: 'Apple Watch Series 10 предлагают еще больше возможностей: увеличенный экран, тонкий изящный и прочный корпус, быстрая зарядка и новые возможности. В Apple хорошо поработали над обновлением серии, внеся значительные и приятные изменения, после которых захочется купить Apple Watch Series 10. Это надежный партнер для тренировок, личный ассистент и стильный аксессуар на каждый день.',
        price: 215_444,
        rating: 4.9,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p5b/p0a/1511235.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p93/p0a/1511237.jpg?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/paf/p0a/1511238.jpg?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/pcb/p0a/1511239.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-46-mm-chernyi-128124978/?c=750000000',
        categoryId: 4,
        likes: 0
    },

    {
        id: 23,
        name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 M/L 44 мм черно-синий',
        description: 'Поддержка платформ: iOS материал корпуса: алюминий цвет корпуса: черно-синий форма корпуса: прямоугольнаяформа корпуса: прямоугольнаяинтерфейсы: Bluetooth,Wi-Fi,NC время работы: до 18 часов время работы: до 18 часов технология экрана: OLED',
        price: 124_990,
        rating: 4.4,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pa6/p1a/7081862.png?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/p57/pb2/7081680.jpg?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/pd1/pdb/64350290.png?format=gallery-medium',
                'https://resources.cdn-kaspi.kz/img/m/p/pee/pdb/64350291.png?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-m-l-44-mm-cherno-sinii-129673915/?c=750000000',
        categoryId: 4,
        likes: 0
    },

    {
        id: 24,
        name: 'Смарт-часы Apple Watch Series 11 S/M 46 мм розовое золото-розовый',
        description: 'Apple Watch Series 11 — стильные и функциональные умные часы для тех, кто ценит комфорт и передовые технологии.',
        price: 223_865,
        rating: 4.7,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p5f/p16/67215201.jpeg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/pc9/p19/67215202.jpeg?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/pbf/p97/64470328.png?format=gallery-medium', 
                'https://resources.cdn-kaspi.kz/img/m/p/pbc/p69/66341183.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-watch-series-11-s-m-46-mm-rozovoe-zoloto-rozovyi-146103414/?c=750000000',
        categoryId: 4,
        likes: 0
    },

    {
        id: 25,
        name: 'Смарт-часы Apple Watch Series 7 45 мм зеленый',
        description: 'Apple Watch Series 7 – смарт-часы с самым большим дисплеем. Конструкция дисплея была фундаментально переосмыслена, что позволило уменьшить рамку на 40%. В итоге область просмотра увеличилась по сравнению с Series 6 и Series 3. А еще вам не придется специально поднимать запястье или прикасаться к дисплею, чтобы увидеть на циферблате время или другие данные и расширения — дисплей всегда включен.',
        price: 175_000,
        rating: 4.1,
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h09/63955338625054.jpg?format=gallery-medium',
        images: ['https://resources.cdn-kaspi.kz/img/m/p/h27/hc5/63955341967390.jpg?format=gallery-medium',
                 'https://resources.cdn-kaspi.kz/img/m/p/h08/hf2/63955345244190.jpg?format=gallery-medium', 
                 'https://resources.cdn-kaspi.kz/img/m/p/h4c/hc6/63955347669022.jpg?format=gallery-medium'],
        link: 'https://kaspi.kz/shop/p/apple-watch-series-7-45-mm-zelenyi-102582830/?c=750000000',
        categoryId: 4,
        likes: 0
    },
];