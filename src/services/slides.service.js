const defaultSlides = [
    {
        headlineFirstLine: "Demoooo",
        headlineSecondLine: "Image",
        sublineFirstLine: "Led by passion",
        sublineSecondLine: " Zenika",
        bgImg: "./img/sw2.png",
        rectImg: "./img/sw2.png",
        content: "image",
        props: {
            src: "img/zenikanard.png",
        }
    },
    {
        headlineFirstLine: "Demo",
        headlineSecondLine: "IFRAME",
        sublineFirstLine: "Led by passion",
        sublineSecondLine: " Zenika",
        bgImg: "./img/sw2.png",
        rectImg: "./img/sw2.png",
        content: "iframe",
        props: {
            height: '50vh',
            width: 'auto',
            top: '10vh',
            left: '10vh',
            src: "https://www.meetup.com/fr-FR/Zenika-Montreal/events/past/",
        }
    },
    {
        headlineFirstLine: "Design",
        headlineSecondLine: "Sprint",
        sublineFirstLine: "Sprint",
        sublineSecondLine: " Zenika",
        bgImg: "./img/sw2.png",
        rectImg: "./img/sw2.png",
        content: "iframe",
        props: {
            height: '50vh',
            width: 'auto',
            top: '10vh',
            left: '10vh',
            src: "https://docs.google.com/presentation/d/19-QA-2IqBpYUNRnpBd7PWySpU6gGIJi3XZmoSOduOGg/preview?slide=id.g45f9f7de9d_2_0",
        }
    },
    {
        headlineFirstLine: "Demo",
        headlineSecondLine: "Twitter",
        sublineFirstLine: "Il n'y a rien de neuf sous",
        sublineSecondLine: " le soleil",
        bgImg: "./img/sw4.jpg",
        rectImg: "./img/sw4.jpg",
        content: "twitter",
        props: {
            twitterName: 'AurelienLoyer',
        }
    },
    {
        headlineFirstLine: "Demo",
        headlineSecondLine: "Contest",
        sublineFirstLine: "Il n'y a rien de neuf sous",
        sublineSecondLine: "le soleil",
        bgImg: "./img/sw3.jpg",
        rectImg: "./img/sw3-1.jpg",
        content: "contest",
    },
    {
        headlineFirstLine: "Demo",
        headlineSecondLine: "Youtube",
        sublineFirstLine: "Join the",
        sublineSecondLine: " zLife",
        bgImg: "./img/sw6.jpg",
        rectImg: "./img/sw6.jpg",
        content: "youtube",
        props: {
            src: "https://www.youtube.com/embed/b_Gh5YIzs9o?list=PLQBUm8bePdvYOBJ_vyUVNeRPThdEECiqr&autoplay=1&mute=1&loop=1&controls=0",
        }
    },
    {
        headlineFirstLine: "Demo",
        headlineSecondLine: "Speakers",
        sublineFirstLine: "Aurelien Loyer",
        sublineSecondLine: "Anna Filina",
        bgImg: "./img/sw1.jpg",
        rectImg: "./img/sw1.jpg",
        content: "speakers",
        props: {
            speakers: [
                {
                    firstname: 'Aurélien',
                    lastname: 'LOYER',
                    twitter: 'AurelienLoyer',
                    picture: 'img/trooper2.png',
                    job: 'CTO | Consultant Web',
                    talk: 'Tout le monde sait comment utiliser Angular / React / Vue.js ...',
                    talk_description: 'Aujourd’hui tout le monde connait les frameworks Angular, React Vuejs, mais savez-vous utiliser Javascript ? Savez-vous ...',
                    talk_date: '15 mars 2019',
                    talk_time: '13:00',
                },
                {
                    firstname: 'Anna',
                    lastname: 'FILINA',
                    twitter: 'afilina',
                    picture: 'img/maul4.png',
                    job: 'IT Project Rescue',
                    talk: `Writing Better Gherkin Scenarios`,
                    talk_description: 'Are your feature files gigantic and unreadable? Do they break every time you add a database column or change a completely ...',
                    talk_date: '14 mars 2019',
                    talk_time: '15:00',
                }
            ]
        }
    },
];

// export default [];
export default defaultSlides;