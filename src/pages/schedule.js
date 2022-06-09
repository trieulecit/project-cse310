import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getSchedulePost } from "../services/ScheduleService";

export default function Schedule(props) {
    const [date, setDate] = useState(new Date());
    const [scheduleData, setScheduleData] = useState([]);
    useEffect(() => {
        getSchedulePost().then((res) => {
            setScheduleData(res);
        });
    });

    var formattedDate =
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    var currentScheduleData = scheduleData.filter(
        (data) => data.date === formattedDate
    );

    return (
        <Container>
            <Row>
                <Col
                    sm={12}
                    className="text-center p-0 mb-3 mt-3"
                    style={{ fontSize: "24px", fontWeight: "bold" }}
                >
                    Next Match-up Schedule
                </Col>
            </Row>
            <Row>
                <Col sm={1} className="p-0 mb-3 mt-3">
                    <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                        Date:
                    </span>
                </Col>
                <Col sm={11} className="p-0 mb-3 mt-3">
                    <DatePicker
                        className="text-center"
                        selected={date}
                        dateFormat="dd-MMM-yyyy"
                        onChange={(date) => setDate(date)}
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
                        <ScheduleBody data={currentScheduleData} />
                    </tbody>
                </Table>
            </Row>
        </Container>
    );
}

function ScheduleBody(props) {
    if (props.data.length !== 0) {
        return props.data.map((data) => (
            <Match data={data} key={data.matchID} />
        ));
    } else {
        return <NoInfo />;
    }
}

function NoInfo() {
    return (
        <tr>
            <td colSpan={5} className="text-center">
                No Matches' Information Here, newly-updated schedule at
                27,28-Jun-2022
            </td>
        </tr>
    );
}

function Match(props) {
    return (
        <tr>
            <td>{props.data.league}</td>
            <td>{props.data.time}</td>
            <td>{props.data.host}</td>
            <td>{props.data.guest}</td>
            <td>{props.data.location}</td>
        </tr>
    );
}
