import { Col, Row } from "antd";
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';

const Footer = () => {
    return <>
        <Container fluid className="margin-top  footer  mt-auto bg-dark text-white" >
            <Row className="">
                <Col lg={18} md={12} xs={24}>
                    <Row>
                        <Col lg={7}>
                            <h3>ABOUT</h3>
                            <br />
                            <p>Copyright © Template Traveler</p>
                            <p>Template design by <Link>Studio Corvus</Link></p>
                            <p>Powered by <Link>Webflow</Link></p>
                        </Col>
                        <Col lg={7}>
                            <h3>INFO</h3>
                            <br />
                            <p>Blog</p>
                            <p><Link>Studio Corvus</Link></p>
                            <p>Powered by Webflow</p>
                        </Col>
                        <Col lg={7}>
                            <h3>ABOUT</h3>
                            <br />
                            <p>Copyright © Template Traveler</p>
                            <p>Template design by <Link>Studio Corvus</Link></p>
                            <p>Powered by Webflow</p>
                        </Col>
                    </Row>
                </Col>
                <Col lg={6} md={12} xs={24}>

                </Col>
            </Row>
        </Container>
    </>
}
export default Footer;