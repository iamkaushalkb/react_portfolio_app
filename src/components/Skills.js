import { React } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import web_development from "../assets/img/webdevelopment.png";
import web_design from "../assets/img/webdesign.png";
import uiux_design from "../assets/img/uiuxdesign.png";
import graphic_design from "../assets/img/graphicdesign.png";
import data_entry from "../assets/img/dataentry.png";

export const Skills=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return(
        <section className="skill" id="skill">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores assumenda amet repudiandae quo cupiditate eos ullam esse exercitationem totam quasi eum facere ab, nisi eius quia odio possimus voluptas sit?</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item skill-card">
                                    <img src={web_development} alt="Web Development" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item item skill-card">
                                    <img src={web_design} alt="Web Design" />
                                    <h5>Web Design</h5>
                                </div>
                                <div className="item skill-card">
                                    <img src={uiux_design} alt="UI/UX Design" />
                                    <h5>UI/UX Design</h5>
                                </div>
                                <div className="item skill-card">
                                    <img src={graphic_design} alt="Graphic Design" />
                                    <h5>Graphic Design</h5>
                                </div>
                                <div className="item skill-card">
                                    <img src={data_entry} alt="Data Entry" />
                                    <h5>Data Entry</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}