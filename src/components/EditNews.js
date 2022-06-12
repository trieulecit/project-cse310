import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { editNews, newsData, getNewsPost, createNews } from "../services/NewsService";

export default function EditNews() {
    const params = useParams();
    const paramsNewsID = params.newsID;
    
    const currentData = newsData[paramsNewsID - 1];

    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, control} = useForm({
        defaultValues: { 
            newsID: currentData.newsID,
            league: currentData.league,
            title: currentData.title,
            imageURL: currentData.imageURL,
            shortDescription: currentData.shortDescription,
            content: currentData.content,
            publishedDate: currentData.publishedDate,
            view: currentData.view,
        }
    });
    const onSubmit = (data) => editNews(data).then(
        navigate("/news-manager")
    );


    function getCurrentDate() {
        var today = new Date();
        const yyyy = today.getFullYear();
        let mm = today.getMonth() + 1; // Months start at 0!
        let dd = today.getDate();
    
        if (dd < 10) dd = '0' + dd;
        if (mm < 10) mm = '0' + mm;
    
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Form as="form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control as="input" {...register("newsID", { required: true })} defaultValue={0} type="hidden" readOnly />
                        <Form.Group className="mt-3">
                            <Form.Label as="strong">League:</Form.Label>
                            <Form.Control as="input" {...register("league", { required: true })} placeholder="type here..."/>
                            {errors.league && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label as="strong">News Title:</Form.Label>
                            <Form.Control as="input" {...register("title", { required: true })} placeholder="type here..." />
                            {errors.title && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label as="strong">URL of Image:</Form.Label>
                            <Form.Control as="input" {...register("imageURL", { required: true })} placeholder="type here..." />
                            {errors.imageURL && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label as="strong">Short Description:</Form.Label>
                            <Form.Control as="input" {...register("shortDescription", { required: true })} placeholder="type here..." />
                            {errors.shortDescription && <span>This field is required</span>}
                        </Form.Group>
                        <Form.Group className="mt-3">                 
                            <Form.Label as="strong">Content:</Form.Label>
                            <Form.Control as="textarea" {...register("content", { required: true })} placeholder="type here..."/>
                            {errors.content && <span>This field is required</span>}        
                        </Form.Group>
                        <Form.Control as="input" {...register("publishedDate", { required: true })} type="hidden" placeholder="League" defaultValue={getCurrentDate()}/>
                        <Form.Control as="input" {...register("view", { required: true })} type="hidden" placeholder="View"  readOnly defaultValue="100"/>
                        <Form.Control className="mt-3 mb-3" as="input" type="submit" style={{color: "white",fontSize: "23px", fontWeight: "bold",backgroundColor: "green", display: "block", marginLeft: "auto", marginRight: "auto", width: "30%"}}/>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}