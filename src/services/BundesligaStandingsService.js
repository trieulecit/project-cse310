const standingsData = [
    {
        rank: 1,
        club: "Bayern Munich",
        matchPlayed: 34,
        win: 24,
        draw: 5,
        lost: 5,
        goalsFor: 97,
        goalsAgainst: 37,
        goalsDiff: 60,
        point: 77,
    },
    {
        rank: 2,
        club: "Borussia Dortmund",
        matchPlayed: 34,
        win: 22,
        draw: 3,
        lost: 9,
        goalsFor: 85,
        goalsAgainst: 52,
        goalsDiff: 33,
        point: 69,
    },
    {
        rank: 3,
        club: "Bayer Leverkusen",
        matchPlayed: 34,
        win: 19,
        draw: 7,
        lost: 8,
        goalsFor: 80,
        goalsAgainst: 47,
        goalsDiff: 33,
        point: 64,
    },
    {
        rank: 4,
        club: "RB Leipzig",
        matchPlayed: 34,
        win: 17,
        draw: 7,
        lost: 10,
        goalsFor: 72,
        goalsAgainst: 37,
        goalsDiff: 35,
        point: 58,
    },
    {
        rank: 5,
        club: "Union Berlin",
        matchPlayed: 34,
        win: 16,
        draw: 9,
        lost: 9,
        goalsFor: 50,
        goalsAgainst: 44,
        goalsDiff: 6,
        point: 57,
    },
    {
        rank: 6,
        club: "SC Freiburg",
        matchPlayed: 34,
        win: 15,
        draw: 10,
        lost: 9,
        goalsFor: 58,
        goalsAgainst: 46,
        goalsDiff: 12,
        point: 55,
    },
    {
        rank: 7,
        club: "Koln",
        matchPlayed: 34,
        win: 14,
        draw: 10,
        lost: 10,
        goalsFor: 52,
        goalsAgainst: 49,
        goalsDiff: 3,
        point: 52,
    },
    {
        rank: 8,
        club: "Mainz 05",
        matchPlayed: 34,
        win: 13,
        draw: 7,
        lost: 14,
        goalsFor: 58,
        goalsAgainst: 60,
        goalsDiff: -2,
        point: 46,
    },
    {
        rank: 9,
        club: "Hoffenheim",
        matchPlayed: 34,
        win: 13,
        draw: 7,
        lost: 14,
        goalsFor: 58,
        goalsAgainst: 60,
        goalsDiff: -2,
        point: 46,
    },
    {
        rank: 10,
        club: "Borussia Monchengladbach",
        matchPlayed: 34,
        win: 12,
        draw: 9,
        lost: 13,
        goalsFor: 54,
        goalsAgainst: 61,
        goalsDiff: -7,
        point: 45,
    },
    {
        rank: 11,
        club: "Eintracht Frankfurt",
        matchPlayed: 34,
        win: 10,
        draw: 12,
        lost: 12,
        goalsFor: 45,
        goalsAgainst: 49,
        goalsDiff: -4,
        point: 42,
    },
    {
        rank: 12,
        club: "Wolfsburg",
        matchPlayed: 34,
        win: 12,
        draw: 6,
        lost: 16,
        goalsFor: 43,
        goalsAgainst: 54,
        goalsDiff: -11,
        point: 42,
    },
    {
        rank: 13,
        club: "VfL Bochum",
        matchPlayed: 34,
        win: 12,
        draw: 6,
        lost: 16,
        goalsFor: 38,
        goalsAgainst: 52,
        goalsDiff: -11,
        point: 42,
    },
    {
        rank: 14,
        club: "Augsburg",
        matchPlayed: 34,
        win: 10,
        draw: 8,
        lost: 16,
        goalsFor: 39,
        goalsAgainst: 56,
        goalsDiff: -17,
        point: 38,
    },
    {
        rank: 15,
        club: "VfB Stuttgart",
        matchPlayed: 34,
        win: 7,
        draw: 12,
        lost: 15,
        goalsFor: 41,
        goalsAgainst: 59,
        goalsDiff: -18,
        point: 33,
    },
    {
        rank: 16,
        club: "Hertha Berlin",
        matchPlayed: 34,
        win: 7,
        draw: 12,
        lost: 15,
        goalsFor: 41,
        goalsAgainst: 59,
        goalsDiff: -18,
        point: 33,
    },
    {
        rank: 17,
        club: "Arminia",
        matchPlayed: 34,
        win: 5,
        draw: 13,
        lost: 16,
        goalsFor: 27,
        goalsAgainst: 53,
        goalsDiff: -26,
        point: 28,
    },
    {
        rank: 18,
        club: "Furth",
        matchPlayed: 34,
        win: 3,
        draw: 9,
        lost: 22,
        goalsFor: 28,
        goalsAgainst: 82,
        goalsDiff: -54,
        point: 18,
    },
];

export const getStandingsPost = () => {
    var posts = standingsData;
    var myPromise = new Promise((resolve, reject) => {
        resolve(posts);
    });
    return myPromise;
};