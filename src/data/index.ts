import { Servant, Event, Sermon, Record } from '@/types';

export const servants: Servant[] = [
  // СТАРШІ СЛУЖИТЕЛІ ТА КЕРІВНИЦТВО
  {
    id: 'sergii-musevych',
    name: 'Сергій',
    surname: 'Мусевич',
    nameEn: 'Serhii',
    surnameEn: 'Musevych',
    role: 'Старший служитель',
    roleEn: 'Senior Minister',
    image: '/img/sergii.jpeg',
    bio: 'Сергій Мусевич - старший служитель церкви "Скинія Любові та Істини". Він є адвокатом за професією та має серце для служіння Богу та людям. Під його керівництвом церква активно розвивається та впливає на суспільство.',
    bioEn: 'Serhii Musevych is the senior minister of "Tabernacle of Love and Truth" church. He is a lawyer by profession and has a heart for serving God and people. Under his leadership, the church is actively developing and influencing society.',
    socialMedia: {
      instagram: 'https://www.instagram.com/advokat_sergii_musevych/',
      youtube: 'https://www.youtube.com/@Musevych_Sergii',
      facebook: 'https://www.facebook.com/sergij.musevic.2025'
    }
  },
  {
    id: 'kristina-musevych',
    name: 'Кристина',
    surname: 'Мусевич',
    nameEn: 'Kristina',
    surnameEn: 'Musevych',
    role: 'Помічниця старшого служителя',
    roleEn: 'Senior Minister Assistant',
    image: '/img/kristina.jpg',
    bio: 'Кристина Мусевич працює поруч зі старшим служителем, підтримуючи різні напрямки церковного життя та служіння.',
    bioEn: 'Kristina Musevych works alongside the senior minister, supporting various aspects of church life and ministry.',
    socialMedia: {
      instagram: 'https://www.instagram.com/mysevych_kristina/',
      facebook: 'https://www.facebook.com/kristina.musevic.834326'
    }
  },

  // СТАРІЙШИНИ ТА ДИЯКОНИ
  {
    id: 'anatolii-pereverzyev',
    name: 'Анатолій',
    surname: 'Переверзєв',
    nameEn: 'Anatolii',
    surnameEn: 'Pereverzyev',
    role: 'Старійшина',
    roleEn: 'Elder',
    image: '/img/anatolii.jpeg',
    bio: 'Анатолій Переверзєв служить як старійшина церкви, надаючи мудрість та духовне керівництво спільноті. Має багаторічний досвід у християнському служінні та підтримує духовний розвиток церкви.',
    bioEn: 'Anatolii Pereverzyev serves as a church elder, providing wisdom and spiritual guidance to the community. He has many years of experience in Christian ministry and supports the spiritual development of the church.',
    socialMedia: {}
  },
  {
    id: 'vladislav-kireev',
    name: 'Владислав',
    surname: 'Кіреєв',
    nameEn: 'Vladislav',
    surnameEn: 'Kireev',
    role: 'Старійшина',
    roleEn: 'Elder',
    image: '/img/vlad.jpeg',
    bio: 'Владислав Кіреєв служить як старійшина, підтримуючи духовний розвиток церкви та її членів.',
    bioEn: 'Vladislav Kireev serves as an elder, supporting the spiritual development of the church and its members.',
    socialMedia: {}
  },
  {
    id: 'yurii-gaevskiy',
    name: 'Юрій',
    surname: 'Гаєвський',
    nameEn: 'Yurii',
    surnameEn: 'Gaevskiy',
    role: 'Старійшина',
    roleEn: 'Elder',
    image: '/img/yuri.png',
    bio: 'Юрій Гаєвський має багаторічний досвід служіння як старійшина, надаючи мудрі поради та підтримку.',
    bioEn: 'Yurii Gaevskiy has many years of experience serving as an elder, providing wise counsel and support.',
    socialMedia: {}
  },
  {
    id: 'dmytro-gromenko',
    name: 'Дмитро',
    surname: 'Громенко',
    nameEn: 'Dmytro',
    surnameEn: 'Gromenko',
    role: 'Диякон',
    roleEn: 'Deacon',
    image: '/img/dmytro-gromenko.jpg',
    bio: 'Дмитро Громенко вірно служить як диякон, підтримуючи практичні потреби церкви та її членів.',
    bioEn: 'Dmytro Gromenko faithfully serves as a deacon, supporting the practical needs of the church and its members.',
    socialMedia: {}
  },

  // МУЗИЧНЕ ТА ТВОРЧЕ СЛУЖІННЯ
  {
    id: 'bohdana-musevych',
    name: 'Богдана',
    surname: 'Мусевич',
    nameEn: 'Bohdana',
    surnameEn: 'Musevych',
    role: 'Служіння Левитів',
    roleEn: 'Levites Ministry',
    image: '/img/Bohdana.JPG',
    bio: 'Богдана керує музичним служінням церкви. Для неї музика - це спосіб поклоніння та спілкування з Богом, глибока відповідальність ділитися даром від Господа.',
    bioEn: 'Bohdana leads the church music ministry. For her, music is a way of worship and communication with God, a deep responsibility to share the gift from the Lord.',
    socialMedia: {
      instagram: 'https://www.instagram.com/musevi4ka/',
      facebook: 'https://www.facebook.com/musevic.bogdana'
    }
  },
  {
    id: 'dmytro-davydenko',
    name: 'Дмитро',
    surname: 'Давиденко',
    nameEn: 'Dmytro',
    surnameEn: 'Davydenko',
    role: 'Музичне служіння',
    roleEn: 'Music Ministry',
    image: '/img/dimka.jpg',
    bio: 'Дмитро Давиденко активно бере участь у музичному служінні церкви, використовуючи свій талант для прославлення Бога.',
    bioEn: 'Dmytro Davydenko actively participates in the church music ministry, using his talent to glorify God.',
    socialMedia: {}
  },
  {
    id: 'anna-davydenko',
    name: 'Анна',
    surname: 'Давиденко',
    nameEn: 'Anna',
    surnameEn: 'Davydenko',
    role: 'Музичне служіння',
    roleEn: 'Music Ministry',
    image: '/img/anna.jpg',
    bio: 'Анна Давиденко служить у музичній команді церкви, привносячи красу та гармонію в богослужіння.',
    bioEn: 'Anna Davydenko serves in the church music team, bringing beauty and harmony to worship services.',
    socialMedia: {}
  },

  // МОЛОДІЖНЕ ТА ДИТЯЧЕ СЛУЖІННЯ
  {
    id: 'daniel-zahorodskiy',
    name: 'Даниїл',
    surname: 'Загородський',
    nameEn: 'Daniel',
    surnameEn: 'Zahorodskiy',
    role: 'Молодіжне служіння',
    roleEn: 'Youth Ministry',
    image: '/img/danik.ARW',
    bio: 'Даниїл свідомо прийняв слідування за Ісусом у 9 років. Магістр психології, євангеліст та інженер. Він є світлом для світу, голосом серед шуму та руками для потребуючих.',
    bioEn: 'Daniel consciously accepted following Jesus at age 9. Master of Psychology, evangelist and engineer. He is a light to the world, a voice among the noise and hands for those in need.',
    socialMedia: {
      instagram: 'https://www.instagram.com/daniel_dip_in_jesus/',
      youtube: 'https://www.youtube.com/@DanielMessAge',
      tiktok: 'https://www.tiktok.com/@dipper_entertainment'
    }
  },
  {
    id: 'tina-musevych',
    name: 'Тіна',
    surname: 'Мусевич',
    nameEn: 'Tina',
    surnameEn: 'Musevych',
    role: 'Підліткове служіння',
    roleEn: 'Teen Ministry',
    image: '/img/tina.png',
    bio: 'Тіна Мусевич працює з підлітками церкви, допомагаючи їм знаходити своє місце в Божому царстві. Вона має особливий дар до роботи з молоддю та організовує різноманітні програми для підлітків.',
    bioEn: 'Tina Musevych works with church teenagers, helping them find their place in God\'s kingdom. She has a special gift for working with youth and organizes various programs for teenagers.',
    socialMedia: {
      instagram: 'https://www.instagram.com/m_tinas_/'
    }
  },
  {
    id: 'nazari-sherbachuk',
    name: 'Назарій',
    surname: 'Щербачук',
    nameEn: 'Nazari',
    surnameEn: 'Shcherbachuk',
    role: 'Дитяча школа',
    roleEn: 'Children\'s School',
    image: '/img/Nazari.JPG',
    bio: 'Назарій Щербачук відповідає за дитяче служіння та навчання дітей основам християнської віри.',
    bioEn: 'Nazari Shcherbachuk is responsible for children\'s ministry and teaching children the basics of Christian faith.',
    socialMedia: {
      instagram: 'https://www.instagram.com/nazari_fantasia/',
      facebook: 'https://www.facebook.com/nazar.serbacuk'
    }
  },

  // СПЕЦІАЛЬНІ СЛУЖІННЯ
  {
    id: 'maryan-sobchuk',
    name: 'Мар\'ян',
    surname: 'Собчук',
    nameEn: 'Maryan',
    surnameEn: 'Sobchuk',
    role: 'Веб-служіння',
    roleEn: 'Web Ministry',
    image: '/img/Maryan.JPG',
    bio: 'Мар\'ян Собчук відповідає за цифровий простір церкви, розробку та підтримку веб-ресурсів. Він поєднує технічні навички з серцем для служіння, створюючи платформи для поширення Євангелії онлайн.',
    bioEn: 'Maryan Sobchuk is responsible for the church\'s digital space, development and maintenance of web resources. He combines technical skills with a heart for ministry, creating platforms to spread the Gospel online.',
    socialMedia: {
      instagram: 'https://www.instagram.com/maryansobchuk/'
    }
  },
  {
    id: 'ludmyla-kovalchuk',
    name: 'Людмила',
    surname: 'Ковальчук',
    nameEn: 'Ludmyla',
    surnameEn: 'Kovalchuk',
    role: 'Євангеліст',
    roleEn: 'Evangelist',
    image: '/img/ludmila.jpg',
    bio: 'Людмила Ковальчук активно займається євангелізацією, поширюючи Добру Звістку серед людей.',
    bioEn: 'Ludmyla Kovalchuk is actively involved in evangelization, spreading the Good News among people.',
    socialMedia: {}
  },

  // СОЦІАЛЬНЕ ТА СУСПІЛЬНЕ СЛУЖІННЯ
  {
    id: 'jevgenii-homenko',
    name: 'Євгеній',
    surname: 'Хоменко',
    nameEn: 'Jevgenii',
    surnameEn: 'Homenko',
    role: 'Суспільне служіння',
    roleEn: 'Public Ministry',
    image: '/img/evgen.jpeg',
    bio: 'Євгеній Хоменко координує суспільні ініціативи церкви та взаємодію з громадою. Має серце для служіння суспільству та активно працює над соціальними проектами церкви.',
    bioEn: 'Jevgenii Homenko coordinates the church\'s public initiatives and community engagement. He has a heart for serving society and actively works on the church\'s social projects.',
    socialMedia: {}
  },
  {
    id: 'irina-homenko',
    name: 'Ірина',
    surname: 'Хоменко',
    nameEn: 'Irina',
    surnameEn: 'Homenko',
    role: 'Соціальне служіння',
    roleEn: 'Social Ministry',
    image: '/img/irina-homenko.jpeg',
    bio: 'Ірина Хоменко займається соціальною підтримкою нужденних та організацією благодійних ініціатив.',
    bioEn: 'Irina Homenko is involved in social support for the needy and organizing charitable initiatives.',
    socialMedia: {}
  },

  // МОЛИТОВНЕ СЛУЖІННЯ
  {
    id: 'svitlana-kireeva',
    name: 'Світлана',
    surname: 'Кіреєва',
    nameEn: 'Svitlana',
    surnameEn: 'Kireeva',
    role: 'Молитовне служіння',
    roleEn: 'Prayer Ministry',
    image: '/img/svitlana.png',
    bio: 'Світлана Кіреєва координує молитовне служіння церкви, організовуючи молитовні зустрічі та підтримку. Має глибокий досвід молитовного життя та допомагає іншим зростати в молитві.',
    bioEn: 'Svitlana Kireeva coordinates the church prayer ministry, organizing prayer meetings and support. She has deep experience in prayer life and helps others grow in prayer.',
    socialMedia: {}
  },
  {
    id: 'ludmyla-yasnogurska',
    name: 'Людмила',
    surname: 'Ясногурська',
    nameEn: 'Ludmyla',
    surnameEn: 'Yasnogurska',
    role: 'Служитель молитви за дітей',
    roleEn: 'Children\'s Prayer Minister',
    image: '/img/ludmylayasno.JPG',
    bio: 'Людмила Ясногурська спеціалізується на молитовній підтримці дітей та їхніх сімей.',
    bioEn: 'Ludmyla Yasnogurska specializes in prayer support for children and their families.',
    socialMedia: {
      facebook: 'https://www.facebook.com/antonivnalyuda'
    }
  },

  // СЛУЖІННЯ ПОРЯДКУ ТА АДМІНІСТРАЦІЇ
  {
    id: 'ivanna-gromenko',
    name: 'Іванна',
    surname: 'Громенко',
    nameEn: 'Ivanna',
    surnameEn: 'Gromenko',
    role: 'Служіння правопорядку',
    roleEn: 'Order Ministry',
    image: '/img/ivanna.jpeg',
    bio: 'Іванна Громенко відповідає за порядок та безпеку під час церковних заходів. Вона забезпечує комфортну та безпечну атмосферу для всіх відвідувачів церкви.',
    bioEn: 'Ivanna Gromenko is responsible for order and safety during church events. She ensures a comfortable and safe atmosphere for all church visitors.',
    socialMedia: {}
  },
  {
    id: 'olga-bulak',
    name: 'Ольга',
    surname: 'Булак',
    nameEn: 'Olga',
    surnameEn: 'Bulak',
    role: 'Служіння ОСББ',
    roleEn: 'Housing Association Ministry',
    image: '/img/olga.jpg',
    bio: 'Ольга Булак займається питаннями житлово-комунальних послуг та управління церковною нерухомістю.',
    bioEn: 'Olga Bulak handles housing and utilities issues and church property management.',
    socialMedia: {}
  },

  // ТВОРЧІСТЬ ТА ДИЗАЙН
  {
    id: 'angela-kornichuk',
    name: 'Анджела',
    surname: 'Корнічук',
    nameEn: 'Angela',
    surnameEn: 'Kornichuk',
    role: 'Служіння стилю/дизайну',
    roleEn: 'Style/Design Ministry',
    image: '/img/anjela.jpg',
    bio: 'Анджела Корнічук відповідає за візуальний стиль та дизайн церковних матеріалів і заходів.',
    bioEn: 'Angela Kornichuk is responsible for visual style and design of church materials and events.',
    socialMedia: {
      facebook: 'https://www.facebook.com/anzhelina.korneychuk'
    }
  },
  {
    id: 'svitlana-sobchuk',
    name: 'Світлана',
    surname: 'Собчук',
    nameEn: 'Svitlana',
    surnameEn: 'Sobchuk',
    role: 'Творчість та мистецтво',
    roleEn: 'Creativity and Arts',
    image: '/placeholder-female.jpg',
    bio: 'Світлана Собчук розвиває творчі та мистецькі програми в церкві.',
    bioEn: 'Svitlana Sobchuk develops creative and artistic programs in the church.',
    socialMedia: {}
  },

  // МІЖНАРОДНЕ СЛУЖІННЯ
  {
    id: 'svitlana-pereverzyeva',
    name: 'Світлана',
    surname: 'Переверзєва',
    nameEn: 'Svitlana',
    surnameEn: 'Pereverzyeva',
    role: 'Представник в Ірландії',
    roleEn: 'Representative in Ireland',
    image: '/img/svitlanaper.jpeg',
    bio: 'Світлана Переверзєва представляє церкву в Ірландії, підтримуючи зв\'язки з українською діаспорою. Активно працює з українськими іммігрантами, надаючи духовну підтримку та допомогу в адаптації.',
    bioEn: 'Svitlana Pereverzyeva represents the church in Ireland, maintaining connections with the Ukrainian diaspora. She actively works with Ukrainian immigrants, providing spiritual support and assistance in adaptation.',
    socialMedia: {}
  },
  {
    id: 'yahruhin-family',
    name: 'Максим та Альона',
    surname: 'Яхругін',
    nameEn: 'Maksym and Alona',
    surnameEn: 'Yahruhin',
    role: 'Служіння в США',
    roleEn: 'Ministry in USA',
    image: '/img/family.jpeg',
    bio: 'Сім\'я Яхругін служить в США, поширюючи євангелію серед українських іммігрантів.',
    bioEn: 'The Yahruhin family serves in the USA, spreading the gospel among Ukrainian immigrants.',
    socialMedia: {}
  },

  // ПРАВОВЕ ТА КОНСУЛЬТАТИВНЕ СЛУЖІННЯ
  {
    id: 'mykola-sobchuk',
    name: 'Микола',
    surname: 'Собчук',
    nameEn: 'Mykola',
    surnameEn: 'Sobchuk',
    role: 'Адвокат Церкви',
    roleEn: 'Church Lawyer',
    image: '/placeholder-male.jpg',
    bio: 'Микола Собчук надає правову підтримку та консультації з юридичних питань церкви. Поєднує професійний досвід юриста з серцем служителя, захищаючи інтереси церкви та її членів.',
    bioEn: 'Mykola Sobchuk provides legal support and consultation on church legal matters. He combines professional legal experience with the heart of a minister, protecting the interests of the church and its members.',
    socialMedia: {}
  },

  // СПЕЦІАЛЬНІ СЛУЖІННЯ
  {
    id: 'yurii-pastuh',
    name: 'Юрій',
    surname: 'Пастух',
    nameEn: 'Yurii',
    surnameEn: 'Pastuh',
    role: 'Служіння народу Ізраїля',
    roleEn: 'Ministry to Israel',
    image: '/img/yurii.jpg',
    bio: 'Юрій Пастух займається особливим служінням, пов\'язаним з народом Ізраїля та єврейськими традиціями.',
    bioEn: 'Yurii Pastuh is involved in special ministry related to the people of Israel and Jewish traditions.',
    socialMedia: {}
  }
];

export const events: Event[] = [
  // Наразі немає запланованих подій
  // No events planned at the moment
];

export const sermons: Sermon[] = [
  {
    id: 'faith-that-moves-mountains',
    title: 'Віра, що пересуває гори',
    description: 'Потужна проповідь про силу віри та як вона може змінити наше життя. Дізнайтесь, як розвивати непохитну довіру до Бога.',
    youtubeId: 'dQw4w9WgXcQ',
    speaker: 'Іван Петров',
    date: '2024-11-10',
    thumbnail: '/sermons/faith-mountains.jpg'
  },
  {
    id: 'gods-love-never-fails',
    title: 'Божа любов ніколи не перестає',
    description: 'Дослідження безумовної любові Бога та як вона впливає на наші стосунки з іншими людьми.',
    youtubeId: 'dQw4w9WgXcQ',
    speaker: 'Марія Коваленко',
    date: '2024-11-03',
    thumbnail: '/sermons/gods-love.jpg'
  },
  {
    id: 'purpose-driven-life',
    title: 'Життя з метою',
    description: 'Як знайти свою мету в Божому плані та жити наповненим життям, служачи Царству Божому.',
    youtubeId: 'dQw4w9WgXcQ',
    speaker: 'Андрій Ткачук',
    date: '2024-10-27',
    thumbnail: '/sermons/purpose-life.jpg'
  }
];

export const records: Record[] = [
  {
    id: 'sunday-2025-08-03',
    title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ | ЗІБРАННЯ ЦЕРКВИ',
    date: '2025-08-03',
    speaker: 'Служителі',
    description: '',
    videoUrl: 'h3cidbX05Ak',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-27',
    title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ| ЗІБРАННЯ ЦЕРКВИ',
    date: '2025-07-27',
    speaker: 'Служителі',
    description: '',
    videoUrl: 'qDJ_MK0OEDk',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-27-daniel-zahorodskiy',
    title: 'СУТЬ ЦАРСТВА БОЖОГО',
    date: '2025-07-27',
    speaker: 'Даниїл Загородський',
    description: '',
    videoUrl: '6oBiGVWMpm8',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-27-sergii-musevych',
    title: 'ПОДЯКА, НАРОДЖЕНА ПРОЗРІННЯМ',
    date: '2025-07-27',
    speaker: 'Сергій Мусевич',
    description: '',
    videoUrl: 'IJ1CMkvw_Cc',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-27-yurii-pastuh',
    title: 'ВОДНЕ ХРЕЩЕННЯ ДЛЯ СВІДОМИХ ВІРУЮЧИХ',
    date: '2025-07-27',
    speaker: 'Юрій Пастух',
    description: '',
    videoUrl: 'ZJifiIrpwV4',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-20',
    title: 'НЕДІЛЬНЕ ЗІБРАННЯ | БОГОСЛУЖІННЯ СПІЛЬНОТИ',
    date: '2025-07-20',
    speaker: 'Служителі',
    description: '',
    videoUrl: 'OqskVYZNphE',
    category: 'Богослужіння'
  },
  {
    id: 'sunday-2025-07-20-liudmyla-kovalchuk',
    title: 'Справжнє щастя — повернутись до Джерела',
    date: '2025-07-20',
    speaker: 'Людмила Ковальчук',
    description: '',
    videoUrl: 'nWyMZd3xwOA',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-20-sergii-musevych',
    title: 'ПОДЯКА, НАРОДЖЕНА ПРОЗРІННЯМ',
    date: '2025-07-20',
    speaker: 'Сергій Мусевич',
    description: '',
    videoUrl: 'z8jtEE4YnRI',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-20-nazari-sherbachuk',
    title: 'Стань гілкою, з якої видно Ісуса',
    date: '2025-07-20',
    speaker: 'Назарій Щербачук',
    description: '',
    videoUrl: '7j9RTBW6Qwc',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-13-7-oznak',
    title: '7 ОЗНАК В ЛЮДЯХ, ЩО ГОТОВІ ВСТУПАТИ В ЗАПОВІТ З БОГОМ ЧЕРЕЗ ВОДНЕ ХРЕЩЕННЯ',
    date: '2025-07-13',
    speaker: 'Сергій Мусевич',
    description: '',
    videoUrl: 'ZoCbCSUFzo4',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-13',
    title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ ГРОМАДИ',
    date: '2025-07-13',
    speaker: 'Служителі',
    description: '',
    videoUrl: 'J08--y9k3HQ',
    category: 'Богослужіння'
  },
  {
    id: 'sunday-2025-07-06-sergii-musevych',
    title: 'ХОЧЕШ ВИГРАТИ СВОЮ БИТВУ? ВДЯГНИ ОБЛАДУНКИ ВОЇНА…',
    date: '2025-07-06',
    speaker: 'Сергій Мусевич',
    description: '',
    videoUrl: 'q-d-i5IvM30',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-06-liudmyla-kovalchuk',
    title: 'БОГ БІЛЬШИЙ МОГО СМУТКУ…',
    date: '2025-07-06',
    speaker: 'Людмила Ковальчук',
    description: '',
    videoUrl: 'KDhUaWdiQbo',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-06-yurii-pastuh',
    title: 'ВАЖЛИВІСТЬ ЗАВІТУ МІЖ БОГОМ І ЛЮДЬМИ',
    date: '2025-07-06',
    speaker: 'Юрій Пастух',
    description: '',
    videoUrl: 'j9Tuj5w0Ue4',
    category: 'Проповідь'
  },
  {
    id: 'sunday-2025-07-06',
    title: 'НЕДІЛЬНЕ #БОГОСЛУЖІННЯ #ЗІБРАННЯ #СЛУЖІННЯ',
    date: '2025-07-06',
    speaker: 'Служителі',
    description: '',
    videoUrl: '41kCF6MWmZc',
    category: 'Богослужіння'
  },
  {
    id: 'questions-and-answers',
    title: 'ПИТАННЯ та ВІДПОВІДІ НА СІМЕЙНУ ТЕМАТИКУ',
    date: '2025-06-29',
    speaker: 'Сергій Мусевич',
    description: '',
    videoUrl: 'DGHW-v-_xcM?',
    category: 'Питання'
  },
  {
    id: 'family-balance',
    title: 'ЗДОРОВИЙ БАЛАНС СІМʼЇ в ЦЕРКВІ',
    date: '2025-06-29',
    speaker: 'Анатолій Переверзєв',
    description: '',
    videoUrl: 'bS0MpaRKVOI',
    category: 'Сімʼя'
  },
  {
    id: 'family-are-we',
    title: 'СІМʼЯ - це МИ, а не Я і Я',
    date: '2025-06-29',
    speaker: 'Сергій Мусевич',
    description: '',
    videoUrl: 'tQ5ATRDMZP8',
    category: 'Сімʼя',
  },
  {
    id: 'sunday-2025-06-29',
    title: 'НЕДІЛЬНЕ БОГОСЛУЖІННЯ ЦЕРКВИ',
    date: '2025-06-29',
    speaker: 'Служителі',
    description: '',
    videoUrl: 'EKu6oQN1910',
    category: 'Богослужіння',
  },
  {
    id: 'sunday-2025-06-22',
    title: 'НЕДІЛЬНЕ ЗІБРАННЯ ПРИСВЯЧЕНО СІМʼЇ',
    date: '2025-06-22',
    speaker: 'Служителі',
    description: '',
    videoUrl: 'rQ_8SX5AGC0',
    category: 'Богослужіння',
  }
];
