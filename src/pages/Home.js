import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

import LargeNews from "../components/LargeNews";
import SmallNews from "../components/SmallNews";
import MediumNews from "../components/MediumNews";

import { getNewsPost } from "../services/NewsService";

import "../assets/Home.css";
import "../assets/News.css";

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
                    {serviceData
                        .sort(function (a, b) {
                            var aa = a.publishedDate
                                    .split("/")
                                    .reverse()
                                    .join(),
                                bb = b.publishedDate
                                    .split("/")
                                    .reverse()
                                    .join();
                            return aa > bb ? -1 : aa < bb ? 1 : 0;
                        })
                        .map((data, i) => {
                            if (i === 0) {
                                return (
                                    <div key={i}>
                                        <Link to={`/newsdetail/${data.newsID}`}>
                                            <LargeNews
                                                imageURL={data.imageURL}
                                                title={data.title}
                                                publishedDate={
                                                    data.publishedDate
                                                }
                                                shortDescription={
                                                    data.shortDescription
                                                }
                                                content={data.content}
                                            />
                                        </Link>
                                    </div>
                                );
                            }
                        })}
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
                            <div className="vertical-news-group overflow-auto scrollbar scrollbar-primary">
                                {serviceData
                                    .sort((a, b) => {
                                        return b.view - a.view;
                                    })
                                    .map((data, i) => (
                                        <Link
                                            to={`/newsdetail/${data.newsID}`}
                                            key={i}
                                        >
                                            <SmallNews
                                                imageURL={data.imageURL}
                                                title={data.title}
                                                publishedDate={
                                                    data.publishedDate
                                                }
                                                shortDescription={
                                                    data.shortDescription
                                                }
                                                view={data.view}
                                            />
                                        </Link>
                                    ))}
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="ml-10">
                <Col sm={8}>
                    <div className="horizontal-news-group">
                        {serviceData
                            .sort(function (a, b) {
                                var aa = a.publishedDate
                                        .split("/")
                                        .reverse()
                                        .join(),
                                    bb = b.publishedDate
                                        .split("/")
                                        .reverse()
                                        .join();
                                return aa > bb ? -1 : aa < bb ? 1 : 0;
                            })
                            .map((data, i) => {
                                if (i !== 0 && i <= 4) {
                                    return (
                                        <Link
                                            to={`/newsdetail/${data.newsID}`}
                                            key={i}
                                        >
                                            <MediumNews
                                                imageURL={data.imageURL}
                                                title={data.title}
                                                publishedDate={
                                                    data.publishedDate
                                                }
                                                shortDescription={
                                                    data.shortDescription
                                                }
                                            />
                                        </Link>
                                    );
                                }
                            })}
                    </div>
                </Col>
                <Col sm="4"></Col>
            </Row>
        </Container>
    );
}

export default Home;
