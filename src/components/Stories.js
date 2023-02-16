import { Row, Col, Button, Space } from 'antd';
import Link from 'antd/es/typography/Link';
import Container from 'react-bootstrap/Container';
import img1 from '../assets/cardImg1.jpeg';
import img2 from '../assets/cardImg2.jpeg';
import img3 from '../assets/cardImg3.jpeg';
import img4 from '../assets/cardImg4.jpeg';
import side1 from '../assets/side1.jpeg';
import side2 from '../assets/side2.jpeg';
import side3 from '../assets/side3.jpeg';
import avatar from '../assets/avatar.jpg';
import gridImg1 from '../assets/gridImg1.jpeg';
import gridImg2 from '../assets/gridImg3.jpeg';
import gridImg3 from '../assets/gridImg4.jpeg';
import gridImg4 from '../assets/gridImg5.jpeg';
import Hero from '../assets/hero.jpeg';
import Hero1 from '../assets/hero1.jpeg';
import bg from '../assets/bg-cover.jpg';
import plane from '../assets/plane.jpeg';
import sunset from '../assets/sunset.jpeg';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const Stories = () => {
    const { pathname } = useLocation();
    const style = {
        width: "300px",
        height: "400px",
        opacity: "1",
        'object-fit': "cover"
    };

    const style1 = {
        width: "246px",
        height: "310px",
        'object-fit': "cover"
    };

    return <>
        <Container className='my-5 pt-5'>
            <h2 className='tag-1'>Discover <span>My Stories</span></h2>
            <Row >
                <Col lg={6} md={12} sm={12} xs={24} className="hovered position-relative">
                    <img src={plane} className="img-fluid card1" alt='card1' style={style} />
                    <h4 className='position-absolute top-0 start-50 translate-middle mt-5 text-white'>Highlights</h4>
                    <Link className='position-absolute  bottom-0 start-50 translate-middle-x mb-5 text-white fw-normal text-uppercase'>View Posts</Link>
                </Col>
                <Col lg={6} md={12} sm={12} xs={24} className="hovered position-relative">
                    <img src={sunset} className="img-fluid card1" alt='card2' style={style} />
                    <h4 className='position-absolute top-0 start-50 translate-middle mt-5 text-white'>Asia</h4>
                    <Link className='position-absolute  bottom-0 start-50 translate-middle-x mb-5 text-white fw-normal text-uppercase'>View Posts</Link>
                </Col>
                <Col lg={6} md={12} sm={12} xs={24} className="hovered position-relative">
                    <img src={img4} className="img-fluid card1" alt='card3' style={style} />
                    <h4 className='position-absolute top-0 start-50 translate-middle mt-5 text-white'>Africa</h4>
                    <Link className='position-absolute  bottom-0 start-50 translate-middle-x mb-5 text-white fw-normal text-uppercase'>View Posts</Link>
                </Col>
                <Col lg={6} md={12} sm={12} xs={24} className="hovered position-relative">
                    <img src={img2} className="img-fluid card1" alt='card4' style={style} />
                    <h4 className='position-absolute top-0 start-50 translate-middle mt-5 text-white'>Europe</h4>
                    <Link className='position-absolute  bottom-0 start-50 translate-middle-x mb-5 text-white fw-normal text-uppercase'>View Posts</Link>
                </Col>
            </Row>
        </Container>
        <Container className='my-4'>
            <div className='text-end'>
                <div >
                    <h5>Want to discover my complete blog?</h5>
                </div>
                <Button type="link" className="more-btn border-0 text-uppercase p-0">Visit Blog &nbsp;<span className="fw-bold"> &#8211;</span></Button>
            </div>
        </Container>
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
        </Container>
        <Container fluid className='mt-2 cover-relative p-0 pt-3' style={{ position: "relative", zIndex: "1" }}>
            <img src={bg} alt="bg-cover" className='img-fluid margin-top position-absolute bg-cover-none mb' />
            <Container>
                <Row gutter={{ lg: 12, md: 12, sm: 12 }} className="justify-content-center align-items-center">
                    <Col lg={11} md={12} sm={12} xs={20}>
                        <div className='p-2 text-start'>
                            <h2 className="tag mb-4 fw-bold">Why am I sharing my travel stories?</h2>
                            <p className=' w-75'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </div>
                        <div>
                            <Row gutter={{ lg: 12, md: 12, sm: 12 }} className='align-items-center justify-content-center'>
                                <img src={avatar} alt="avatar" className='rounded-circle me-4 img-mb ' />
                                <Col className=''>
                                    <h3 className='mb-0 title'>Sarah Fischer</h3>
                                    <Button type="link" className="more-btn border-0 text-uppercase p-0">Read more stories &nbsp;<span className="fw-bold"> &#8211;</span></Button>
                                </Col>
                                <Row gutter={{ lg: 12, md: 12, sm: 12 }} className="mg-0 justify-content-center">
                                    <Col lg={12} md={12} sm={12} xs={24} className=" position-relative my-auto">
                                        <img src={gridImg1} className="img-fluid card1 img-mb" alt='card1' style={style1} />
                                    </Col>
                                    <Col lg={12} md={12} sm={12} xs={24} className=" position-relative">
                                        <Space direction="vertical" size="middle">
                                            <img src={Hero} className="img-fluid card1 img-mb" alt='card1' style={style1} />
                                            <img src={Hero1} className="img-fluid card1 img-mb" alt='card1' style={style1} />
                                        </Space>
                                    </Col>
                                </Row>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={11} md={12} sm={12} xs={20}>
                        <Row gutter={{ lg: 8,  md: 12, sm: 12 }} >
                            <Col lg={12} md={12} sm={12} xs={24} className=" position-relative ">
                                <Space direction="vertical" size="middle">
                                    <img src={gridImg2} className="img-fluid card1 img-mb" alt='card1' style={style1} />
                                    <img src={gridImg3} className="img-fluid card1 img-mb" alt='card1' style={style1} />
                                </Space>
                            </Col>
                            <Col lg={12} md={12} sm={12} xs={24} className=" position-relative my-auto">
                                <img src={gridImg4} className="img-fluid card1 img-mb" alt='card1' style={style1} />
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>

        {pathname === '/' && (
            <div className='footer-top position-relative'>
                <div className='position-absolute footer w-100'>
                    <Footer />
                </div>
            </div>
        )}
    </>
}
export default Stories;