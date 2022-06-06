import React from "react";
import { Table } from "react-bootstrap";

import MatchResult from "./MatchResult";

export default function ResultTable(props) {
    return (
        <Table striped bordered hover variant="dark">
            <colgroup>
                <col style={{ width: "40%" }}></col>
                <col style={{ width: "20%" }}></col>
                <col style={{ width: "40%" }}></col>
            </colgroup>
            <thead>
                <tr>
                    <th style={{ textAlign: "center" }}>Host</th>
                    <th style={{ textAlign: "center" }}>Result</th>
                    <th style={{ textAlign: "center" }}>Guest</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((data) => (
                    <MatchResult
                        key={data.matchID}
                        host={data.host}
                        guest={data.guest}
                        result={data.result}
                    />
                ))}
            </tbody>
            {/* <tbody>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>
                <MatchResult host="Manchester City" guest="Aston Villa" result="3-2"/>       
            </tbody> */}
        </Table>
    );
}
