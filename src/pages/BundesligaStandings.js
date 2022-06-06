import React, { useState, useEffect } from "react";
import { Table, Container, Row, Col } from "react-bootstrap";
import { getStandingsPost } from "../services/BundesligaStandingsService";

const TableRowData = (props) => {
    return (
        <tr>
            <td>{props.rank}</td>
            <td>{props.club}</td>
            <td>{props.matchPlayed}</td>
            <td>{props.win}</td>
            <td>{props.draw}</td>
            <td>{props.lost}</td>
            <td>{props.goalsFor}</td>
            <td>{props.goalsAgainst}</td>
            <td>{props.goalsDiff}</td>
            <td>{props.point}</td>
        </tr>
    );
};

export default function Standings(props) {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        getStandingsPost().then((res) => {
            setServiceData(res);
        });
    });
    return (
        <Container>
            <Row>
                <Col sm={12} style={{ fontSize: "25px", fontWeight: "bold" }}>
                    2022 Bundesliga Standings
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Rank</th>
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
                        </thead>
                        <tbody>
                            {serviceData.map((data,i) => (
                                <TableRowData
                                    key={i}
                                    rank={data.rank}
                                    club={data.club}
                                    matchPlayed={data.matchPlayed}
                                    win={data.win}
                                    draw={data.draw}
                                    lost={data.lost}
                                    goalsFor={data.goalsFor}
                                    goalsAgainst={data.goalsAgainst}
                                    goalsDiff={data.goalsDiff}
                                    point={data.point}
                                />
                            ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
}
