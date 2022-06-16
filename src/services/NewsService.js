import React from 'react';
const newsData = [
    {
        newsID: 1,
        imageURL: require('../assets/images/ars-5-1-eve.jpg'),
        league: "English Premier League",
        view: 10000,
        title: "Arsenal 5-1 Everton: Emphatic victory",
        publishedDate: "21/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                    <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>
    },
    {
        newsID: 2,
        imageURL: require('../assets/images/mci-3-2-avl.jpg'),
        league: "English Premier League",
        view: 12000,
        title: "Man City 3-2 Aston Villa: Dramatic Day",
        publishedDate: "23/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                    <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 3,
        imageURL: require('../assets/images/bre-1-2-lee.jpg'),
        league: "English Premier League",
        view: 9000,
        title: "Brentford 1-2 Leeds: Survival Celebration",
        publishedDate: "22/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div> 
    },
    {
        newsID: 4,
        imageURL: require('../assets/images/bha-3-1-whu.jpg'),
        league: "English Premier League",
        view: 9100,
        title: "Brighton 3-1 West Ham: All hopes end",
        publishedDate: "22/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>
    },
    {
        newsID: 5,
        imageURL: require('../assets/images/bur-1-2-new.jpg'),
        league: "English Premier League",
        view: 8100,
        title: "Burnley 1-2 Newcastle: Relegated from EPL",
        publishedDate: "20/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 6,
        imageURL: require('../assets/images/pal-1-0-mnu.jpg'),
        league: "English Premier League",
        view: 12000,
        title: "Crystal Palace 1-0 Man Utd: Securing UEL slot",
        publishedDate: "20/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 7,
        imageURL: require('../assets/images/rma-0-0-bet.jpg'),
        league: "La Liga Santanders",
        view: 15000,
        title: "Real Madrid 0-0 Betis: Winners' Respect",
        publishedDate: "22/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 8,
        imageURL: require('../assets/images/rso-1-2-alt.jpg'),
        league: "La Liga Santanders",
        view: 8000,
        title: "Sociedad 1-2 Atletico: Secure third position",
        publishedDate: "29/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 9,
        imageURL: require('../assets/images/bar-0-2-vil.jpg'),
        league: "La Liga Santanders",
        view: 10000,
        title: "Barcelona 0-2 Villareal: Bad loss at home",
        publishedDate: "24/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 10,
        imageURL: require('../assets/images/fio-2-0-juv.jpg'),
        league: "Serie A",
        view: 8000,
        title: "Fiorentina 2-0 Juventus: Season loss",
        publishedDate: "22/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 11,
        imageURL: require('../assets/images/int-3-0-sam.jpg'),
        league: "Serie A",
        view: 9000,
        title: "Inter 3-0 Sampdoria: Win is not enough",
        publishedDate: "23/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 12,
        imageURL: require('../assets/images/sas-0-3-acm.jpg'),
        league: "Serie A",
        view: 9500,
        title: "Sassuolo 0-3 Milan: Rossoneri's Crown",
        publishedDate: "25/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 13,
        imageURL: require('../assets/images/bvb-2-1-hbsc.jpg'),
        league: "Bundesliga",
        view: 9500,
        title: "Borussia Dortmund 2-1 Hertha Berlin: Last goal of Haaland for BVB",
        publishedDate: "21/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 14,
        imageURL: require('../assets/images/wol-2-2-bay.jpg'),
        league: "Bundesliga",
        view: 9600,
        title: "Wolfsburg 2-2 Bayern Munich: Bundesliga champions",
        publishedDate: "22/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 15,
        imageURL: require('../assets/images/bmg-5-1-tsg.jpg'),
        league: "Bundesliga",
        view: 9400,
        title: "Mönchengladbach 5-1 Hoffenheim: Jubilant victory",
        publishedDate: "23/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 16,
        imageURL: require('../assets/images/psg-5-0-metz.jpg'),
        league: "Ligue 1",
        view: 9700,
        title: "PSG 5-0 Metz: Mbappe's celebration",
        publishedDate: "23/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 17,
        imageURL: require('../assets/images/cle-1-2-ol.jpg'),
        league: "Ligue 1",
        view: 9600,
        title: "Clermont Foot 1-2 Lyon: Lyon's victory",
        publishedDate: "21/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>    
    },
    {
        newsID: 18,
        imageURL: require('../assets/images/om-4-0-stra.jpg'),
        league: "Ligue 1",
        view: 9630,
        title: "Last season match: Marseille 4-0 Strasbourg",
        publishedDate: "20/05/2022",
        shortDescription: "Rodrigo de Paul and Angel Correa struck as Atletico Madrid secured third in LaLiga.",
        content:<div>
                   <div>Diego Simeone's side qualified for the Champions League before the final matchday, but were fortunate to not fall behind in the first half at Reale Arena as Rafinha spurned multiple chances.</div>
                    <div>The hosts pulled a goal back in the 93rd minute through substitute Jon Guridi, but it proved too late to mount a comeback; defeat leaving La Real sixth, having already sealed Europa League qualification.</div>
                </div>
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
    if(newsData.length !== 0) {
        news.newsID = +(newsData[0].newsID + 1);
    } else {
        news.newsID = 1;
    }
    newsData.push(news);
    var myPromise = new Promise((resolve, reject) => {
        resolve(news);
    });
    return myPromise;
}

export const deleteNews = (news) => {
    for (let i = 0; i < newsData.length; i++) {
        if (newsData[i].newsID == news.newsID) {
            newsData.splice(i, 1);
        }
    }
    console.log(newsData);
    var myPromise = new Promise((resolve, reject) => {
        resolve(news);
    });
    return myPromise;
}

export const editNews = (news) => {
    var index = news.newsID - 1;
    newsData.splice(index, 1);
    newsData.push(news);
    var myPromise = new Promise((resolve, reject) => {
        resolve(news);
    });
    return myPromise;
}


export const getNewsByID = (id) => {
    
    var post = newsData.filter(x => x.newsID == id)[0];
    
    var myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(post);
        }, 1000)
    });
    return myPromise;
};

export const getListNewsByLeague = (league) => {
    var post = newsData.filter(x => x.league == league);

    var myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(post);
        }, 1000)
    });
    return myPromise;
}