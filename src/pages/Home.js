import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";

import Image1 from "../assets/images/mci-3-2-avl.jpg";
import LargeNews from "../components/LargeNews";
import SmallNews from "../components/SmallNews";
import MediumNews from "../components/MediumNews";

import "../assets/Home.css";

function Home() {
    return (
        <Container>
            <Row className="mt-3">
                <Col sm={8}>
                    <LargeNews
                        img={Image1}
                        title="Trực tiếp: Vòng 38 Ngoại Hạng Anh"
                        content="Lorem Ipsum"
                    />
                </Col>
                <Col sm={4}>
                    <div className="vertical-news-group overflow-auto scrollbar scrollbar-primary">
                        <SmallNews
                            img={Image1}
                            hostTeam="Man City"
                            result="3-2"
                            guestTeam="Aston Villa"
                        />
                        <SmallNews
                            img={Image1}
                            hostTeam="Man City"
                            result="3-2"
                            guestTeam="Aston Villa"
                        />
                        <SmallNews
                            img={Image1}
                            hostTeam="Man City"
                            result="3-2"
                            guestTeam="Aston Villa"
                        />
                        <SmallNews
                            img={Image1}
                            hostTeam="Man City"
                            result="3-2"
                            guestTeam="Aston Villa"
                        />
                        <SmallNews
                            img={Image1}
                            hostTeam="Man City"
                            result="3-2"
                            guestTeam="Aston Villa"
                        />
                        <SmallNews
                            img={Image1}
                            hostTeam="Man City"
                            result="3-2"
                            guestTeam="Aston Villa"
                        />
                    </div>
                </Col>
            </Row>
            <Row className="ml-10">
                <Col sm={8}>
                    <div className="horizontal-news-group">
                        <MediumNews
                                img={Image1}
                                hostTeam="Man City"
                                result="3-2"
                                guestTeam="Aston Villa"
                        />
                        <MediumNews
                                img={Image1}
                                hostTeam="Man City"
                                result="3-2"
                                guestTeam="Aston Villa"
                        />
                        <MediumNews
                                img={Image1}
                                hostTeam="Man City"
                                result="3-2"
                                guestTeam="Aston Villa"
                        />
                        <MediumNews
                                img={Image1}
                                hostTeam="Man City"
                                result="3-2"
                                guestTeam="Aston Villa"
                        />
                    </div>
                </Col>
                <Col sm="4"></Col>
            </Row>
        </Container>
    );
}

export default Home;
