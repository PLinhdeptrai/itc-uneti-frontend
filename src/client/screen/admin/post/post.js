import React, { useState, useEffect } from "react";
import "../../../../asset/css/postadmin.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import Slidebar from "../../../../components/admin/slidebar/slidebar";
import Navbar from "../../../../components/admin/navbar/navbar";
import { loginSelector } from "../../../../redux/slice/login";
import { useSelector } from "react-redux";
import swal from "sweetalert";

function PostAdmin() {
  const token = useSelector(loginSelector.currentToken);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState();
  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("content", content);
    formData.append("file", file, "img.png");

    console.log(formData);
    const data = await axios
      .post("http://localhost:8080/api/news/create", formData, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (data) {
        swal({
          title: "Đăng bài thành công!",
          text: "",
          icon: "success",
          button: "OK",
        });
      })
      .catch(function (error) {
        console.log(error);
        alert("loi roi");
      });
  };

  return (
    <div className="admin-post">
      <div>
        <h1 className="admin-post-title">Đăng bài</h1>
      </div>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Tiêu đề: </Form.Label>
              <Form.Control
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                placeholder="Nhập tiêu đề"
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Mô tả</Form.Label>
              <Form.Control
                onChange={(e) => setDesc(e.target.value)}
                type="text"
                placeholder="Mô tả bài viết"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="description">
              <Form.Label>Tải hình ảnh lên</Form.Label>
              <Form.Control
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <CKEditor
              editor={ClassicEditor}
              data=""
              onReady={(editor) => {}}
              onChange={(event, editor) => {
                const data = editor.getData();
                setContent(data);
              }}
              onBlur={(event, editor) => {}}
              onFocus={(event, editor) => {}}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button
              variant="primary"
              type="button"
              className="post-admin-button"
              onClick={() => handleSubmit()}
            >
              Đăng ngay
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default PostAdmin;