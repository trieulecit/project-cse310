import React from 'react'

export default function Schedule() {
    return (
        <div>
            <p>{exampleMatch.time}, {exampleMatch.date}</p>
            <p>{exampleMatch.homeTeam} vs. {exampleMatch.guestTeam}</p>
        </div>
    )
}

const exampleMatch = {
    homeTeam: "Team A",
    guestTeam: "Team B",
    date: "21/05/2022",
    time: "5pm",
}