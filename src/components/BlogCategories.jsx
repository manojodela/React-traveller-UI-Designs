import { Button, Col, Row } from "antd"
import Link from "antd/es/typography/Link"
import { Container } from "react-bootstrap"
import childImg from '../assets/cardImg2.jpeg';
import img1 from '../assets/cardImg1.jpeg';
import img2 from '../assets/cardImg2.jpeg';
import img3 from '../assets/cardImg3.jpeg';
import img4 from '../assets/cardImg4.jpeg';
import plane from '../assets/plane.jpeg';
import sunset from '../assets/sunset.jpeg';

const BlogCategories = () => {
    return <>
        <Container fluid className='p-0'>
            <Row className="align-items-center mb-3" >
                <Col lg={8} md={8}>
                    <div className="p-4  text-end">
                        <h1 className="tag mb-2">Categories</h1>
                        <br />
                        <p className="desc w-75 ms-auto">The customer is very important, the customer will be followed by the customer. In fact, the stress factor in the eros is the sad element.</p>
                        <div className="text-center ">
                            <h5 className="ms-auto mb-0">Search my Blog:</h5>
                        </div>
                        <div className='d-inline-flex ' style={{ zIndex: "1", position: "relative" }}>
                            <input type="text" className="form-control-lg rounded-0 shadow-lg border-0 mb-1" placeholder="Enter keyword(s)..." />
                            <Button className="text-white bg-btn form-control-lg border-0 rounded-0">SEARCH POSTS</Button>
                        </div>
                    </div>
                </Col>
                <Col lg={16} md={14} className=" position-relative">
                    <img src={childImg} className="img-fluid position-relative" alt="hero" style={{ zIndex: "0", position: "relative", boxShadow: "14px 14px 16px -10px" }} />
                    <h1 className="display-3 fw-bolder font-style text-white position-absolute  bottom-0 start-25 ms-5 mb-5">Asia</h1>
                    <h5 className="fw-normal font-style text-white position-absolute  bottom-0 end-0 me-5 mb-5 pb-3">VIEW POSTS</h5>
                </Col>
            </Row>

            <Row className="justify-content-center ">
                <div className="text-center">
                    <h2 className='tag-1  fw-normal my-4 fw-bold mb-2 ms-2'>Discover My <span>Stories:</span></h2>
                    <Row className="justify-content-center">
                        <div className="position-relative">
                            <img src={img3} alt="img3" className="img-fluid cat-img1" />
                            <h4 className="position-absolute text-up">Africa</h4>
                            <p className="position-absolute text-down">View Posts</p>
                        </div>
                        <div className="position-relative">
                            <img src={img2} alt="img2" className="img-fluid cat-img1" />
                            <h4 className="position-absolute text-up">Asia</h4>
                            <p className="position-absolute text-down">View Posts</p>
                        </div>
                        <div className="position-relative">
                            <img src={img4} alt="img4" className="img-fluid cat-img1" />
                            <h4 className="position-absolute text-up">Europe</h4>
                            <p className="position-absolute text-down">View Posts</p>
                        </div>
                        <div className="position-relative">
                            <img src={img1} alt="img1" className="img-fluid cat-img1" />
                            <h4 className="position-absolute text-up">Holidays</h4>
                            <p className="position-absolute text-down">View Posts</p>
                        </div>
                        <div className="position-relative">
                            <img src={plane} alt="img1" className="img-fluid cat-img1" />
                            <h4 className="position-absolute text-up">Personal</h4>
                            <p className="position-absolute text-down">View Posts</p>
                        </div>
                        <div className="position-relative">
                            <img src={sunset} alt="img1" className="img-fluid cat-img1" />
                            <h4 className="position-absolute text-up">Travel</h4>
                            <p className="position-absolute text-down">View Posts</p>
                        </div>
                    </Row>
                </div>

            </Row>
        </Container>
    </>
}
export default BlogCategories;