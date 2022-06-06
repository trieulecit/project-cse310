import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Schedule(props) {
    const [date, setDate] = useState(new Date());

    return (
        <Container>
            <Row>
                <Col sm={12} className="text-center p-0 mb-3 mt-3" style={{fontSize: "24px", fontWeight: "bold"}}>
                    English Premier League Schedule
                </Col>
            </Row>
            <Row>
                <Col sm={1} className="p-0 mb-3 mt-3">
                    <span style={{fontSize: "24px", fontWeight: "bold"}}>Date:</span>
                </Col>
                <Col sm={11} className="p-0 mb-3 mt-3">
                    <DatePicker
                        className="text-center"
                        selected={date}
                        dateFormat="dd-MMM-yyyy"
                        onChange={(date: Date) => setDate(date)}
                    ></DatePicker>
                </Col>
            </Row>
            <Row>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>League</th>
                            <th>Time</th>
                            <th>Host</th>
                            <th>Guest</th>
                            <th>Location</th>
                        </tr>                     
                    </thead>
                    <tbody>
                        <tr>
                            <td>UCL</td>
                            <td>3 a.m</td>
                            <td>Liverpool</td>
                            <td>Real Madrid</td>
                            <td>Stade de France, Paris</td>
                        </tr>
                        <tr>
                            <td>UCL</td>
                            <td>3 a.m</td>
                            <td>Liverpool</td>
                            <td>Real Madrid</td>
                            <td>Stade de France, Paris</td>
                        </tr>
                        <tr>
                            <td>UCL</td>
                            <td>3 a.m</td>
                            <td>Liverpool</td>
                            <td>Real Madrid</td>
                            <td>Stade de France, Paris</td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

// export default function Schedule() {
//     return (
//         <div>
//             <p>{exampleMatch.time}, {exampleMatch.date}</p>
//             <p>{exampleMatch.homeTeam} vs. {exampleMatch.guestTeam}</p>
//         </div>
//     )
// }

// const exampleMatch = {
//     homeTeam: "Team A",
//     guestTeam: "Team B",
//     date: "21/05/2022",
//     time: "5pm",
// }
