export const getSchedulePost = () => {
    var posts = data;
    var myPromise = new Promise((resolve, reject) => {
        resolve(posts);
    });
    return myPromise;
};

const data = [
    {
        matchID: 1,
        date: '27/6/2022',
        league: 'English Premier League',
        time: '3 p.m',
        host: 'Manchester City',
        guest: 'Tottenham Hospur',
        location: 'Etihad Stadium, Manchester',
    },
    {
        matchID: 2,
        date: '27/6/2022',
        league: 'La Liga',
        time: '3 p.m',
        host: 'Real Madrid',
        guest: 'Alaves',
        location: 'Santiago Bernabeu, Madrid',
    },
    {
        matchID: 3,
        date: '28/6/2022',
        league: 'English Premier League',
        time: '3 p.m',
        host: 'Manchester United',
        guest: 'Tottenham Arsenal',
        location: 'Old Trafford Stadium, Manchester',
    },
    {
        matchID: 4,
        date: '28/6/2022',
        league: 'La Liga',
        time: '3 p.m',
        host: 'Barcelona',
        guest: 'Espanyol',
        location: 'Camp Nou, Barcelona',
    },
];