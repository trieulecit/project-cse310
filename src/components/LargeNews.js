import React from "react";

import { Card } from "react-bootstrap";

export default function LargeNews(props) {
    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={props.img} />
            <Card.Body>
                <Card.Text>
                    <span className="news-title" style={{fontSize: "24px", fontWeight: "bold",}}>
                        {props.title}
                    </span>
                    <br />
                    <span className="news-content">
                        {props.content}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>
    );
}
