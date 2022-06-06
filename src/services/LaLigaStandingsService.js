const standingsData = [
    {
        rank: 1,
        club: "Real Madrid",
        matchPlayed: 38,
        win: 26,
        draw: 8,
        lost: 4,
        goalsFor: 80,
        goalsAgainst: 31,
        goalsDiff: 49,
        point: 86,
    },
    {
        rank: 2,
        club: "Barcelona",
        matchPlayed: 38,
        win: 21,
        draw: 10,
        lost: 7,
        goalsFor: 68,
        goalsAgainst: 38,
        goalsDiff: 30,
        point: 73,
    },
    {
        rank: 3,
        club: "Atletico Madrid",
        matchPlayed: 38,
        win: 21,
        draw: 8,
        lost: 9,
        goalsFor: 65,
        goalsAgainst: 43,
        goalsDiff: 22,
        point: 71,
    },
    {
        rank: 4,
        club: "Sevilla",
        matchPlayed: 38,
        win: 18,
        draw: 16,
        lost: 4,
        goalsFor: 53,
        goalsAgainst: 30,
        goalsDiff: 23,
        point: 70,
    },
    {
        rank: 5,
        club: "Real Betis",
        matchPlayed: 38,
        win: 19,
        draw: 8,
        lost: 11,
        goalsFor: 62,
        goalsAgainst: 40,
        goalsDiff: 22,
        point: 65,
    },
    {
        rank: 6,
        club: "Real Sociedad",
        matchPlayed: 38,
        win: 17,
        draw: 11,
        lost: 10,
        goalsFor: 40,
        goalsAgainst: 37,
        goalsDiff: 3,
        point: 62,
    },
    {
        rank: 7,
        club: "Villareal",
        matchPlayed: 38,
        win: 16,
        draw: 11,
        lost: 11,
        goalsFor: 63,
        goalsAgainst: 37,
        goalsDiff: 26,
        point: 59,
    },
    {
        rank: 8,
        club: "Athletic Bilbao",
        matchPlayed: 38,
        win: 14,
        draw: 13,
        lost: 11,
        goalsFor: 43,
        goalsAgainst: 36,
        goalsDiff: 7,
        point: 55,
    },
    {
        rank: 9,
        club: "Valencia",
        matchPlayed: 38,
        win: 11,
        draw: 15,
        lost: 12,
        goalsFor: 48,
        goalsAgainst: 53,
        goalsDiff: -5,
        point: 48,
    },
    {
        rank: 10,
        club: "CA Osasuna",
        matchPlayed: 38,
        win: 12,
        draw: 11,
        lost: 15,
        goalsFor: 37,
        goalsAgainst: 51,
        goalsDiff: -14,
        point: 47,
    },
    {
        rank: 11,
        club: "Celta Vigo",
        matchPlayed: 38,
        win: 12,
        draw: 10,
        lost: 16,
        goalsFor: 43,
        goalsAgainst: 63,
        goalsDiff: 0,
        point: 46,
    },
    {
        rank: 12,
        club: "Rayo Vallecano",
        matchPlayed: 38,
        win: 11,
        draw: 9,
        lost: 18,
        goalsFor: 39,
        goalsAgainst: 50,
        goalsDiff: -11,
        point: 42,
    },
    {
        rank: 13,
        club: "Elche",
        matchPlayed: 38,
        win: 11,
        draw: 9,
        lost: 18,
        goalsFor: 40,
        goalsAgainst: 52,
        goalsDiff: -12,
        point: 42,
    },
    {
        rank: 14,
        club: "RCD Espanyol",
        matchPlayed: 38,
        win: 10,
        draw: 12,
        lost: 16,
        goalsFor: 40,
        goalsAgainst: 53,
        goalsDiff: -13,
        point: 42,
    },
    {
        rank: 15,
        club: "Getafe",
        matchPlayed: 38,
        win: 8,
        draw: 15,
        lost: 15,
        goalsFor: 33,
        goalsAgainst: 41,
        goalsDiff: -8,
        point: 39,
    },
    {
        rank: 16,
        club: "Mallorca",
        matchPlayed: 38,
        win: 10,
        draw: 9,
        lost: 19,
        goalsFor: 36,
        goalsAgainst: 63,
        goalsDiff: -27,
        point: 39,
    },
    {
        rank: 17,
        club: "Cadiz",
        matchPlayed: 38,
        win: 8,
        draw: 15,
        lost: 15,
        goalsFor: 35,
        goalsAgainst: 51,
        goalsDiff: -16,
        point: 39,
    },
    {
        rank: 18,
        club: "Granada",
        matchPlayed: 38,
        win: 8,
        draw: 14,
        lost: 16,
        goalsFor: 44,
        goalsAgainst: 61,
        goalsDiff: -17,
        point: 38,
    },
    {
        rank: 19,
        club: "Levante",
        matchPlayed: 38,
        win: 8,
        draw: 11,
        lost: 19,
        goalsFor: 51,
        goalsAgainst: 76,
        goalsDiff: -25,
        point: 35,
    },
    {
        rank: 20,
        club: "Alaves",
        matchPlayed: 38,
        win: 8,
        draw: 7,
        lost: 23,
        goalsFor: 31,
        goalsAgainst: 65,
        goalsDiff: -34,
        point: 31,
    },
];

export const getStandingsPost = () => {
    var posts = standingsData;
    var myPromise = new Promise((resolve, reject) => {
        resolve(posts);
    });
    return myPromise;
};