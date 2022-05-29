import React from "react";
import { Card } from "react-bootstrap";

export default function MediumNews(props) {
    return (
        // <div className="small-news">
        //     <img src={props.img} alt={props.alt} />
        //     <span className="news-title">
        //         Highlights: {props.hostTeam} {props.result} {props.guestTeam}
        //     </span>
        // </div>
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