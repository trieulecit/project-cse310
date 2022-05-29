import React from "react";
import "../assets/SmallNews.css";
import { Card } from "react-bootstrap";

export default function SmallNews(props) {
    return (
        <Card  className="small-card mb-3">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Title>Highlights: {props.hostTeam} {props.result} {props.guestTeam}</Card.Title>
                <Card.Text>
                Highlights: {props.hostTeam} {props.result} {props.guestTeam}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
