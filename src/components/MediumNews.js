import React from "react";
import { Card } from "react-bootstrap";
import "../assets/styles/News.css";
export default function MediumNews(props) {
    return (
        <Card className="small-card mb-3 small-news">
            <Card.Img variant="top" src={props.imageURL} />
            <Card.Body>
                <Card.Title>
                    <span className="title">{props.title}</span>
                </Card.Title>
                <Card.Text>
                    <span className="published-date">
                        {props.publishedDate}
                    </span>
                    <br />
                    <span className="short-description">
                        {props.shortDescription}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
