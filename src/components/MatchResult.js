import React from "react";

import "../assets/MatchResult.css"

export default function MatchResult(props) {
    return (
        <tr className="match-result-content">
            <td className="host">{props.host}</td>
            <td className="result">{props.result}</td>
            <td className="guest">{props.guest}</td>
        </tr>
    )
}