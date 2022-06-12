import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Form, Container, Row, Col } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { createNews, newsData } from "../services/NewsService";
// import RichTextEditor from "./RichTextEditor";

export default function CreateNews() {

    const navigate = useNavigate();
    const {register, handleSubmit, formState: { errors }, control} = useForm();
    const onSubmit = (data) => createNews(data).then(
        navigate("/news-manager")
    );

    var newsID = (newsData[newsData.length - 1].newsID + 1);
    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Form as="form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control as="input" {...register("newsID", { required: true })} type="hidden" defaultValue={newsID} readOnly />
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
                            {/* <Controller
                                render={({
                                    field: { onChange, onBlur, value, name, ref },
                                    // fieldState: { invalid, isTouched, isDirty, error },
                                }) => (
                                    <RichTextEditor
                                    value={value}
                                    onChange={onChange} // send value to hook form
                                    onBlur={onBlur} // notify when input is touched
                                    inputRef={ref} // wire up the input ref
                                    {...register("content")}
                                    />
                                )}
                                name="RichTextEditor"
                                control={control}
                                rules={{ required: true }}
                            /> */}

                            {/* <Controller
                                    render={({ field }) => <RichTextEditor as="input" {...register("content")} />}
                                    name="content"
                                    control={control}
                                    defaultValue=""
                                    
                            /> */}
                            {/* <RichTextEditor as="input" {...register("content", { required: true })} placeholder="type here..."/> */}
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