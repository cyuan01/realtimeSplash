import React from 'react';
import './App.css';
import { Button, Container, Row, Col, Navbar, Form, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from './assets/logos/rt.png'
import banner from './assets/screens/banner.png'
import vid from './assets/screens/rt.mp4'
import { db } from './config/Firebase.js'
import { Helmet } from 'react-helmet'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      toast: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  async handleSubmit(value) {

    var user = {
      uid: "",
      email: this.state.value,
    }
  const userRef = await db.collection('users').add(user)
    //db auto creates an id so we update the empty uid with the created id
    userRef.set({
      uid: userRef.id
    }, { merge: true });
    

    this.setState({value: ""})
    this.setState({toast: true})
  }


  render() {
  return (
    <div>
      <Helmet>
        <title>{ "RealTime Sports" }</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </Helmet>
        
      <div >
      <Toast onClose={() => this.setState({toast:false})}className = "fixed" show={this.state.toast}>
        <Toast.Header>
          <strong className="mr-auto">🎉 Congrats! 🎉</strong>

        </Toast.Header>
        <Toast.Body>You're now part of the RealTime team! We'll let you know when we're ready to compete as soon as possible.</Toast.Body>
      </Toast>
      </div>
      <div className="parallax">

        <Navbar className="nav-custom">
          <Navbar.Brand href="#home">
            <img
              src={pic}
              width='30%'
              height='30%'
              className="d-inline-block align-top"
              alt="realtime logo"
            />
          </Navbar.Brand>
        </Navbar>

        <div className="spacer"></div>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="title head_reg head_mob">
                <h1>The future of sports engagement</h1>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="subTitle">
                <p>Simple. Lucrative. Social.</p>
              </div>
            </Col>
          </Row>
          <div className="spacer"></div>
          <Row>
            <Col sm={6}>
              <a href="#calc_anchor" id="seeFut" className="btn-custom-head" role="button">See the future!</a>
            </Col>
          </Row>
        </Container>

      </div>


      <div className="mainBody">
        <Container>
          <Row>
            <Col sm={6}>
              <section id="calc_anchor"></section>
              <h1 className="header">About RealTime</h1>
              <br />
              <p>
                RealTime Sports an exciting new sports
                engagement platform that combines aspects of both traditional sports betting and daily fantasy
                sports.  RealTime will provide the casual fan with an outlet to actively
                engage with their favorite sport by lowering the barrier of entry and emphasizing the social
                component of sport that we all love so much.
              </p>
            </Col>
            <Col sm={6}>
              <h1 className="header-blue">Find out more</h1>
              <br />
              <div className="emailCapture">
                <div className="emailInner">

                {/* <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form> */}


                  {/* <form onSubmit={this.handleSubmit}> */}
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>

                      <Form.Control 
                        type="email" 
                        placeholder="Enter email"
                        value={this.state.value} onChange={this.handleChange}
                         />
                      <Form.Text className="text-muted">
                        We won't spam you with emails, we'll
                        just let you know when you can start
                      </Form.Text>
                    </Form.Group>
                    <Button className="blue" 
                    onClick={this.handleSubmit}
                    >
                      Submit
                    </Button>
                  {/* </form> */}
                </div>

              </div>
            </Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col sm={12}>
              <h1 className="header">See us in action</h1>
              <br />
              
              <div className="embed-responsive embed-responsive-16by9">
                <video width="320" height="240" poster = {banner} preload="metadata" controls>
                  <source src={vid} type="video/mp4" />
                </video>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="page-footer">
        <Container>
        <Row>
            <Col sm={12}>
              <p>Stay in touch</p>
              <a href="https://www.linkedin.com/company/realtime-sports/" target = "_blank" className="fa fa-linkedin"></a>
              <a href="https://www.instagram.com/realtime.sports/" target = "_blank" className="fa fa-instagram"></a>
            </Col>
          </Row>
        </Container>
      </div>
      
    </div>
  );
}
}

export default App;
