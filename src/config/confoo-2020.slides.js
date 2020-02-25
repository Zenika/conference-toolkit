const confoo2020Slides = [
    {
        headlineFirstLine: "",
        headlineSecondLine: "Zlife",
        isHeadlineVisible: true,
        sublineFirstLine: "",
        sublineSecondLine: "",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        logoImg: "./img/zenikanard-confoo-2020.png",
        content: "youtube",
        props: {
            width: "60vw",
            src: "https://www.youtube.com/embed/b_Gh5YIzs9o?list=PLQBUm8bePdvYOBJ_vyUVNeRPThdEECiqr&autoplay=1&mute=1&loop=1&controls=0"
        }
    },
    {
        headlineFirstLine: "Si tu rejoins",
        headlineSecondLine: "Zenika",
        isHeadlineVisible: true,
        sublineFirstLine: "",
        sublineSecondLine: "",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        logoImg: "./img/zenikanard-confoo-2020.png",
        content: "image",
        props: {
            width: "55vw",
            top: "9vh",
            right: "9vh",
            src: "./img/nous-rejoindre.jpeg"
        },
        isDisabled: true
    },
    {
        headlineFirstLine: "",
        headlineSecondLine: "Twitter",
        isHeadlineVisible: true,
        sublineFirstLine: "",
        sublineSecondLine: "",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        logoImg: "./img/zenikanard-confoo-2020.png",
        content: "twitter",
        props: {
            width: "40vw",
            twitterName: "ZenikaMontreal"
        },
        isDisabled: false
    },
    {
        headlineFirstLine: "Les meetups",
        headlineSecondLine: "qu'on sponsorise",
        isHeadlineVisible: true,
        sublineFirstLine: "",
        sublineSecondLine: "",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        logoImg: "https://www.stickpng.com/assets/images/584c57c01fc21103bb375bae.png",
        content: "meetups",
        props: {
            meetups: [
                {
                    name: 'Software Crafters Montréal',
                    logo: './img/meetup_software-craft.jpeg',
                    next: {
                       title: 'Monthly community meetup',
                       date: 'Mercredi 4 mars',
                        time: '18:30'
                    }
                },
                {
                    name: 'P.O.S.S - Le Product Owner Safe Space',
                    logo: './img/meetup_poss.jpeg',
                },
                {
                    name: 'MTL React & React Native Monthly Meetup',
                    logo: './img/meetup_reactjs-mtl.png',
                },
            ],
        },
        isDisabled: false
    },
    {
        headlineFirstLine: "Formations &",
        headlineSecondLine: "Expertises",
        isHeadlineVisible: true,
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        logoImg: "./img/zenikanard-confoo-2020.png",
        content: "image",
        props: {
            width: "55vw",
            top: "6vh",
            right: "9vh",
            src: "./img/formations.png"
        },
        isDisabled: true
    },
    {
        headlineFirstLine: "Photo Booth",
        isHeadlineVisible: true,
        logoImg: "./img/zenikanard-confoo-2020.png",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        content: "contest",
        props: {
            contest1Title: "Concourez pour gagner une console",
            contest1Content: "",
            contest1SubContent: "@ZenikaMontreal #confo2020",
            contest2Image: "./img/concours_photobooth.png",
        },
    },
    {
        headlineFirstLine: "Scan and",
        headlineSecondLine: "Give",
        isHeadlineVisible: true,
        sublineFirstLine: "La Maison Bleue",
        sublineSecondLine: "Carbone Boréal",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        logoImg: "./img/zenikanard-confoo-2020.png",
        content: "image",
        props: {
            width: "55vw",
            top: "9vh",
            right: "9vh",
            src: "./img/scan_and_give.png"
        },
        isDisabled: true
    },
    {
        headlineFirstLine: "Confoo",
        headlineSecondLine: "Speakers",
        sublineFirstLine: "Nicolas Cuillery",
        sublineSecondLine: "Anna Filina",
        logoImg: "./img/zenikanard-confoo-2020.png",
        bgImg: "./img/background-2-confoo-2020.png",
        rectImg: "./img/background-2-confoo-2020.png",
        content: "speakers",
        props: {
            speakers: [
                {
                    firstname: 'Nicolas',
                    lastname: 'CUILLERY',
                    twitter: 'ncuillery',
                    picture: 'img/nicolas_cuillery.png',
                    job: 'CTO | Consultant Web',
                    talk: 'Flutter: One framework to rule them all',
                    talk_description: 'Flutter is a new framework made by Google to build cross-platform application. Despite well-established competitors such as Ionic, React Native, Xamarin, etc., the growth and the adoption of Flutter is stunning.',
                    talk_date: '26 février 2020',
                    talk_time: '14:15',
                },
                {
                    firstname: 'Anna',
                    lastname: 'FILINA',
                    twitter: 'afilina',
                    picture: 'img/anna_filina.png',
                    job: 'IT Project Rescue',
                    talk: 'PHP Best Practices',
                    talk_description: 'Am I making a mistake? Is this the right decision in the long term? Join me as I show PHP code of over 10 years. I\'ll explain what worked well, what didn\'t and why.',
                    talk_date: '26 février 2020',
                    talk_time: '15:15',
                }
            ]
        }
    },
];

// export default [];
export default confoo2020Slides;
