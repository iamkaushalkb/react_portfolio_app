import { React } from "react";
import { Col } from "react-bootstrap";

export const ProjectCards=({title, role, description, imgUrl})=>{
    return(
            <Col md={4}>
                <div className="proj-imgbx">
                    <img src={imgUrl} alt="Project"className="proj_img"/>
                    <div className="projtxtx">
                        <h3>{title}</h3>
                        <h6>{description}</h6>
                    </div>
                </div>
            </Col>
    )
}