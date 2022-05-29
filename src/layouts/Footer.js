import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';

import "../assets/Footer.css";

export default function Footer() {
    return (
        <div className="main-footer">
            <Container>
                <Row>
                    <Col>
                        <h4>Personal Details</h4>
                        <ul className="list-unstyled">
                            <li>Hoang Trieu Le</li>
                            <li>1931200071</li>
                            <li>School of Computing and Information Technology</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Project Information</h4>
                        <ul className="list-unstyled">
                            <li>CSE 310</li>
                            <li>Project A</li>
                        </ul>
                    </Col>
                    <Col>
                        <h4>Contact Information</h4>
                        <ul className="list-unstyled">
                            <li>trieu.le.cit19@eiu.edu.vn</li>
                            <li>trieu.le.bmcc@gmail.com</li>
                            <li>0384002254</li>
                        </ul>
                    </Col>
                </Row>
                <hr />
                <Row>
                    <Col sm >
                        &copy;{new Date().getFullYear()} Sport News | All right reversed | Term of Service | Privacy
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
