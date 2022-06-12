import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from "react-bootstrap";
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

    return (
        <Container>
            <Row>
                <Col className="text-center mt-3 mb-3">
                    <Button variant="success" onClick={navigateToCreateNews}>Create News</Button>
                </Col>
            </Row>
            
            {serviceData.map((data) => (
                <Row key={data.newsID}>
                    <Col sm={8}>
                        <NewsPieceShown data={data} />
                    </Col>
                    <Col sm={4} className="text-center mt-3 mb-3">
                        <Button variant="warning" onClick={() => navigateToEditNews(data)} className="mb-5">Edit News No.{data.newsID}</Button>
                        <br/>
                        <Button variant="danger" onClick={() => confirmDelete(data)}>Delete News No.{data.newsID}</Button>
                    </Col>      
                </Row>            
            ))}
                    
        </Container>
    )
}



function NewsPieceShown(props) {
    return (
        <div className="mb-2 p-3 news-piece" style={{width: "100%", border: "3px solid red"}}>
            <span style={{fontWeight: "bold", textDecoration: "underline"}}>News ID:</span>{" "}<span>{props.data.newsID}</span><br />
            <span style={{fontWeight: "bold", textDecoration: "underline"}}>League:</span>{" "}<span>{props.data.league}</span><br />
            <span style={{fontWeight: "bold", textDecoration: "underline"}}>News Title:</span>{" "}<span>{props.data.title}</span><br />
            <span style={{fontWeight: "bold", textDecoration: "underline"}}>Short Description:</span>{" "}<span>{props.data.shortDescription}</span><br />
            <span style={{fontWeight: "bold", textDecoration: "underline"}}>Content:</span>{" "}<span>{props.data.content}</span><br />
        </div>
    )
}