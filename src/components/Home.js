import { Button, Col, Row } from "antd";
import Container from "react-bootstrap/esm/Container";
import Hero from '../assets/hero.jpeg';
import Hero1 from '../assets/hero1.jpeg';
import Hero2 from '../assets/hero2.jpg';



const Home = () => {
    return <>
        <Container fluid className="mb-4">
            <Row className="align-items-center" gutter={4}>
                <Col lg={8}>
                    <div className="p-4 text-start">
                        <h2 className="title mb-2">Hey, I'm Sarah!</h2>
                        <h1 className="tag mb-4">Follow my travels around the world<span className="dot">.</span></h1>
                        <p className="desc pe-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                        <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                    </div>
                </Col>
                <Col lg={16} className=" position-relative">
                    <img src={Hero} className="img-fluid " alt="hero" />
                    <div className="position-absolute img-down">
                        <Row gutter={16}>
                            <Col lg={12} xs={24} className="position-relative btn-down">
                                <img src={Hero1} className="img-fluid img-sm" alt="hero2" />
                                <Button className="position-absolute top-100 start-100 translate-middle btn-dsp text-white">VIEW BLOG</Button>
                            </Col>
                            <Col lg={12} xs={24} className="position-relative btn-down">
                                <img src={Hero2} className="img-fluid img-sm" alt="hero2" />
                                <Button className="position-absolute top-100 start-100 translate-middle btn-dsp text-white" >ABOUT ME</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}
export default Home;