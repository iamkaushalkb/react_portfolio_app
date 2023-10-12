import { React } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCards } from "./ProjectCards";
import paathsala from "../assets/img/paathsala.PNG";
import dharaharaclothings from "../assets/img/dharaharaclothings.PNG";
import meronatija from "../assets/img/meronatija.png";
import brssui from "../assets/img/brssui.PNG";
import mndashboardui from "../assets/img/mndashboardui.png";
import mnannouncement from "../assets/img/mnannouncement.png";
import loginui from "../assets/img/login.png";
import desvulogo from "../assets/img/desvu.jpg";

export const Projects=()=>{
    const frontend = [
        {
          title: "Paathsala",
          description: "A School Enterprise resource planning (ERP) Software.",
          imgUrl: paathsala,
        },
        {
            title: "Dharahara Clothings",
            description: "A online website for clothing’s and other items.",
            imgUrl: dharaharaclothings,
        },
        {
            title: "MeroNatija",
            description: "A online website for checking results and report card.",
            imgUrl: meronatija,
        }
    ];
    const uiux = [
        {
          title: "Brahma Rupa UI",
          description: "UI for Brahma Rupa Secondary School's website",
          imgUrl: brssui,
        },
        {
            title: "Meronatija UI",
            description: "UI for Mero Natija's Dashboard where results are upload",
            imgUrl: mndashboardui,
        },
        {
            title: "Login UI",
            description: "UI for Login interface where user can login for further process.",
            imgUrl: loginui,
        }
    ];  
    const graphic = [
        {
            title: "Logo - Dès Vu Technologies",
            description: "Logo of Dès Vu Technologies made using Adobe Illustrator and Canva.",
            imgUrl: desvulogo,
          },
        {
          title: "MeroNatija Announcement",
          description: "A online website for checking results and report card.",
          imgUrl: mnannouncement,
        }
    ];  
    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                    <h2>Projects</h2>
                        <Tab.Container id="project-tabs" defaultActiveKey="first">
                            <Nav varient="pills" className="nav-pills mb-5 justify-content-center align-item-center" id="pills-tab" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Front-End Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">UI/UX Design</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Graphic Design</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content id="slideInUp">
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            frontend.map((project,index)=>{
                                                return(
                                                    <ProjectCards key={index}
                                                                      {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            uiux.map((project,index)=>{
                                                return(
                                                    <ProjectCards key={index}
                                                                      {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            graphic.map((project,index)=>{
                                                return(
                                                    <ProjectCards key={index}
                                                                      {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}