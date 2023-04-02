import React, { Component } from 'react';
import '../../asset/css/postadmin.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class PostAdmin extends Component {
    render() {
        return (
            <div className="container">
                <div className='header-post-admin'></div>
                <Form>
                    <Row xs={1} md={2}>
                        <Col>
                            <Form.Group className="mb-3" controlId="title">
                                <Form.Label>Tiêu đề: </Form.Label>
                                <Form.Control type="text" placeholder="Nhập tiêu đề" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Mô tả</Form.Label>
                                <Form.Control type="text" placeholder="Mô tả bài viết" />
                            </Form.Group>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Tải hình ảnh lên</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CKEditor
                                editor={ClassicEditor}
                                data="<p>Hello from CKEditor 5!</p>"
                                onReady={editor => {
                                    // You can store the "editor" and use when it is needed.
                                    console.log('Editor is ready to use!', editor);
                                }}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    console.log({ event, editor, data });
                                }}
                                onBlur={(event, editor) => {
                                    console.log('Blur.', editor);
                                }}
                                onFocus={(event, editor) => {
                                    console.log('Focus.', editor);
                                }}
                            />
                        </Col>
                    </Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        );
    }
}

export default PostAdmin;