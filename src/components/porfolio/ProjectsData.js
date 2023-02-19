import projectTodolist from '../../assets/projects/project-todolist.png'
import projectCards from '../../assets/projects/project-cards.png'
import projectAviasales from '../../assets/projects/project-aviasales.png'
import project4Img from '../../assets/projects/project-4.jpg'
import project5Img from '../../assets/projects/project-5.jpg'
import project6Img from '../../assets/projects/project-6.jpg'
import project7Img from '../../assets/projects/project-7.jpg'

export const projectsData = [
    {
        id: '1',
        title: "Todolist",
        projectInfo:
            "Need some were .",
        technologies: "HTML5, CSS3, JS, TS, React,Redux",
        industry: "educational project",
        date: "март-ноябрь, 2022",
        url: {
            name: "https://github.com/irassl/todolist",
            link: "irassl.github.io/todolist",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: projectTodolist,
    },
    {
        id: '2',
        title: "Friday Project Cards",
        projectInfo:
            "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
            name: "https://github.com/JuliOgogo/friday-project",
            link: "https://juliogogo.github.io/friday-project/#/login",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: projectCards,
        sliderImages: [
            "images/projects/project-2.jpg",
            "images/projects/project-5.jpg",
        ],
    },
    {
        id: '3',
        title: "Aviasales Test Frontend",
        projectInfo:
            "Основной frontend проект нашей команды — это страница выдачи билетов со множеством фильтров, настроек и, собственно, билетов. Проект написан на React, поэтому тестовое задание приближено к ежедневным задачам.\n" +
            "\n" +
            "Перед тобой упрощенный макет нашего проекта — список билетов, фильтры и сортировка. Также у нас есть небольшой сервер для тестового задания, который работает схоже с нашим основным backend движком и реализует технику long polling для передачи пачек билетов. Тебе необходимо реализовать клиент, который будет получать случайно сгенерированные билеты от сервера и отрисует интерфейс согласно макету в Figma. Достаточно будет отрендерить 5 первых билетов соотвествующих выбранным фильтрам и сортировки.",
        client: "Ruby Clinton",
        technologies: "HTML5, CSS3, JS, TS, React, Redux",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
            name: "https://github.com/irassl/aviasalesTest",
            link: "https://irassl.github.io/aviasalesTest/",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: projectAviasales,
        sliderImages: [
            "images/projects/project-3.jpg",
            "images/projects/project-5.jpg",
        ],
    },
    {
        id: '4',
        title: "Project Title 4",
        projectInfo:
            "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
            name: "www.example.com",
            link: "https://www.example.com",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: project4Img,
        sliderImages: [
            "images/projects/project-1.jpg",
            "images/projects/project-4.jpg",
        ],
    },
    {
        id: '5',
        title: "Project Title 5",
        projectInfo:
            "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
            name: "www.example.com",
            link: "https://www.example.com",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: project5Img,
        sliderImages: [
            "images/projects/project-1.jpg",
            "images/projects/project-5.jpg",
        ],
    },
    {
        id: '6',
        title: "Project Title 6",
        projectInfo:
            "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
            name: "www.example.com",
            link: "https://www.example.com",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: project6Img,
        sliderImages: [
            "images/projects/project-1.jpg",
            "images/projects/project-5.jpg",
        ],
    },
    {
        id: '7',
        title: "Project Title 7",
        projectInfo:
            "Quidam lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure. Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.",
        client: "Ruby Clinton",
        technologies: "iOS, HTML5, CSS3, PHP, Java",
        industry: "Art & Design",
        date: "July 16, 2019",
        url: {
            name: "www.example.com",
            link: "https://www.example.com",
        },
        socialLinks: {
            facebook: "http://www.facebook.com/",
            twitter: "http://www.twitter.com/",
            google: "http://www.google.com/",
            instagram: "http://www.instagram.com/",
            mail: "mailto:example@gmail.com",
        },
        thumbImage: project7Img,
        sliderImages: [
            "images/projects/project-1.jpg",
            "images/projects/project-5.jpg",
        ],
    },
];