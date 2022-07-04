import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { editNews, getNewsByID } from "../services/NewsService";
import { Editor } from 'react-bootstrap-editor';
import jsxToString from 'jsx-to-string';

export default function EditNews() {
    const params = useParams();

    const [news, setNews] = useState(null);
    useEffect(() => {
        getNewsByID(params.newsID).then((res) => {
            setNews(res);          
        });
    });

    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, control} = useForm();
    const onSubmit = (data) => editNews(data).then(
        navigate("/news-manager")
    );

    return (
        (!news ? ( <div className="warning" style={{paddingLeft: "5px", fontSize: "20px"}}>Loading...</div>) :       
            <Container>
                <Row>
                    <Col sm={12}>
                        <Form as="form" onSubmit={handleSubmit(onSubmit)}>
                            <Form.Control as="input" {...register("newsID", { required: true })} defaultValue={news.newsID} type="hidden" readOnly />
                            <Form.Group className="mt-3">
                                <Form.Label as="strong">League:</Form.Label>
                                <Form.Control as="input" {...register("league", { required: true })} defaultValue={news.league} placeholder="type here..."/>
                                {errors.league && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label as="strong">News Title:</Form.Label>
                                <Form.Control as="input" {...register("title", { required: true })} defaultValue={news.title} placeholder="type here..." />
                                {errors.title && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label as="strong">URL of Image:</Form.Label>
                                <Form.Control as="input" {...register("imageURL", { required: true })} defaultValue={news.imageURL} placeholder="type here..." />
                                {errors.imageURL && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mt-3">
                                <Form.Label as="strong">Short Description:</Form.Label>
                                <Form.Control as="input" {...register("shortDescription", { required: true })} defaultValue={news.shortDescription} placeholder="type here..." />
                                {errors.shortDescription && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Group className="mt-3">                                        
                                <Form.Label as="strong">Content:</Form.Label>                         
                                <Controller
                                    name="content"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Editor value={jsxToString(news.content)} onChange={onChange} style={{minHeight:"300px"}} />
                                    )}
                                />                                                  
                            {errors.content && <span>This field is required</span>}
                            </Form.Group>
                            <Form.Control as="input" {...register("publishedDate", { required: true })} defaultValue={news.publishedDate} type="hidden" placeholder="League" />
                            <Form.Control as="input" {...register("view", { required: true })} defaultValue={news.view} type="hidden" placeholder="View"  readOnly />
                            <Form.Control className="mt-3 mb-3" as="input" type="submit" style={{color: "white",fontSize: "23px", fontWeight: "bold",backgroundColor: "green", display: "block", marginLeft: "auto", marginRight: "auto", width: "30%"}}/>
                        </Form>
                    </Col>
                </Row>
            </Container>        
        )
    );
}