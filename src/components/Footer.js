import React from 'react';
import '../App.css';

// -- react bootstrap imports
import { Button, Container, Row, Col, Navbar, Form, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// -- 

import { FaRegHandPeace } from 'react-icons/fa'


class Footer extends React.Component {
    render() {

        return (
            < div className = "page-footer" style={{display: "flex", flex: 1}}>
                <Container>
                    <Row>
                        {/* social links */}
                        <Col sm={12}>
                            <p> <FaRegHandPeace /> Stay in touch</p>
                            <a id="linkedin_link" rel="noopener noreferrer" href="https://www.linkedin.com/company/realtime-sports/" target="_blank" className="fa fa-linkedin"></a>
                            <a id="insta_link" rel="noopener noreferrer" href="https://www.instagram.com/realtime.sports/" target="_blank" className="fa fa-instagram"></a>
                        </Col>
                    </Row>
                </Container>
            </div >
        );
    }
}

export default Footer