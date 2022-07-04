import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Table } from "react-bootstrap";
import { getNewsPost, deleteNews } from "../services/NewsService";


export default function NewsManager() {
    const navigate = useNavigate();
    const navigateToCreateNews = () => {
        navigate('/create-news');
    };

    const [serviceData, setServiceData] = useState([]);
    useEffect(() => {
        getNewsPost().then((res) => {
            setServiceData(res);
        });
    });

    function confirmDelete(data) {
        var didConfirm = window.confirm("Do you want to delete?");
        if (didConfirm) {
            deleteNews(data).then(navigate("/news-manager"));
            console.log(data);
        }
    }

    const navigateToEditNews = (data) => {
        navigate(`/edit-news/${data.newsID}`);
    };

    function TableRow(props) {
        return (
            <tr>
                <td>{props.data.newsID}</td>
                <td>{props.data.league}</td>
                <td>{props.data.title}</td>
                <td className="text-center">
                    <Button variant="warning" onClick={() => navigateToEditNews(props.data)}>Edit</Button>
                    {" "}
                    <Button variant="danger" onClick={() => confirmDelete(props.data)}>Delete</Button>
                </td>
            </tr>
        )
    }

    return (
        <Container>
            <Row>
                <Col sm={12} className="text-center mt-3 mb-3">
                    <Button variant="success" onClick={navigateToCreateNews}>Create News</Button>
                </Col>
            </Row>          
            <Row>
                <Col sm={12}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>News ID</th>
                                <th>League</th>
                                <th>Title</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {serviceData.sort((a, b) => {return b.newsID - a.newsID}).map((data, i) => (
                                <TableRow data={data} key={i}/>          
                            ))}
                        </tbody>
                    </Table>                  
                </Col>
            </Row>                    
        </Container>
    )
}