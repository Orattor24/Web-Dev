import { Category } from '../models/category.model';
import { Product } from '../models/product.model'

export const categories: Category[] = [
  { id: 1, name: 'Technocs'},
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
]
