import React from "react";
import "../assets/News.css";
import { Card } from "react-bootstrap";

export default function SmallNews(props) {
    return (
        <Card className="small-card mb-3 small-news">
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
                <Card.Title>
                    <span className="title">{props.title}</span>
                </Card.Title>
                <Card.Text>
                    <span
                        className="published-date"
                        style={{ fontStyle: "italic" }}
                    >
                        Date published: {props.publishedDate}
                    </span>
                    <br />
                    <span className="view">{props.view} views</span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
