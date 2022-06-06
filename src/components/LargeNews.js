import React from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import "../assets/News.css";

export default function LargeNews(props) {
    return (
        <Card className="mb-4 large-news">
            <Card.Img
                variant="top"
                src={props.imageURL}
                style={{ maxHeight: "500px" }}
            />
            <Card.Body>
                <Card.Text>
                    <span className="title">{props.title}</span>
                    <br />
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
