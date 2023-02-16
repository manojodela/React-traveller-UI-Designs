import { Col, Container, Row } from "react-bootstrap"
import img1 from '../assets/cardImg1.jpeg';
import img2 from '../assets/cardImg2.jpeg';
import side1 from '../assets/side1.jpeg';
import gridImg1 from '../assets/gridImg1.jpeg';
import Hero1 from '../assets/hero1.jpeg';
import plane from '../assets/plane.jpeg';
import plane1 from '../assets/plane1.jpeg';
import ghats from '../assets/ghats.jpeg';
import sunset from '../assets/sunset.jpeg';
import bg from '../assets/bg-cover.jpg'
import { Link } from "react-router-dom";
import { Button } from "antd";

const data = [
    { id: 1, date: "June 15, 2022", country: "Africa", title: "Things I always pack for a long walk in nature", image: ghats },
    { id: 2, date: "March 07, 2022", country: "Asia", title: "What I do on a boring day while travelling around the world", image: sunset },
    { id: 3, date: "Januray 19, 2021", country: "Europe", title: "The top 20 and my favorite historical sites in the world", image: img2 },
    { id: 4, date: "August 25, 2022", country: "Highlights", title: "How I spent 24 hours in an airplane", image: plane1 },
    { id: 5, date: "December 16, 2022", country: "Personal", title: "My story of travelling through the mountains of Austria", image: gridImg1 },
    { id: 6, date: "August 21, 2022", country: "Travel", title: "How much does it cost to travel Western Europe?", image: plane },
    { id: 7, date: "July 15, 2022", country: "Africa", title: "How to travel the Philippines on a budget in 2018", image: side1 },
    { id: 8, date: "June 20, 2022", country: "Africa", title: "13 ways to save money while travelling in Iceland", image: img1 },
    { id: 9, date: "February 08, 2022", country: "Highlights", title: "My 7 reasons to visit Kazakhstan and Mongolia", image: Hero1 }
]


const ArchiveStories = () => {
    return <>
        <Container className="my-5">
            <h3 className="tag mb-4">More Stories from Archive</h3>
            <Row className="g-4 position-relative">
                {data.map((item) => (
                    <Col lg={4} key={item.id} className="d-flex align-items-stretch">
                        <div class="card" >
                            <img class="card-hover" src={item.image} alt="Card image cap" height="230px" style={{ objectFit: "cover" }} />
                            <div class="card-body">
                                <p className="">Written on <strong>{item.date}</strong> in <span ><Link className="text">{item.country}</Link></span></p>
                                <h5 class="card-title">{item.title}</h5>
                                <Button type="link" className="more-btn border-0 text-uppercase p-0">Learn more <span className="dash"></span></Button>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </>
}
export default ArchiveStories