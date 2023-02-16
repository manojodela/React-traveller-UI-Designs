import { Button, Col, Row } from "antd";
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import Hero2 from '../assets/hero2.jpg';

const Footer = () => {
    return <>
        <Container fluid className="margin-top  footer  mt-auto footer text-white" >
            <Row className="mt-5 py-5 justify-content-center align-items-center">
                <Col lg={17} md={12} xs={24}>
                    <Row className="my-2 py-5">
                        <Col lg={7} md={12} sm={12} xs={24}>
                            <h3>ABOUT</h3>
                            <br />
                            <p className="f-text">Copyright © Template Traveler</p>
                            <p className="f-text">Template design by <Link className="f-link">Studio Corvus</Link></p>
                            <p className="f-text">Powered by <Link className="f-link">Webflow</Link></p>
                        </Col>
                        <Col lg={7} md={12} sm={12} xs={24}>
                            <h3>INFO</h3>
                            <br />
                            <p><Link className="f-link">Blog</Link></p>
                            <p><Link className="f-link">Studio Corvus</Link></p>
                            <p className="f-link">Powered by Webflow</p>
                        </Col>
                        <Col lg={7} md={24} sm={24} xs={24}>
                            <h3>CATEGORIES</h3>
                            <br />
                            <Row>
                                <Col lg={12} sm={12} xs={12}>
                                    <p><Link className="f-link">Europe</Link></p>
                                    <p><Link className="f-link">Personal</Link></p>
                                    <p><Link className="f-link">Travel</Link></p>
                                </Col>
                                <Col lg={12} sm={12} xs={12}>
                                    <p> <Link className="f-link">Asia</Link></p>
                                    <p> <Link className="f-link">Highlights</Link></p>
                                    <p> <Link className="f-link">Africa</Link></p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <p className="fw-normal mb-4 fs-5">WANT TO READ MY STORIES IN YOUR INBOX?</p>
                    <input type="text" className="form-control-lg border-0 rounded-0 mb-1" placeholder="Enter your email" />
                    <Button className="text-white bg-btn form-control-lg border-0 rounded-0 mb-3 font-style">YES, AWESOME!</Button>
                </Col>
                <Col lg={5} md={5} sm={12} xs={12}>
                    <div className="psoition-relative">
                        <img src={Hero2} alt="footer" className="img-fluid " />
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}
export default Footer;