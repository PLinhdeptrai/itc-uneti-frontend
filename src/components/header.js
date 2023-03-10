import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../asset/css/header.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import ImageLogo from "../asset/image/logo.png";
import path from "../utils/path/path";
import { Routes, Route, Link } from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function BasicExample() {
    return (
        <div>
            <div className='header-top'>
                <p>Câu lạc bộ tin học ITC xin chào !</p>
            </div>
            <Navbar expand="xl" className='header-nav'>

                <Container className='container-header'>
                    <Navbar.Brand className='header-selection' href="#home">
                        <img className='header-logo' src={ImageLogo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle className='header-toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='header-collapse' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='header-selection' href="/link">Hoạt động</Nav.Link>
                            <Nav.Link className='header-selection' href="/link">Khóa học</Nav.Link>
                            <Nav.Link className='header-selection' href="#event">Sự kiện</Nav.Link>
                            <Nav.Link className='header-selection' href="/score">Xem điểm</Nav.Link>
                            <Nav.Link className='header-selection' href="#v">Liên hệ</Nav.Link>


                        </Nav>
                        <div className='button-header me-auto'>
                            <Nav.Link className='header-selection login-button-link' href="/login">
                                <Button className='login-button btn-link' >
                                    <AccountCircleIcon className='login-icon' />
                                    Đăng nhập
                                </Button>{' '}
                            </Nav.Link>
                            <Nav.Link className='header-selection login-button-link' href="/register">
                                <Button className='login-button btn-link'>
                                    <AccountCircleIcon className='login-icon' />
                                    Đăng kí
                                </Button>{' '}
                            </Nav.Link>
                        </div>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
}

export default BasicExample;