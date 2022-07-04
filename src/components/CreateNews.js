import React from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { createNews } from "../services/NewsService";
import { Editor } from 'react-bootstrap-editor';

export default function CreateNews() {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, control} = useForm();
    const onSubmit = (data) => createNews(data).then(
        navigate("/news-manager")
    );
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Form as="form" onSubmit={handleSubmit(onSubmit)}>
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
                                <Controller
                                    name="content"
                                    rules={{ required: true }}
                                    control={control}
                                    render={({ field: { onChange, onBlur, value, ref } }) => (
                                        <Editor value={value} onChange={onChange} style={{height: "200px"}}/>
                                    )}
                                />                                                  
                            {errors.content && <span>This field is required</span>}        
                        </Form.Group>
                        <Form.Control className="mt-3 mb-3" as="input" type="submit" style={{color: "white",fontSize: "23px", fontWeight: "bold",backgroundColor: "green", display: "block", marginLeft: "auto", marginRight: "auto", width: "30%"}}/>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
