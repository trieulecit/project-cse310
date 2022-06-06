import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import LargeNews from "../components/LargeNews";
import SmallNews from "../components/SmallNews";
import MediumNews from "../components/MediumNews";
import ResultTable from "../components/ResultTable";
import { getNewsPost } from "../services/NewsService";

import "../assets/Home.css";
import "../assets/News.css";

function Ligue1() {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        getNewsPost().then((res) => {
            setServiceData(res);
        });
    });
    const currentServiceData = serviceData.filter(
        (data) => data.league === "Ligue 1"
    );
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
                    Serie A
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={8}>
                    {currentServiceData
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
                                    <Link
                                        to={`/newsdetail/${data.newsID}`}
                                        key={i}
                                    >
                                        <LargeNews
                                            imageURL={data.imageURL}
                                            title={data.title}
                                            publishedDate={data.publishedDate}
                                            shortDescription={
                                                data.shortDescription
                                            }
                                        />
                                    </Link>
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
                                {currentServiceData
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
                        {currentServiceData
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
                <Col sm="4">
                    <div
                        className="mt-3"
                        style={{
                            fontSize: "20px",
                            fontWeight: "bold",
                            borderLeft: "5px solid black",
                            paddingLeft: "5px",
                        }}
                    >
                        The Lastest Round Result
                    </div>
                    <ResultTable />
                </Col>
            </Row>
        </Container>
    );
}

export default Ligue1;
