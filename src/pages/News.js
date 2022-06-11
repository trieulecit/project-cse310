import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import ResultTable from "../components/ResultTable";
import { getNewsPost } from "../services/NewsService";
import { getResultPost } from "../services/ResultService";

import LargeDataNews from "../components/LargeDataNews";
import SmallVerticalNewsColumn from "../components/SmallVerticalNewsColumn";
import BigVerticalNewsColumn from "../components/BigVerticalNewsColumn";

import "../assets/Home.css";
import "../assets/News.css";

export default function News() {
    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        getNewsPost().then((res) => {
            setServiceData(res);
        });
    });
    const params = useParams();
    var leagueType = "";
    if (params.league == "epl") {
        leagueType = "English Premier League";
    }
    if (params.league == "laliga") {
        leagueType = "La Liga Santanders";
    }
    if (params.league == "seriea") {
        leagueType = "Serie A";
    }
    if (params.league == "bundesliga") {
        leagueType = "Bundesliga";
    }
    if (params.league == "ligue1") {
        leagueType = "Ligue 1";
    }

    const currentServiceData = serviceData.filter(
        (data) => data.league === leagueType
    );

    const [resultServiceData, setResultServiceData] = useState([]);
    useEffect(() => {
        getResultPost().then((res) => {
            setResultServiceData(res);
        });
    });
    const currentResultData = resultServiceData.filter(
        (data) => data.league === leagueType
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
                    {leagueType}
                </Col>
            </Row>
            <Row className="mt-3">
                <Col sm={8}>
                    <LargeDataNews data={currentServiceData} />
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
                            <SmallVerticalNewsColumn data={currentServiceData} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="ml-10">
                <Col sm={8}>
                    <BigVerticalNewsColumn data={currentServiceData} />
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
                    <ResultTable data={currentResultData} />
                </Col>
            </Row>
        </Container>
    );
}
