import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

import LargeDataNews from "../components/LargeDataNews";
import SmallVerticalNewsColumn from "../components/SmallVerticalNewsColumn";
import BigVerticalNewsColumn from "../components/BigVerticalNewsColumn";

import { getNewsPost } from "../services/NewsService";

import "../assets/styles/Home.css";
import "../assets/styles/News.css";

function Home() {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        getNewsPost().then((res) => {
            setServiceData(res);
        });
    });
    return (
        <Container>
            <Row>
                <Col
                    sm={12}
                    className="mt-3"
                    style={{
                        fontSize: "25px",
                        fontWeight: "bold",
                        borderLeft: "5px solid #DC143C",
                    }}
                >
                    The Latest News
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={8}>
                    <LargeDataNews data={serviceData} />
                </Col>
                <Col sm={4}>
                    <Row>
                        <Col sm={12}>
                            <span
                                style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                                The most popular:
                            </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <SmallVerticalNewsColumn data={serviceData} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="ml-10">
                <Col sm={8}>
                    <BigVerticalNewsColumn data={serviceData} />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
