import { React, useState }  from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImage from "../assets/img/contactus.png";

export const Contact=()=>{
    const fromInitialDetails = {
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    }
    const [formDetails, setFormDetails] = useState(fromInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    const onFormUpdate=(category, value)=>{
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }
    const handleSubmit= async (e)=>{
        e.preventDefault();
        setButtonText('Sending....');
        let response = await fetch("http://localhost:3000/contact",{
            method: "POST",
            headers:{
                "Content-Type":"Application/json;charset=utf-8",
            },
            body:JSON.stringfy(formDetails),
        });
        setButtonText("Send");
        let result = response.json();
        setFormDetails(fromInitialDetails);
        if(result.code===200){
            setStatus({success:true, message: 'Message sent successfully!'});
        }
        else{
            setStatus({success:false, message: 'Something went wrong! Please try again later.'})
        }
    }
    return(
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImage} alt="Conatact" className="conatct_image"/>
                    </Col>
                    <Col md={6}>
                        <div className="mobContact">
                        <h2>Get in Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={4} className="px-1">
                                    <input type="text" value={formDetails.firstName} 
                                           placeholder="First Name" 
                                           onChange={(e)=>onFormUpdate('firstName', e.target.value)} />
                                </Col>
                                <Col sm={4} className="px-1">
                                    <input type="text" value={formDetails.middleName} 
                                           placeholder="Middle Name" 
                                           onChange={(e)=>onFormUpdate('middleName', e.target.value)} />
                                </Col>
                                <Col sm={4} className="px-1">
                                  	<input type="text" value={formDetails.lastName} 
                                           placeholder="Last Name" 
                                           onChange={(e)=>onFormUpdate('lastName', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                  	<input type="email" value={formDetails.email} 
                                           placeholder="Email Address" 
                                           onChange={(e)=>onFormUpdate('email', e.target.value)} />
                                </Col>
                                <Col sm={6} className="px-1">
                                  	<input type="tel" value={formDetails.phone} 
                                           placeholder="Phone Number" 
                                           onChange={(e)=>onFormUpdate('phone', e.target.value)} />
                                </Col>
                                <Col className="px-1">
                                  	<textarea row="6" value={formDetails.message} 
                                           placeholder="Your Message" 
                                           onChange={(e)=>onFormUpdate('message', e.target.value)} />
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}