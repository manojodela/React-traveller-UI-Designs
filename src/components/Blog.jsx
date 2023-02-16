import { Container } from 'react-bootstrap'
import { Button, Col, Row } from 'antd';
import ghatImg from '../assets/ghats.jpeg';
import sunset from '../assets/sunset.jpeg';
import childImg from '../assets/cardImg2.jpeg';
import side1 from '../assets/side1.jpeg';
import side2 from '../assets/side2.jpeg';
import side3 from '../assets/side3.jpeg';
import Link from 'antd/es/typography/Link';
import Categories from './Categories';


const Blog = () => {
    return <>
        <Container fluid className='p-0'>
            <Row className="align-items-center" >
                <Col lg={8}>
                    <div className="p-4 text-end">
                        <p className="">Written on <strong>June 15, 2018</strong> in <span ><Link className="text">Africa</Link></span></p>
                        <h1 className="tag-1 mb-4">Things I always pack for a long walk in nature<span className="dot">.</span></h1>
                        <Button type="link" className="more-btn border-0 text-uppercase p-0">READ STORY <span className="dash"></span></Button>
                        <br />
                        <div className='d-inline-flex ' style={{ zIndex: "1", position: "relative" }}>
                            <input type="text" className="form-control-lg rounded-0 shadow-lg border-0 mb-1" placeholder="Enter keyword(s)..." />
                            <Button className="text-white bg-btn form-control-lg border-0 rounded-0">SEARCH POSTS</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={16} className=" position-relative">
                    <img src={ghatImg} className="img-fluid " alt="hero" style={{ zIndex: "0", position: "relative" }} />
                </Col>
            </Row>

            <section className="">
                <h2 className='tag-1  offset-sm-1 my-4'>Read my <span>Latest Stories</span></h2>
                <Row className="justify-content-evenly align-items-center my-5">
                    <Col lg={8} md={8} sm={12} className="mb">
                        <img src={ghatImg} alt="side1" className="img-fluid sideImg" />
                    </Col>
                    <Col lg={12} md={16} sm={12} >
                        <div className="ms-2">
                            <p className="">Written on <strong>June 15, 2018</strong> in <span ><Link className="text">Africa</Link></span></p>
                            <h5 className="display-5 fw-bold fs-1 tag text mb-3">Things I always pack for a long walk in nature</h5>
                            <p className="w-75 desc">Fusce varius fermentum tortor, a vestibulum ipsum varius at. Proin id tortor in nulla sollicitudin rhoncus aliquet ac quam. Duis bibendum dapibus orci at tempus. Integer sit amet fringilla nisl. Maecenas vitae varius velit, quis sagittis nulla. Nunc lacinia aliquam leo.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Read story <span className="dash"></span></Button>
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
                            <p className="w-75 desc">Fusce varius fermentum tortor, a vestibulum ipsum varius at. Proin id tortor in nulla sollicitudin rhoncus aliquet ac quam. Duis bibendum dapibus orci at tempus. Integer sit amet fringilla nisl. Maecenas vitae varius velit, quis sagittis nulla. Nunc lacinia aliquam leo.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Read story <span className="dash"></span></Button>
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
                            <h5 className="display-5 fw-bold fs-1 tag text mb-3">How I spent 24 hours in an airplane</h5>
                            <p className="w-75 desc">Fusce varius fermentum tortor, a vestibulum ipsum varius at. Proin id tortor in nulla sollicitudin rhoncus aliquet ac quam. Duis bibendum dapibus orci at tempus. Integer sit amet fringilla nisl. Maecenas vitae varius velit, quis sagittis nulla. Nunc lacinia aliquam leo.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Read story <span className="dash"></span></Button>
                        </div>
                    </Col>
                </Row>
            </section>

            <Container className='mt-4 '>
                <Row className="align-items-start " gutter={4}>
                    <Col lg={16} className="position-relative">
                        <img src={side1} className="img-fluid " alt="side1" />
                        <div className="position-absolute img-down">
                            <Row>
                                <Col lg={12} xs={24} className="position-relative btn-down p-2">
                                    <img src={side2} className="img-fluid img-sm" alt="side2" />
                                    <Button className="position-absolute top-100 start-100 translate-middle btn-dsp text-white">VIEW BLOG</Button>
                                </Col>
                                <Col lg={12} xs={24} className="position-relative btn-down p-2">
                                    <img src={side3} className="img-fluid img-sm" alt="side3" />
                                    <Button className="position-absolute top-100 start-100 translate-middle btn-dsp text-white" >ABOUT ME</Button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="p-4 text-start">
                            <h4 className="desc mb-2 fw-normal">FEATURED STORY</h4>
                            <h2 className="tag mb-4">My story of travelling through the mountains of Austria</h2>
                            <p className="desc pe-3">Fusce varius fermentum tortor, a vestibulum ipsum varius at. Proin id tortor in nulla sollicitudin rhoncus aliquet ac quam. Duis bibendum dapibus orci at tempus. Integer sit amet fringilla nisl. Maecenas vitae varius velit, quis sagittis nulla. Nunc lacinia aliquam leo.</p>
                            <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                        </div>
                    </Col>

                </Row>

                <Categories />
            </Container>
        </Container>
    </>
}
export default Blog;