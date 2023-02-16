import { Col, Row } from "antd";
import Link from "antd/es/typography/Link";
import { Container } from "react-bootstrap";
import img1 from '../assets/cardImg1.jpeg';
import img2 from '../assets/cardImg2.jpeg';
import img3 from '../assets/cardImg3.jpeg';
import img4 from '../assets/cardImg4.jpeg';
import plane from '../assets/plane.jpeg';
import sunset from '../assets/sunset.jpeg';


const Categories = () => {
    return <>
        <Container>
            <Row className="cat justify-content-center">
                <Col lg={16} md={18} className="">
                    <div className="">
                        <h2 className='tag-1 fw-normal my-4 fs-3 mb-1 ms-2'>Discover My Story <span>Categories:</span></h2>
                        <Row>
                            <div className="position-relative">
                                <img src={img3} alt="img3" className="img-fluid cat-img" />
                                <h4 className="position-absolute text-up">Africa</h4>
                                <p className="position-absolute text-down">View Posts</p>
                            </div>
                            <div className="position-relative">
                                <img src={img2} alt="img2" className="img-fluid cat-img" />
                                <h4 className="position-absolute text-up">Asia</h4>
                                <p className="position-absolute text-down">View Posts</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="position-relative">
                                <img src={img4} alt="img4" className="img-fluid cat-img" />
                                <h4 className="position-absolute text-up">Europe</h4>
                                <p className="position-absolute text-down">View Posts</p>
                            </div>
                            <div className="position-relative">
                                <img src={img1} alt="img1" className="img-fluid cat-img" />
                                <h4 className="position-absolute text-up">Holidays</h4>
                                <p className="position-absolute text-down">View Posts</p>
                            </div>
                        </Row>
                        <Row>
                            <div className="position-relative">
                                <img src={plane} alt="img1" className="img-fluid cat-img" />
                                <h4 className="position-absolute text-up">Personal</h4>
                                <p className="position-absolute text-down">View Posts</p>
                            </div>
                            <div className="position-relative">
                                <img src={sunset} alt="img1" className="img-fluid cat-img" />
                                <h4 className="position-absolute text-up">Travel</h4>
                                <p className="position-absolute text-down">View Posts</p>
                            </div>
                        </Row>
                    </div>
                </Col>
                <Col lg={7} md={6} sm={12}>
                    <div className="">
                        <h2 className='tag-1 fw-normal my-4 fs-3 mb-1'>Filter Posts by <span>Tags:</span></h2>
                        <Link className="c-link">Diary</Link>
                        <Link className="c-link">Nature</Link>
                        <Link className="c-link">Friends</Link>
                        <Link className="c-link">Money</Link>
                        <Link className="c-link">Adventures</Link>
                        <Link className="c-link">Photography</Link>
                        <Link className="c-link">Africa</Link>
                        <Link className="c-link">Asia</Link>
                        <Link className="c-link">Mangolia</Link>
                        <Link className="c-link">Khazakistan</Link>
                        <Link className="c-link">Transport</Link>
                        <Link className="c-link">Fun</Link>
                        <Link className="c-link">Family</Link>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}

export default Categories;