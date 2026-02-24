import { Category } from '../models/category.model';
import { Product } from '../models/product.model'

export const categories: Category[] = [
  { id: 1, name: 'Technics'},
  { id: 2, name: 'Snacks' },
  { id: 3, name: 'For children' },
  { id: 4, name: 'Beauty' },
  { id: 5, name: 'Furniture' }
];

export const products: Product[] = [
  {
    id: 1,
    categoryId: 1,
    name: 'iPhone 15 Pro',
    description: 'Флагманский смартфон с титановым корпусом и мощным чипом A17 Pro.',
    price: 550000,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=231035300'
  },

  {
    id: 2,
    categoryId: 5,
    name: 'Vitek VT-7170',
    description: 'Тостер VITEK VT-7170 сочетает элегантный стиль, удобство управления и востребованные функции, что делает его надежным помощником для приготовления вкусных ароматных тостов. Для регулировки степени поджаривания доступно 7 режимов, управляемых при помощи поворотного переключателя. Данная модель оснащена 2 отделениями, функциями подогрева и размораживания, кнопкой отмены приготовления.\n' +
      '\n' +
      'Корпус VITEK VT-7170 выполнен из сочетания металла и термостойкого пластика. Благодаря наличию выдвижного поддона вы сможете легко очищать прибор от крошек. Ножки на основании помогают предотвратить скольжение и способствуют устойчивому размещению прибора на столешнице',
    price: 9200,
    rating: 4.3,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h2a/64215853334558.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h49/hed/64215860477982.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha5/64215863918622.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h54/h7d/64215867752478.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=231035300'
  },
  {
    id: 3,
    categoryId: 3,
    name: 'Magniy B6-Forte',
    description: 'Магния цитрат считается одной из более доступных и лучше усваиваемых форм.Магний Б6 - важный катализатор ферментной деятельности. Способствует поглощению кальция и калия. Участвует в углеводном обмене, биосинтезе белков, обладает седативным действием, сосудорасширяющим и диуретическим эффектом. Витамин В6 (пиридоксин) улучшает усвоение ненасыщенных жирных кислот. Оказывает стимулирующее действие на кислотообразующую функцию желудка и желчевыделительную функцию печени, нормализует функциональное состояние печени. Магний вместе с витамином B6 нормализует состояние нервной системы при нарушении эмоционального состояния, депрессии, расстройствах.',
    price: 1138,
    rating: 5.0,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/p3a/pdf/50977151.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p1e/pdf/50977152.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p02/pdf/50977153.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p3a/pdf/50977151.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/farmgrupp-ooo-magnii-v6-forte-tsitrat-magnija-tabletki-50-sht-115992444/?c=231035300'
  },
  {
    id: 4,
    categoryId: 5,
    name: 'Chair ATLANTA GC-1050 Black, Red',
    description: 'Кресло это игровое кресло, разработанное специально для обеспечения комфорта и поддержки во время длительных игровых сессий. \n' +
      '\n' +
      'Оно имеет анатомическое сиденье с дополнительной амортизацией и высокую спинку для поддержки спины и плеч.',
    price: 23400,
    rating: 4.1,
    likes:0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/hdf/86657938882590.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h73/h3b/86657938915358.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb8/hb9/86657938948126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h9a/h66/86657938980894.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/igrovoe-kreslo-atlanta-mebel-gc-1050-chernyi-krasnyi-110203637/?c=231035300'
  },
  {
    id: 5,
    categoryId:2,
    name: 'Snickers Super',
    description: 'Шоколадный батончик это уникальное сочетание натуральных шоколада и карамели! Идеально подходит для сбалансированного и вкусного перекуса!',
    price: 650,
    rating: 5.0,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pac/p4e/11814886.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/p57/p4e/11814889.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/peb/p4b/11814890.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p97/p4b/11814893.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/snickers-super-shokoladnyi-batonchik-molochnyi-80-g-102153456/?c=231035300'
  },
  {
    id: 6,
    categoryId:4,
    name: 'Titan Ring: Stainless Steel ',
    description: 'Кольцо из титана с вставками из страз — элегантное украшение, которое добавит изысканности любому образу.\n' +
      '\n' +
      '✨ Особенности:\n' +
      '- ✅ Прочный титан — долговечный и устойчивый к повреждениям.\n' +
      '- 🪨 Стразы белого цвета — придают кольцу блеск и шик.\n' +
      '- 🌟 Золотистый оттенок — универсален и легко сочетается с другими украшениями.\n' +
      '\n' +
      'Это кольцо станет отличным выбором для женщин, которые ценят стиль и качество. Оно идеально подходит как для повседневной носки, так и для особых случаев. Рекомендуем сочетать с другими аксессуарами для создания гармоничного образа.',
    price: 307,
    rating: 4.8,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h7a/66040525193246.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h7a/66040525193246.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h7a/66040525193246.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h63/h7a/66040525193246.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/kol-tso-stainless-steel-razmer-17-titan-strazy-107684977/?c=231035300'
  },
  {
    id: 7,
    categoryId: 2,
    name: 'Гантели Sport&Fitness 15 kg',
    description: 'Представляем вам разборный набор гантелей, который включает 2 гантели с общим весом 15 кг. Этот набор идеально подходит для силовых тренировок дома или в зале, предлагая гибкость и разнообразие в упражнениях.\n' +
      '\n' +
      '\n' +
      '\n' +
      'Набор гантелей разборный состоит из двух гантелей с минимальным весом гантели 2.5 кг и максимальным весом 7.5 кг. Общий вес набора составляет 15.0 кг. В комплект входят 8 блинов, 2 грифа, 1 проставка и 4 гайки. Набор выполнен в черном цвете.',
    price: 9500,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/peb/p2f/60512471.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pce/p2f/60512472.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p96/p2f/60512474.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p7a/p2f/60512475.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/nabor-gantelei-sport-fitness-razbornaja-15-kg-128115215/?c=231035300'
  },
  {
    id: 8,
    categoryId: 3,
    name: 'Батут каркасный 1846455_220415 оранжевый',
    description: 'Детский батут с защитной сеткой 140 см — безопасное и увлекательное решение для активного отдыха ваших детей. Этот батут сочетает в себе высокое качество, удобство и надежность, обеспечивая максимальную защиту во время прыжков.\n' +
      '\n' +
      '✨ Особенности:\n' +
      '- ✅ Защитная сетка — предотвращает падение и обеспечивает безопасность во время игры.\n' +
      '- 🧱 Гальванизированная сталь — прочный и устойчивый к коррозии материал для долговечности.\n' +
      '- 🔋 Складная конструкция — удобство хранения и транспортировки.\n',
    price: 15196,
    rating: 4.9,
    likes: 0,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h81/h63/84411118485534.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h59/ha5/86478912782366.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h74/h60/86478912847902.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb4/h75/86478912913438.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/18464455-220415-oranzhevyi-114219169/?c=231035300'
  },
  {
    id: 9,
    categoryId: 1,
    likes: 0,
    name: 'Air pro 2 white',
    description: 'Неудобная фигня полная не советую их носить мало того что стоят мало так ещё и качества наверняка полное какашка и не стоит вашего внимания если хотите купите нормальные наушники но на эти даже не смотрите да',
    price: 2149,
    rating: 4.9,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/h44/h92/85730021769246.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/he4/h13/85730021834782.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h61/ha2/85730021900318.jpg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/naushniki-air-pro-2-belyi-118366664/?c=231035300'
  },
  {
    id: 10,
    categoryId: 1,
    likes: 0,
    name: 'Коврик для мыши Merch-01 900x400x3 мм рисунок',
    description: 'Игровые коврики для мыши merch-01 на всю поверхность. Размер 900 400 400 3мм. Отлично подойдут для игровых целей, офисного стола, незабываемый подарок близкому человеку',
    price: 1404,
    rating: 3.2,
    image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p24/8461449.jpeg?format=gallery-medium',
    images: [
      'https://resources.cdn-kaspi.kz/img/m/p/pce/p24/8461449.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4d/p73/8461451.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p4d/p73/8461451.jpeg?format=gallery-medium'
    ],
    link: 'https://kaspi.kz/shop/p/merch-01-900x400x3-mm-risunok-129900544/?c=231035300'
  },
  {
    id: 11,
    categoryId: 1,
    likes: 0,
    name: "Чехол для Apple Iphone 13 прозрачный",
    description: "Надежный и стильный чехол для вашего смартфона, обеспечивающий защиту от царапин, ударов и загрязнений. Идеально повторяет форму устройства, сохраняя удобный доступ ко всем кнопкам, портам и камере. Выполнен из качественных материалов, которые гарантируют долговечность и комфортное использование. Элегантный дизайн подчеркивает ваш стиль и обеспечивает дополнительный уровень защиты для вашего устройства.\n" +
      "\n" +
      "✨ Особенности:- ✅ Ударопрочный материал — надежная защита от падений и ударов.- 🔒 Усиленные углы — дополнительная защита наиболее уязвимых мест.- 🌱 Прозрачный дизайн — сохраняет оригинальный вид вашего смартфона.\n" +
      "\n" +
      "Чехол подходит для тех, кто ценит стиль и защиту своего устройства в повседневной жизни — будь то на работе, в поездках или в свободное время.",
    rating: 5.0,
    price: 10,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-large",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/pa2/pc5/64215961.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p86/pc5/64215962.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-106185651/?c=231035300'
  },
  {
    id: 12,
    categoryId: 1,
    likes: 0,
    name: "Зарядное устройство Apple 20W USB-C Power Adapter белый",
    description: "Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.\n" +
      "С его помощью можно быстро зарядить iPhone 8 или новее. До iPhone 12",
    rating: 5.0,
    price: 1995,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/haa/h98/63961936723998.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h81/h1a/63961938624542.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hb3/he6/80523586928670.png?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=231035300'
  },
  {
    id: 13,
    categoryId: 2,
    likes: 0,
    name: "Snickers",
    description: "Шоколадный батончик это уникальное сочетание натуральных шоколада и карамели! Идеально подходит для сбалансированного и вкусного перекуса!",
    rating: 5.0,
    price: 450,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pd4/p55/11814863.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p57/p4e/11814889.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p97/p4b/11814893.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pac/p4e/11814886.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/snickers-karamel-i-nuga-shokoladnyi-batonchik-molochnyi-50-5-g-100801723/?c=231035300'
  },
  {
    id: 14,
    categoryId: 2,
    likes: 0,
    name: "Snickers лесной орех",
    description: "Ты – не ты, когда голоден. Не тормози, Сникерсни! Snickers – это самый популярный в мире шоколадный батончик. Snickers идеально подходит для людей, ведущих активный образ жизни, и тех кто любит проводить время в компании друзей.",
    rating: 4.3,
    price: 650,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pfe/p5b/11814849.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p5a/p59/11814852.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pe9/p58/11814856.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pfe/p5b/11814849.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/snickers-lesnoi-oreh-shokoladnyi-batonchik-molochnyi-81-g-100222670/?c=231035300'
  },
  {
    id: 15,
    categoryId: 2,
    likes: 0,
    name: "Snickers со вкусом пломбира шоколадный батончик молочный 81 г",
    description: "Шоколадный батончик Snickers со вкусом пломбира — это необычное сочетание классического молочного шоколада с нежной начинкой, которое подарит вам мгновения наслаждения.\n" +
      "\n" +
      "Особенности:\n" +
      "- Без ГМО — забота о вашем здоровье.\n" +
      "- Начинка из арахиса, нуги и карамели — идеальное сочетание текстур и вкусов.\n" +
      "- Вкус пломбира — освежающий и сладкий, как любимое лакомство.\n" +
      "\n" +
      "Подходит для всех, кто ищет вкусный перекус или сладкое угощение в любое время дня — будь то на работе, в дороге или дома.",
    rating: 2.9,
    price: 650,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p15/pf4/56140479.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p15/pf4/56140479.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p15/pf4/56140479.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p15/pf4/56140479.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/snickers-so-vkusom-plombira-shokoladnyi-batonchik-molochnyi-81-g-122664786/?c=231035300'
  },
  {
    id: 16,
    categoryId: 3,
    likes: 0,
    name: "Сортер Набор развивающих игрушек",
    description: "Особое значение имеют развивашки — игры, помогающие совершенствовать мелкую моторику, развивающие мышление, творческое воображение, закрепляющие навыки самостоятельного выбора решений.",
    rating: 5.0,
    price: 2611,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pa0/p69/8929737.jpeg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/pe8/p76/8929738.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pcc/p76/8929739.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p60/p74/8929740.png?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/sorter-nabor-razvivajuschih-igrushek-derevo-108447545/?c=231035300'
  },
  {
    id: 17,
    categoryId: 3,
    likes: 0,
    name: "Детская каша Nestle Молочная мультизлаковая банан, земляника с 8 месяцев 200 г бифидобактерии BL",
    description: "Молочная мультизлаковая каша с бананом и кусочками земляники. Для питания детей старше 8 месяцев. Обогащена бифидобактериями BL (пробиотиками), которые способствуют комфортному пищеварению. Приготовлена по особой технологии бережного расщепления злаков CHE. Благодаря этому каша не содержит комочков и имеет воздушную консистенцию, идеальную для первого прикорма.'\n" +
      "Состав: мука пшеничная (содержит глютен), гречневая, овсяная (содержит глютен), рисовая, кукурузная, молоко сухое обезжиренное, смесь растительных масел (низкоэруковое рапсовое, подсолнечное), кусочки банана, кусочки земляники, витамины и минеральные вещества, бифидобактерии.",
    rating: 5.0,
    price: 1220,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p49/p62/16501213.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p2c/p62/16501214.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p49/p62/16501213.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pf4/p61/16501216.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/nestle-molochnaja-mul-tizlakovaja-banan-zemljanika-s-8-mesjatsev-200-g-bifidobakterii-bl-108383748/?c=231035300'
  },
  {
    id: 18,
    categoryId: 3,
    likes: 0,
    name: "Головоломка Фрукты и овощи, цвета, фигуры, машинки, рыбы,цифры",
    description: "Книга Монтессори «Busy Book» — увлекательный инструмент для раннего развития, который помогает детям развивать мелкую моторику, логическое мышление и внимание через игру.\n" +
      "\n" +
      "✨ Особенности:\n" +
      "- ✅ 35 интерактивных элементов — разнообразные задания для увлекательного обучения.\n" +
      "- 🔒 Качественный картон — долговечный и безопасный для детей.\n" +
      "- 🌈 Яркие иллюстрации — привлекают внимание и радуют глаз.\n" +
      "- 🧩 Разнообразные темы — фрукты, овощи, цвета, фигуры и цифры для всестороннего развития.\n" +
      "\n" +
      "Подходит для детей, которые стремятся учиться через игру и развивать свои навыки в увлекательной форме. Идеально подходит для использования дома или в детском саду.\n" +
      "\n" +
      "Рекомендуем использовать книгу в совместных играх с родителями для максимального эффекта и веселья!",
    rating:3.8 ,
    price: 1700,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p51/p70/39436117.png?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p51/p70/39436117.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p6d/p70/39436118.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p89/p70/39436119.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/golovolomka-frukty-i-ovoschi-tsveta-figury-mashinki-ryby-tsifry-karton-116422441/?c=231035300'
  },
  {
    id: 19,
    categoryId: 4,
    likes: 0,
    name: "Yara гель Professional Make Up Clear 20 мл",
    description: "Гель для бровей Yara Professional Make Up Clear — идеальный помощник для создания аккуратного и стильного образа. Его гелевая текстура обеспечивает лёгкое нанесение и надёжную фиксацию, позволяя вашим бровям выглядеть безупречно в течение всего дня.\n" +
      "\n" +
      "✨ Особенности:\n" +
      "\n" +
      "- ✅ Прозрачный оттенок — подходит для любых бровей и стилей.\n" +
      "\n" +
      "- 🛡 Непромокаемая формула — стойкость даже в условиях повышенной влажности.\n" +
      "\n" +
      "- 🎨 Лёгкая текстура — не утяжеляет брови и не оставляет липкости.\n" +
      "\n" +
      "Подходит для тех, кто стремится к естественному и ухоженному виду бровей, будь то для повседневного использования или особых случаев.",
    rating: 4.3,
    price: 477,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pd1/pa6/22360739.jpeg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/pb9/pf8/22360742.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pd1/pa6/22360739.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p23/pfc/22360743.jpeg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/yara-gel-professional-make-up-clear-20-ml-134018802/?c=231035300'
  },
  {
    id: 20,
    categoryId: 4,
    likes: 0,
    name: "DMND спонж скошенный, спонж капля полиуретан 2 шт, розовый",
    description: "Спонж для макияжа идеально наносит и растушёвывает косметическое средство, создавая идеальное покрытие. Прекрасно подходит для профессионального макияжа.",
    rating: 4.3,
    price: 65,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p8d/pfd/45125327.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/pc6/pfd/45125329.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pcd/pff/45125330.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p8d/pfd/45125327.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-rozovyi-104557208/?c=231035300'
  },
  {
    id: 21,
    categoryId: 4,
    likes: 0,
    name: "Round Lab 1025 Dokdo пенка 150 мл",
    description: "Очищающая пенка на основе морской воды мягко и бережно удаляет остатки макияжа и микропыль, которая незаметно оседает на нашем теле, обеспечивая нежное увлажнение, кожа приобретает чистый, здоровый и сияющий вид.В продуктах Round Lab серии 1025 Dokdo Line используется специально обработанная глубокая морская вода из Ulleungdo, содержащая 74 вида безопасных природных минералов, таких как магний, кальций и цинк.",
    rating: 4.6,
    price: 1249,
    image: "https://resources.cdn-kaspi.kz/img/m/p/pca/p77/25826932.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/pca/p77/25826932.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p21/p7e/25826933.jpeg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/p76/p77/25826935.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/round-lab-1025-dokdo-penka-150-ml-105850453/?c=231035300'
  },
  {
    id: 22,
    categoryId: 4,
    likes: 0,
    name: "Top Choice Eyelash adhesive Клей для накладных и пучковых ресниц черный",
    description: "Вы любите разнообразие в образах, обожаете экспериментировать, а потому желаете добавить своим ресничкам длины и объема с помощью накладных пучков? Тогда вам обязательно понадобится качественный клей! Отличным вариантом для этой цели станет замечательный клей для накладных ресниц.",
    rating: 4.5,
    price: 377,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h14/h57/64085640708126.jpg?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h57/64085640708126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h14/h57/64085640708126.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h08/hb4/64085644443678.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/top-choice-eyelash-adhesive-klei-dlja-nakladnyh-i-puchkovyh-resnits-chernyi-102300503/?c=231035300'
  },
  {
    id: 23,
    categoryId: 5,
    likes: 0,
    name: "Вешалка напольная, izox, металл, 110x150 см, черный",
    description: "Напольная металлическая вешалка представляет собой прочную и надёжную конструкцию, способную выдерживать значительный вес одежды. Изготовленная из высококачественного металла, стойка для одежды обеспечивает долговечность и стабильность. Благодаря своему дизайну, рейл не только функционален, но и гармонично вписывается в интерьер любого помещения.\n" +
      "\n" +
      "Одним из основных преимуществ данной вешалки является её вместительность. Она оснащена несколькими перекладинами для размещения различных видов одежды, включая пиджаки, рубашки, платья и даже верхнюю одежду.",
    rating: 4.3,
    price: 4163,
    image: "https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/h60/he1/84668650291230.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hbf/hd4/83825340940318.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h8b/hbb/83825341136926.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/veshalka-napol-naja-izox-metall-110x150-sm-chernyi-113366378/?c=231035300'
  },
  {
    id: 24,
    categoryId: 5,
    likes: 0,
    name: "Матрас ULPA Prime, 160x200x30 см",
    description: "Матрас ULPA Prime — высококачественный ортопедический матрас, обеспечивающий максимальный комфорт и поддержку во время сна. Его уникальная конструкция и современные материалы гарантируют долговечность и безопасность использования.\n" +
      "\n" +
      "✨ Особенности:\n" +
      "- ✅ Двухзонный матрас — возможность выбора жесткости для индивидуального комфорта.\n" +
      "- 🔒 Антибактериальная пропитка — защита от микробов и аллергенов.\n" +
      "- 🌱 Экологичные наполнители — кокосовая койра и latex softgel для оптимальной поддержки.\n" +
      "- 🔥 Противопожарная защита — дополнительная безопасность во время сна.\n" +
      "- 💪 Жесткость выше средней — идеален для тех, кто предпочитает более плотную поддержку.\n" +
      "\n" +
      "Матрас ULPA Prime подходит для всех, кто ценит здоровый сон и высокое качество материалов. Идеален для использования в спальне, на даче или в гостинице.\n" +
      "\n" +
      "Рекомендуем сочетать с качественными подушками и постельным бельем для создания идеальных условий для отдыха.",
    rating:5.0 ,
    price: 42900,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p4a/p7c/107558988.png?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p4a/p7c/107558988.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/hc3/h48/84870614253598.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/pa0/pc1/49479530.png?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/matras-ulpa-prime-160x200x30-sm-115841848/?c=231035300'
  },
  {
    id: 25,
    categoryId: 4,
    likes: 0,
    name: "Диван Morbido Комфорт, 210х80 см, обивка микровелюр, серый",
    description: "Практичный  диван-кровать с легкой системой трансформации. Каркас изготовлен из ЛДСП, деревянный брус. Мягкие элементы выполнены из пенополиуретана. Диван оснащен механизмом трансформации еврокнижка (поднять сидение в верх, подтянуть на себя, спинка подает вперед) такой механизм позволяет легко раскладывать и складывать диван без особых усилий. Благодаря своей универсальности и функциональности, он является идеальным решением для тех, кто ищет удобную и практичную мебель для своего дома.",
    rating: 4.3,
    price: 62898,
    image: "https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=gallery-medium",
    images:[
      'https://resources.cdn-kaspi.kz/img/m/p/p52/p92/88087136.png?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/ha6/h5b/86777038307358.jpg?format=gallery-medium',
      'https://resources.cdn-kaspi.kz/img/m/p/h7f/h30/86777038372894.jpg?format=gallery-medium'
    ],
    link:'https://kaspi.kz/shop/p/morbido-divan-prjamoi-komfort-obivka-mikroveljur-80h210h80-sm-seryi-109382996/?c=231035300'
  },
]
