import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

export default function Header() {
    return (
        <header>
            <Navbar expand="lg" bg="white" data-bs-theme="white">
                <Container>
                    <Navbar.Brand href="/">
                        <img 
                            alt="logo"
                            src="/logo_final.png"
                            width="100"
                            height="50"
                            object-fit="cover"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">마이펫</Nav.Link>
                            <Nav.Link href="/">펫스티벌</Nav.Link>
                            <Nav.Link href="/">펫시설찾기</Nav.Link>
                            <Nav.Link href="/petmunity">펫뮤니티</Nav.Link>
                            <Nav.Link href="/">about us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ml-auto">
                            <Nav.Link href="/">로그인</Nav.Link>
                            <div className="vr"></div>
                            <Nav.Link href="/">회원가입</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <hr className="solid" />
        </header>
    )
}