import React from 'react';
import { Container, Row, Nav, Navbar, Col, Stack, Button } from 'react-bootstrap';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <Navbar expand="lg" >
        <Container>
          <Row className='w-100'>
            <Col className={styles.wrapHeader}>
              <div className={'toggle-header ' + styles.toggleHeader}>
                <Navbar.Brand href="/" className={styles.logo}>
                  Damas D2
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
              </div>
              <div className={styles.wrapSideBar }>
                <div className={styles.sideBar }>
                  <Stack direction="horizontal" gap={3} className='justify-content-end '>
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className={styles.navBarItems}>
                        <Nav.Link href="/about" className={styles.navBarLink}>About Me</Nav.Link>
                        <Nav.Link href="#link" className={styles.navBarLink}>Services</Nav.Link>
                        <Nav.Link href="#link" className={styles.navBarLink}>Portfolio</Nav.Link>
                        <Nav.Link href="/blogs" className={styles.navBarLink}>Blog</Nav.Link>
                        <Nav.Link href="#link" className={styles.navBarLink}>Contact</Nav.Link>
                        <Nav.Link href="#link" className={styles.navBarLink}>
                          <Button variant="primary" className='text-white'>HIRE ME</Button>
                        </Nav.Link>
                      </Nav>
                    </Navbar.Collapse>
                  </Stack>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </header>
  );
}