const projects = [
    {   
        projName: {
            en: "Fashion Shop Boutique",
            ru : "Fashion Shop Boutique",
            ua : "Fashion Shop Boutique"
        },
        projType: {
            en: "Landing Page",
            ru: "лендинг",
            ua: "лендінг"
        },
        projLogo: "img/projects/fashionshop.jpg",
        projLink: "projects/fashionshop/index.html",
        projDescr: {
            en: "This is a landing page for an internet store. This page has a responsive design and includes several sliders and a countdown timer. In mobile mode menu dropdown and accordion are implemented. The production version is optimized. The WEBP picture format is included.",
            ru: "Этот проект - лендинг для рекламной акции интернет магазина. Страница адаптивная, включает в себя несколько слайдеров и таймер обратного отсчёта. В мобильной версии добавлены выпадающее меню и аккордеон. Продакшн версия оптимизирована. Добавлен формат изображений WEBP.",
            ua: "Ця сторінка - лендінг для рекламної акції інтернет магазину. Сторінка адаптивна, включає в себе декілька слайдерів і таймер зворотнього відліку. У мобільній версії додані випадаюче меню та акордион. Сторінка оптимізована. Додан формат зображень WEBP."
        },
        usedTechs: ["html5","css","sass","jquery","slick","gulp"],
        codeLink: "https://github.com/Oleksii-Tkachenko/Fashionshop"
    },

    {
        projName: {
            en: "Restaurant",
            ru: "Ресторан",
            ua: "Ресторан"
        },
        projType: {
            en: "Landing Page",
            ru: "лендинг",
            ua: "лендінг"
        },
        projLogo: "img/projects/foody.jpg",
        projLink: "projects/foody/index.html",
        projDescr: {
            en: "This is a landing page for a food restaurant. It has a responsive design. In mobile mode, a menu dropdown is implemented.",
            ru: "Это целевая страница для ресторана. Она адаптирована под мобильные устройства. В мобильной версии добавлено выпадающее меню.",
            ua: "Це цільова сторінка для ресторану. Вона адаптована під мобільні пристрої. У мобільній версії додане випадаюче меню."
        },
        usedTechs: ["html5", "css", "sass", "bem"]
    },

    {
        projName: {
            en: "Healthy Food",
            ru: "Здоровое питание",
            ua: "Здорове харчування"
        },
        projType: {
            en: "Landing Page",
            ru: "лендинг",
            ua: "лендінг"
        },
        projLogo: "img/projects/healthyfood.jpg",
        projLink: "projects/healthyfood/index.html",
        projDescr: {
            en: "This is a landing page for a food delivery service. This page has responsive design and includes slider, tabs, forms, product cards, countdown timer, and calories calculator.",
            ru: "Этот проект - целевая страница для сервиса доставки здоровой еды. Страница адаптирована под мобильные устройства и содержит слайдер, табы, формы обратной связи, продуктовые карточки, таймер обратного отсчёта и калькулятор калорий.",
            ua: "Цей проект - цільова сторінка для сервісу доставки здорової їжи. Сторінка адаптована під мобільні пристрої та включає в себе слайдер, таби, форми зворотнього зв'язку, продуктові картки, таймер зворотнього відліку та калькулятор калорій."
        },
        usedTechs: ["html5", "css", "js", "webpack"]
    },

    {   
        projName: {
            en : "Restaurant menu",
            ru : "Меню ресторана",
            ua : "Ресторанне меню"
        },
        projType: {
            en: "React App",
            ru: "React приложение",
            ua: "React застосунок"
        },
        projLogo:"img/projects/restmenu.jpg",
        projLink: "projects/restmenu/index.html",
        projDescr: {
            en: "This is a training project which deals with React app development. It includes the restaurant menu layout. Dishes received from the JSON server. There is a possibility to filter dishes by category and calculate the total bill amount.",
            ru: "Это учебный проект по разработке на React. Он включает ресторанное меню с возможностью фильтрации блюд по категориям и получения общего счёта. Блюда загружаются с JSON сервера.",
            ua: "Це учбовий проект по розробці на React. Він включає ресторанне меню з можливістю фільтрації страв по категоріях та отримання суми замовлення. Страви завантажуються з JSON сервера."
        },
        usedTechs: ["js", "react", "redux", "sass"],
        codeLink: "https://github.com/Oleksii-Tkachenko/Restaurant-Menu"
    },

    {
        projName: {
            en: "Pie chart constructor",
            ru: "Конструктор круговых диаграмм",
            ua: "Конструктор секторних діаграм"
        },
        projType: {
            en: "Module",
            ru: "Модуль",
            ua: "Модуль"
        },
        projLogo: "img/projects/Pie-chart.jpg",
        projLink: "https://codepen.io/AlexeiTk/pen/yLJMEVK",
        projDescr: {
            en: "This is an interactive pie chart constructor. It is based on SVG technology, especially on <animate> tag. With this module, you may construct the pie chart you like and name it.",
            ru: "Этот модуль представляет собой интерактивный конструктор круговых диаграмм. Он базируется на технологии SVG. В особенности, применён тег <animate>. Этот модуль позволяет конструировать и называть круговые диаграммы.",
            ua: "Цей модуль являє собою інтерактивний конструктор секторних діаграм. Він базується на технології SVG. Зокрема, тег <animate> примінений для інтерактивості. Цей модуль дозволяє конструювати і називати секторні діаграми."
        },
        usedTechs: ["html5", "sass", "js", "svg"],
        codeLink: "https://codepen.io/AlexeiTk/pen/yLJMEVK"
    },

    {
        projName: {
            en: "Tradenet Plus",
            ru: "Tradenet Plus",
            ua: "Tradenet Plus"
        },
        projType: {
            en: "Landing Page",
            ru: "лендинг",
            ua: "лендінг"
        },
        projLogo: "img/projects/tradenet.jpg",
        projLink: "projects/tradenet/index.html",
        projDescr: {
            en: "This is a landing page that contains form and questionnaire. 'Country' and 'phone' fields are prefilled automatically by detecting your current location. Fill the form to start the questionnaire. After answering the first and last question it sends a POST request to the server with form data and answers.",
            ru: "Это целевая страница, которая содержит форму и опросник. Поля 'country' и 'phone' заполняются автоматически при помощи сервиса определения местоположения. После заполнения формы стартует опросник. После ответов на первый и последний вопросы выполняется 'POST' запрос на сервер с содержимым формы и ответами на вопросы.",
            ua: "Це цільова сторінка, яка включає форму і анкету. Поля 'country' и 'phone' заповнюються автоматично за допомогою сервісу визначення місцезнаходження. Після заповнення форми стартеє анката. Після відповідей на перше і останнє питання виконується 'POST' запит на сервер з вмістом форми та відповідями на питання."
        },
        usedTechs: ["html5", "sass", "bootstrap", "js", "jquery", "bem", "gulp"],
        codeLink: "https://github.com/Oleksii-Tkachenko/Tradenet-Plus"
    },

    {
        projName: {
            en: "Run Smart",
            ru: "Run Smart",
            ua: "Run Smart"
        },
        projType: {
            en: "Online Store",
            ru: "интернет магазин",
            ua: "інтернет магазин"
        },
        projLogo: "img/projects/pulsometer.jpg",
        projLink: "projects/pulse/index.html",
        projDescr: {
            en: "This web page is a small online store. It uses prebuilt solutions from several libraries based on jQuery for form validation, mailer, slider, animation, etc. Also, the map appended with Google Maps API.",
            ru: "Это страничка небольшого интернет магазина. В ней использованы готовые решения из нескольких библиотек на основе jQuery для проверки форм, отправки email, слайдера, анимации и т.д. Также добавлена карта с помощью Google Maps API.",
            ua: "Це сторінка невеликого інтернет магазину. У ній задіяні готові рішення з декількох бібліотек на основі jQuery для перевірки форм, відправлення email, слайдера, анімації тощо. Також додана мапа за допомогою Google Maps API."
        },
        usedTechs: ["html5", "sass", "jquery", "slick", "gulp"],
        codeLink: "https://github.com/Oleksii-Tkachenko/Pulsometer-landing"
    },

    {
        projName: {
            en: "Uber",
            ru: "Uber",
            ua: "Uber"
        },
        projType: {
            en: "Landing Page",
            ru: "лендинг",
            ua: "лендінг"
        },
        projLogo: "img/projects/uber.jpg",
        projLink: "projects/uber/index.html",
        projDescr: {
            en: "This is a landing page for the taxi service. Frontpage is available only.",
            ru: "Это первая страничка многостраничного сервиса для такси.",
            ua: "Це перша сторінка таксі сервісу."
        },
        usedTechs: ["html5", "bootstrap", "sass", "js"]
    },

    {
        projName: {
            en: "IRVAS Windows",
            ru: "ИРВАС окна",
            ua: "ІРВАС вікна"
        },
        projType: {
            en: "Landing Page",
            ru: "лендинг",
            ua: "лендінг"
        },
        projLogo: "img/projects/window.jpg",
        projLink: "projects/window/index.html",
        projDescr: {
            en: "This is a landing page for window construction service. It has sliders, forms, tabs, timer, questionnaire, etc.",
            ru: "Это целевая страничка предприятия по изготовлению оконных систем. На ней присутствуют слайдеры, формы, табы, таймер, опросник и.т.д.",
            ua: "Це перша сторінка підприємства з виробництва віконних систем. На ній присутні слайдери, форми, таби, таймер, анкета тощо."
        },
        usedTechs: ["html5", "bootstrap", "css", "js", "webpack", "slick"]
    },

    {
        projName: {
            en: "Childhood World",
            ru: "Мир детства",
            ua: "Світ дитинства"
        },
        projType: {
            en: "Online Store",
            ru: "интернет магазин",
            ua: "інтернет магазин"
        },
        projLogo: "img/projects/childhood.jpg",
        projLink: "projects/childhood/index.php",
        projDescr: {
            en: "This website represents a small toy online store. It is a WordPress training project. It included embedding layout into WordPress theme and configuring CMS for having dynamic posts and pages.",
            ru: "Это сайт небольшого интернет магазина игрушек. Он создан для тренировки посадки готовой вёрстки на WordPress. Работа включала создание темы, настройку базы данных и CMS для создания динамических постов и страниц.",
            ua: "Це сайт маленького інтернет магазину іграшок. Він був створений з метою тренування посадки готової верстки на WordPress. Робота складала створення теми, налаштування бази даних і CMS для створення динамічних постів та сторінок."
        },
        usedTechs: ["html5", "bootstrap", "css", "js", "wordpress"]
    }

];

export default projects;