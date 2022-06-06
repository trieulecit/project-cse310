import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { getNewsPost } from "../services/NewsService";

export default function NewsDetail(props) {
    const params = useParams();

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        getNewsPost().then((res) => {
            setServiceData(res);
        });
    });

    const currentServiceData = serviceData.filter(
        (data) => data.newsID == params.newsID
    );

    return (
        <div>
            {currentServiceData.map((data, i) => (
                <div key={i}>
                    <Container>
                        <Row mt="3">
                            <Col sm="12">
                                <h1>{data.title}</h1>
                                <h6>{data.publishedDate}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">{data.shortDescription}</Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <img
                                    src={data.imageURL}
                                    alt={`newsID: ${data.newsID}'`}
                                    height={"800px"}
                                    width={"100%"}
                                ></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12">{data.content}</Col>
                        </Row>
                    </Container>
                </div>
            ))}
        </div>
    );
}
