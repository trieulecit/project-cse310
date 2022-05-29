import React, { useEffect, useState} from 'react';

import { getPost } from '../services/services';
export default function Standings() {
    var number = 0;
    // console.log(number);
    // const [serviceData, setServiceData] =useState([]);
	// useEffect(() =>{
	// 	getPost().then((res) =>{setServiceData(res)
    //         console.log(res)
    //     });
       
	// })
    return (
        <div className="standing">
            <table border="1" cellSpacing="0" cellPadding="0">
                <colgroup>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                    <col style={{ minWidth: "100px" }}></col>
                </colgroup>
                <thead>
                    <TableRowHeading />
                </thead>
                {/* <tbody>{
                    serviceData.map(data=>(
                         <TableRowData />
                    ))
                    }
                </tbody> */}
            </table>
        </div>
    );
}

function TableRowHeading(props) {
    return (
        <tr>
            <th>Number</th>
            <th>Club</th>
            <th>MP</th>
            <th>W</th>
            <th>D</th>
            <th>L</th>
            <th>GF</th>
            <th>GA</th>
            <th>GD</th>
            <th>Pts</th>
        </tr>
    );
}

function TableRowData(props) {
    return (
        <tr>
            <td>{exampleObject.number}</td>
            <td>{exampleObject.name}</td>
            <td>{exampleObject.matchPlayed}</td>
            <td>{exampleObject.win}</td>
            <td>{exampleObject.draw}</td>
            <td>{exampleObject.lost}</td>
            <td>{exampleObject.goalScored}</td>
            <td>{exampleObject.goalReceived}</td>
            <td>{exampleObject.goalDiff}</td>
            <td>{exampleObject.point}</td>
        </tr>
    );
}

var number = 1;
var name = "Team A";
var win = 26;
var draw = 6;
var lost = 4;
var matchPlayed = win + draw + lost;
var goalScored = 79;
var goalReceived = 30;
var goalDiff = goalScored - goalReceived;
var point = win * 3 + draw;

const exampleObject = {
    number: number,
    name: name,
    win: win,
    draw: draw,
    lost: lost,
    matchPlayed: matchPlayed,
    goalScored: goalScored,
    goalReceived: goalReceived,
    goalDiff: goalDiff,
    point: point
}
