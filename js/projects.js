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
            en: "This is a landing page for internet store. This page has responsive desigh and includes several sliders and countdown timer. In mobile mode menu dropdown and accordion are implemented. Production version is optimized. WEBP picture format is included.",
            ru: "Этот проект - лендинг для рекламной акции интернет магазина. Страница адаптивная, включает в себя несколько слайдеров и таймер обратного отсчёта. В мобильной версии добавлены выпадающее меню и аккордеон. Продакшн версия оптимизирована. Добавлен формат изображений WEBP.",
            ua: "Ця сторінка - лендінг для рекламної акції інтернет магазину. Сторінка адаптивна, включає в себе декілька слайдерів і таймер зворотнього відліку. у мобільній версії додані випадаюче меню та акордион. Сторінка оптимізована. Додан формат зображень WEBP."
        },
        usedTechs: ["html5","css","sass","jquery","slick","gulp"],
        codeLink: "https://github.com/Oleksii-Tkachenko/Fashionshop"
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
            en: "This is a training project which deals with React app development. It includes restaurant menu layout. Dishes are received from json server. There is a possibility to filter dishes by category and calculate total bill amount.",
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
            en: "This is an interactive pie chart constructor. It based on SVG technology especially on <animate> tag. With this module you may construct pie chart you like and name it.",
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
            en: "This is a landing page which contains form and questionnaire. 'Country' and 'phone' fields are prefilled automatically by detecting your current location. After anwering first and last question it sends POST request to server with form data and answers.",
            ru: "Это целевая страница, которая содержит форму и опросник. Поля 'country' и 'phone' заполняются автоматически при помощи сервиса определения местоположения. После ответов на первый и последний вопросы выполняется 'POST' запрос на сервер с содержимым формы и ответами на вопросы.",
            ua: "Це цільова сторінка, яка включає форму і анкету. Поля 'country' и 'phone' заповнюються автоматично за допомогою сервісу визначення місцезнаходження. Після відповідей на перше і останнє питання виконується 'POST' запит на сервер з вмістом форми та відповідями на питання."
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
            en: "This web page is a small online store. It uses prebild solutions from several libraries based on jQuery for form validation, mailer, slider, animation etc. Also map is appended with Google Maps API.",
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
            en: "This is a landing page for taxi service. Front page is available only.",
            ru: "Это первая страничка многостраничного сервиса для такси.",
            ua: "Це перша сторінка таксі сервісу."
        },
        usedTechs: ["html5", "sass", "js"]
    }

];

export default projects;