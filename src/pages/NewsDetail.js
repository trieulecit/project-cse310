import React from "react";
import { Container, Row, Col } from "react-bootstrap";
export default function NewsDetail(props) {
    return (
        <Container>
            <Row mt="3">
                <Col sm="12">
                    <h1>This is title</h1>
                    <h6>This is author, This is time published</h6>
                </Col>
            </Row>
            <Row>
                <Col sm="8">
                    This is content
                </Col>
                <Col sm="4">
                    These are next news pieces
                </Col>
            </Row>
        </Container>
    );
}
