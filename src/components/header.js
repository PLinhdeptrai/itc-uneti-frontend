import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../asset/css/header.css";
import Button from 'react-bootstrap/Button';
import ImageLogo from "../asset/image/Logocon.png";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {FaHome, FaBookOpen, FaBell, FaRocket, FaChartBar, FaQuestionCircle} from 'react-icons/fa'
function BasicExample() {
    return (
        <div>
            <Navbar expand="xl" className='header-nav'>

                <Container className='container-header'>
                    <Navbar.Brand className='header-selection' href="#home">
                        <img className='header-logo' src={ImageLogo} alt='error-img'></img>
                    </Navbar.Brand>
                    <Navbar.Toggle className='header-toggle' aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className='header-collapse' id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className='header-selection' href='/'><FaHome className='nav-icon' size={45} color='#4153cc'/> <p>Trang chủ</p></Nav.Link>
                            <Nav.Link className='header-selection' href="/link"><FaRocket className='nav-icon' size={45} color='#4153cc' /><p>Hoạt động</p></Nav.Link>
                            <Nav.Link className='header-selection' href="/link"><FaBookOpen className='nav-icon' size={45} color='#4153cc'/> <p>Khóa học</p></Nav.Link>
                            <Nav.Link className='header-selection' href="#event"><FaBell className='nav-icon' size={45} color='#4153cc'/> <p>Sự kiện</p></Nav.Link>
                            <Nav.Link className='header-selection' href="/score"><FaChartBar className='nav-icon' size={45} color='#4153cc'/> <p>Xem điểm</p></Nav.Link>
                            <Nav.Link className='header-selection' href="#v"><FaQuestionCircle className='nav-icon' size={45} color='#4153cc'/> <p>Liên hệ</p></Nav.Link>
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
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div>
    );
}

export default BasicExample;