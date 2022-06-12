import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export const newsData = [
    {
        newsID: 1,
        imageURL: require('../assets/images/ars-5-1-eve.jpg'),
        league: "English Premier League",
        view: 10000,
        title: "Arsenal 5-1 Everton: Emphatic victory",
        publishedDate: "21/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 2,
        imageURL: require('../assets/images/mci-3-2-avl.jpg'),
        league: "English Premier League",
        view: 12000,
        title: "Man City 3-2 Aston Villa: Dramatic Day",
        publishedDate: "23/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 3,
        imageURL: require('../assets/images/bre-1-2-lee.jpg'),
        league: "English Premier League",
        view: 9000,
        title: "Brentford 1-2 Leeds: Survival Celebration",
        publishedDate: "22/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 4,
        imageURL: require('../assets/images/bha-3-1-whu.jpg'),
        league: "English Premier League",
        view: 9100,
        title: "Brighton 3-1 West Ham: All hopes end",
        publishedDate: "22/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 5,
        imageURL: require('../assets/images/bur-1-2-new.jpg'),
        league: "English Premier League",
        view: 8100,
        title: "Burnley 1-2 Newcastle: Relegated from EPL",
        publishedDate: "20/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 6,
        imageURL: require('../assets/images/pal-1-0-mnu.jpg'),
        league: "English Premier League",
        view: 12000,
        title: "Crystal Palace 1-0 Man Utd: Securing UEL slot",
        publishedDate: "20/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 7,
        imageURL: require('../assets/images/rma-0-0-bet.jpg'),
        league: "La Liga Santanders",
        view: 15000,
        title: "Real Madrid 0-0 Betis: Winners' Respect",
        publishedDate: "22/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 8,
        imageURL: require('../assets/images/rso-1-2-alt.jpg'),
        league: "La Liga Santanders",
        view: 8000,
        title: "Sociedad 1-2 Atletico: Secure third position",
        publishedDate: "29/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 9,
        imageURL: require('../assets/images/bar-0-2-vil.jpg'),
        league: "La Liga Santanders",
        view: 10000,
        title: "Barcelona 0-2 Villareal: Bad loss at home",
        publishedDate: "24/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 10,
        imageURL: require('../assets/images/fio-2-0-juv.jpg'),
        league: "Serie A",
        view: 8000,
        title: "Fiorentina 2-0 Juventus: Season loss",
        publishedDate: "22/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 11,
        imageURL: require('../assets/images/int-3-0-sam.jpg'),
        league: "Serie A",
        view: 9000,
        title: "Inter 3-0 Sampdoria: Win is not enough",
        publishedDate: "23/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 12,
        imageURL: require('../assets/images/sas-0-3-acm.jpg'),
        league: "Serie A",
        view: 9500,
        title: "Sassuolo 0-3 Milan: Rossoneri's Crown",
        publishedDate: "25/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 13,
        imageURL: require('../assets/images/bvb-2-1-hbsc.jpg'),
        league: "Bundesliga",
        view: 9500,
        title: "Borussia Dortmund 2-1 Hertha Berlin: Last goal of Haaland for BVB",
        publishedDate: "21/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 14,
        imageURL: require('../assets/images/wol-2-2-bay.jpg'),
        league: "Bundesliga",
        view: 9600,
        title: "Wolfsburg 2-2 Bayern Munich: Bundesliga champions",
        publishedDate: "22/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 15,
        imageURL: require('../assets/images/bmg-5-1-tsg.jpg'),
        league: "Bundesliga",
        view: 9400,
        title: "Mönchengladbach 5-1 Hoffenheim: Jubilant victory",
        publishedDate: "23/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 16,
        imageURL: require('../assets/images/psg-5-0-metz.jpg'),
        league: "Ligue 1",
        view: 9700,
        title: "PSG 5-0 Metz: Mbappe's celebration",
        publishedDate: "23/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 17,
        imageURL: require('../assets/images/cle-1-2-ol.jpg'),
        league: "Ligue 1",
        view: 9600,
        title: "Clermont Foot 1-2 Lyon: Lyon's victory",
        publishedDate: "21/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        newsID: 18,
        imageURL: require('../assets/images/om-4-0-stra.jpg'),
        league: "Ligue 1",
        view: 9630,
        title: "Last season match: Marseille 4-0 Strasbourg",
        publishedDate: "20/05/2022",
        shortDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
];



export const getNewsPost = () => {
    var posts = newsData;
    var myPromise = new Promise((resolve, reject) => {
        resolve(posts);
    });
    return myPromise;
};

export const createNews = (news) => {
    news.newsID = +(newsData[newsData.length - 1].newsID + 1);

    console.log(news);
    newsData.push(news);
    console.log(newsData);
    var myPromise = new Promise((resolve, reject) => {
        resolve(news);
    });
    return myPromise;
}

export const deleteNews = (news) => {
    var index = news.newsID - 1;
    newsData.splice(index, 1);
    var myPromise = new Promise((resolve, reject) => {
        resolve(news);
    });
    return myPromise;
}

export const editNews = (news) => {
    // console.log(news.newsID);
    var index = news.newsID - 1;
    newsData.splice(index, 1);
    newsData.push(news);
    console.log(newsData);
    var myPromise = new Promise((resolve, reject) => {
        resolve(news);
    });
    return myPromise;
}