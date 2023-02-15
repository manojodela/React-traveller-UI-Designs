import { Button, Col, Row } from "antd";
import Container from "react-bootstrap/esm/Container";
import Hero from '../assets/hero.jpeg';
import Hero1 from '../assets/hero1.jpeg';
import Hero2 from '../assets/hero2.jpg';
import gridImg4 from '../assets/gridImg5.jpeg';
import mountainImg from '../assets/mountain.jpeg';
import sunset from '../assets/sunset.jpeg';
import seaImg from '../assets/seaImg.jpeg';
import ghatImg from '../assets/ghats.jpeg';
import Link from "antd/es/typography/Link";
import childImg from '../assets/cardImg2.jpeg';

const About = () => {
    return <>
        <Container fluid className="mb-4">
            <section>
                <Row className="align-items-center g-3">
                    <Col lg={6} className="offset-sm-1">
                        <div className="p-1  text-start">
                            <h2 className="title mb-2">Hey, there</h2>
                            <h1 className="tag mb-4">I'm Sharah<span className="dot">.</span></h1>
                            <p className="desc pe-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                        </div>
                    </Col>
                    <Col lg={16} className=" position-relative">
                        <img src={gridImg4} className="img-fluid shadow-lg" alt="grid" />
                        <div className="position-absolute img-down">
                            <Row gutter={16}>
                                <Col lg={12} xs={24} className="position-relative btn-down py-2">
                                    <img src={Hero1} className="img-fluid img-sm shadow-lg" alt="hero1"/>
                                    <Button className="position-absolute top-100 start-100 translate-middle btn-dsp">VIEW BLOG</Button>
                                </Col>
                                <Col lg={12} xs={24} className="position-relative btn-down py-2">
                                    <img src={Hero2} className="img-fluid img-sm shadow-lg" alt="hero2" />
                                    <Button className="position-absolute top-100 start-100 translate-middle btn-dsp" >ABOUT ME</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="my-5">
                <Row className="justify-content-center">
                    <Col lg={10} md={12}>
                        <div className="py-5 px-2 ">
                            <h2 className=" fw-bold">In the summer of 2017 I started my travel around the world. In my blog you can follow me.</h2>
                        </div>
                    </Col>
                    <Col lg={10} md={12}>
                        <div className="py-5 px-1">
                            <p className="desc ">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                        </div>
                    </Col>
                </Row>
            </section>

            <section className="mt-lg max-width">
                <div className="position-relative img-wrapper pb-5">
                    <img src={Hero} alt="hero" className="position-absolute about-image-block img-design" />
                    <img src={mountainImg} alt="hero" className="position-absolute about-image-block _2 img-design" />
                    <img src={Hero1} alt="hero" className="position-absolute about-image-block _3 img-design" />
                    <img src={seaImg} alt="hero" className="position-absolute about-image-block _4 img-design" />
                </div>
            </section>

            <section className="margin-height">
                <h2 className='tag-1  offset-sm-1 mb-5'>Read my <span>Latest Stories</span></h2>
                <Row className="justify-content-evenly align-items-center my-5">
                    <Col lg={8} md={8} sm={12} className="mb">
                        <img src={ghatImg} alt="side1" className="img-fluid sideImg" />
                    </Col>
                    <Col lg={12} md={16} sm={12} >
                        <div className="ms-2">
                            <p className="">Written on <strong>June 15, 2018</strong> in <span ><Link className="text">Africa</Link></span></p>
                            <h5 className="display-5 fw-bold fs-1 tag text mb-3">Things I always pack for a long walk in nature</h5>
                            <p className="w-75 desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-evenly align-items-center my-5">
                    <Col lg={8} md={8} sm={12} className="mb">
                        <img src={sunset} alt="side1" className="img-fluid sideImg" />
                    </Col>
                    <Col lg={12} md={16} sm={12}>
                        <div className="ms-2">
                            <p className="">Written on <strong>June 15, 2018</strong> in <span ><Link className="text">Asia</Link></span></p>
                            <h5 className="display-5 fw-bold fs-1 tag text mb-3">What I do on a boring day while travelling around the world</h5>
                            <p className="w-75 desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                        </div>
                    </Col>
                </Row>

                <Row className="justify-content-evenly align-items-center my-5 ">
                    <Col lg={8} md={8} sm={12}>
                        <img src={childImg} alt="side1" className="img-fluid sideImg" />
                    </Col>
                    <Col lg={12} md={16} sm={12}>
                        <div className="ms-2">
                            <p className="">Written on <strong>June 15, 2018</strong> in <span ><Link className="text">Europe</Link></span></p>
                            <h5 className="display-5 fw-bold fs-1 tag text mb-3">The top 20 and my favorite historical sites in the world</h5>
                            <p className="w-75 desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                        </div>
                    </Col>
                </Row>
            </section>
        </Container>


    </>
}
export default About;