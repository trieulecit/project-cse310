import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { getNewsPost, getNewsByID } from "../services/NewsService";

export default function NewsDetail(props) {
    const params = useParams();

    const [news, setNews] = useState(null);
    useEffect(() => {
        getNewsByID(params.newsID).then((res) => {
            setNews(res);
            
        });
    });

    return ( !news ? ( <div className="warning" style={{paddingLeft: "5px", fontSize: "20px"}}>Loading...</div>) :   
                    <Container>
                        <Row>
                            <Col sm="12">
                                <h1>{news.title}</h1>
                                <h6>{news.publishedDate}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12"><span>{news.shortDescription}</span></Col>
                        </Row>
                        <Row>
                            <Col sm="12">
                                <img
                                    style={{display: "block", marginLeft: "auto", marginRight: "auto"}}
                                    src={news.imageURL}
                                    alt={`newsID: ${news.newsID}'`}
                                    height={"600px"}
                                    width={"700px"}
                                ></img>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12"><div>{news.content}</div></Col>
                        </Row>
                    </Container>
    );
}
