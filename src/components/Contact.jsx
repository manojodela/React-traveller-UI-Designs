import { Button, Col, Row } from "antd";
import Container from "react-bootstrap/esm/Container";
import Hero1 from '../assets/hero1.jpeg';
import Hero2 from '../assets/hero2.jpg';


const Contact = () => {
    return <>
        <Container fluid>
            <Row className="align-items-center">
                <Col lg={8} md={8} sm={24} className="offset-1">
                    <div className="p-4">
                        <h4 className="tag-1 fs-4">Let's get in touch!</h4>
                        <h1 className="tag mb-4">Send me a Message<span className="dot">.</span></h1>
                        <p className="desc w-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                    </div>
                </Col>
                <Col lg={14} md={14} sm={24} xs={24} className="bg-pink">
                    <div className="p-5 mt-3 mb-5">
                        <form className="w-75" style={{ height: "480px" }}>
                            <div class="form-group">
                                <label for="name" >Your Name</label> <br />
                                <input type="text" class="form-control bg-transparent border-0" placeholder="John Doe" />
                            </div>
                            <div class="form-group">
                                <label for="email">Your Email</label> <br />
                                <input type="email" class="form-control bg-transparent border-0" placeholder="Enter email" />
                            </div>
                            <div class="form-group mb-5">
                                <label for="exampleInputPassword1">Your Message</label> <br />
                                <textarea type="password" class="form-control bg-transparent border-0" placeholder="Hi, Sarah!" rows={5} />
                            </div>

                            <button type="submit" class="btn bg-white rounded-0 mb-4 px-5">SUBMIT</button>
                        </form>
                    </div>


                    <div className="position-absolute img-down contact">
                        <Row gutter={16}>
                            <Col lg={12} xs={24} className="position-relative btn-down ">
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
export default Contact;