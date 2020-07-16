import React from 'react';


import '../App.css';
import Footer from './Footer'


// -- react bootstrap imports
import { Button, Container, Row, Col, Form, Toast } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// -- 

import screen0 from '../assets/screens/appMockClear.png'
import screen1 from '../assets/screens/frame1.png'
import screen2 from '../assets/screens/frame2.png'
import banner from '../assets/screens/banner.png' // realtime mock screens pic
import vid from '../assets/screens/rt.mp4' // realtime demo vid
import { db } from '../config/Firebase.js' // firebase
import { Helmet } from 'react-helmet' // for <head> </head> mimic for react
import { RiBasketballLine } from 'react-icons/ri'
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { FiAward } from 'react-icons/fi'
import { AiOutlineVideoCamera } from 'react-icons/ai'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fst: '',
      lst: '',
      mail: '', // to store email
      width: 0, height: 0,
      toast: false // to show toast on succesful email submit
    };

    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);

    this.handleEChange = this.handleEChange.bind(this);
    this.handleFChange = this.handleFChange.bind(this);
    this.handleLChange = this.handleLChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get window
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }


  // update email
  handleEChange(event) {
    this.setState({ mail: event.target.value });
  }
  // update first name
  handleFChange(event) {
    this.setState({ fst: event.target.value });
  }
  // update last name
  handleLChange(event) {
    this.setState({ lst: event.target.value });
  }

  // submit email to firebase
  async handleSubmit(value) {

    // create a new "user object"
    var user = {
      uid: "",
      email: this.state.mail,
      first: this.state.fst,
      last: this.state.lst
    }
    if (this.state.mail.indexOf('@') != -1) {
      const userRef = await db.collection('users').add(user)
      //db auto creates an id so we update the empty uid with the created id
      userRef.set({
        uid: userRef.id
      }, { merge: true });

      // reset email value and show toast
      this.setState({ mail: "" })
      this.setState({ fst: "" })
      this.setState({ lst: "" })
      this.setState({ toast: true })
    } else {
      alert("Sorry Looks like we need an email to keep you updated 😲.")
      this.setState({ mail: "" })
    }
  }


  render() {
    return (
      <div className="page" style={{display: "flex", flex: 1, flexDirection: "column"}}>

        {/* equivalent of <head> in html */}
        <Helmet>
          <title>{"RealTime Sports"}</title>
        </Helmet>

        {/* successful submit toast message */}
        <div>
          <Toast onClose={() => this.setState({ toast: false })} className="fixed" show={this.state.toast}>
            <Toast.Header>
              <strong className="mr-auto">🎉 Congrats! 🎉</strong>

            </Toast.Header>
            <Toast.Body>You're now part of the RealTime team! We'll let you know when we're ready to compete as soon as possible.</Toast.Body>
          </Toast>
        </div>

        {/* website header banner thing */}
        <div className="parallax" id="banner">
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <div className = "highlightNav" style={{ backgroundColor: "#5188ed", display: "flex", justifyContent: "flex-start", flexDirection: "row", flex: 1, height: 4, }}>
                    <div style={{ backgroundColor: "#fff", opacity: 1, width: 150, height: 4, marginLeft: 15}}>

                    </div>
                    <div style={{width: 80, backgroundColor: "#fff", opacity: 0, height: 4, marginLeft: 25}}>
    
                    </div>
                </div>
            </div>

          <div className="spacer"></div>

          {/* website header text and button */}
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
                  <p>Simple. Fun. Social.</p>
                </div>
              </Col>
            </Row>

            {
              this.state.width < 700 ?
                <img
                  // className="screenimg"
                  src={screen0}
                  width='100%'
                  height='auto'
                  alt="realtime logo"
                /> :
                <div className="spacer"></div>
            }
            <Row>
              <Col sm={5}>
                <h1 className="header-white">Find out more</h1>
                <br />
                <div className="emailCapture">
                  <div className="emailInner">

                    {/* email capture form */}

                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label" >Name</Form.Label>
                      <Form.Row>
                        <Col md={6} className="formRow">
                          <Form.Control
                            size="sm"
                            id="firstInput"
                            type="text"
                            placeholder="First"
                            value={this.state.value} onChange={this.handleFChange}
                          />
                        </Col>
                        <Col md={6} className="formRow">
                          <Form.Control
                            size="sm"
                            id="lastInput"
                            type="text"
                            placeholder="Last"
                            value={this.state.value} onChange={this.handleLChange}
                          />
                        </Col>
                      </Form.Row>
                      <Form.Label className="label">Email address</Form.Label>
                      <Form.Row>
                        <Col xs={12}>


                          <Form.Control
                            type="email"
                            id="email_input"
                            placeholder="Enter email"
                            value={this.state.value} onChange={this.handleEChange}
                          />
                          {/* <Form.Text className="text-muted">
                          We won't spam you with emails, we'll
                          just let you know when you can start
                        </Form.Text> */}
                        </Col>
                      </Form.Row>

                    </Form.Group>
                    <Button variant="outline-light" className="blue" id="email_submit"
                      onClick={this.handleSubmit}
                    >
                      Keep me updated
                      </Button>
                  </div>
                </div>
              </Col>
            </Row>
            <div className="spacer"></div>
          </Container>
        </div>

        {/* main body of info of website */}
        <div className="mainBody" style= {{display: "flex", flexDirection: "column"}}>
          <Container>
            <div className="valueProp">
              <Row>

                <Col sm={12}>
                  <section id="calc_anchor"></section>
                  <h1 className="header"><FiAward /> What we do</h1>
                  <h2 className="mid">
                    <b>RealTime</b> allows you and your friends to actively engage alongside your favorite sport via contests based on simple questions that reflect live game flow. Unlike other apps that require high-level analytics, RealTime values a fair payout structure designed for the casual player.
                  </h2>
                </Col>
              </Row>
            </div>
            {/* <Row>
             
              <Col sm={6}>
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

            
            </Row> */}
            <br />
          </Container>
          <div className="taglines" style={{display: "flex", alignSelf: "center", justifySelf: "center"}}>
            <Container>
              {
                this.state.width < 1000 ?
                  <>
                    <div style={{ display: 'flex', flexDirection: "column" }}>
                      <div style={{ display: 'flex', flex: 1 }}>
                        <h3 className="blue-h3" style={{ display: 'flex', flexDirection: "row" }}>
                          <h1 style={{ paddingRight: 10 }}><RiBasketballLine /></h1> Play by answering questions such as "Will LeBron hit his next shot?"  It’s as simple as that.
                      </h3>
                      </div>
                      <br />
                      <div style={{ display: 'flex', flex: 1 }}>
                        <h3 className="blue-h3" style={{ display: 'flex', flexDirection: "row" }}>
                          <h1 style={{ paddingRight: 10 }}><AiOutlineDollarCircle /></h1> No money lines, spreads, or analytics. Our focus is on the game itself.
                      </h3>
                      </div>
                    </div>
                    <div style={{ display: 'flex', flexDirection: "row" }}>
                      <div style={{ display: 'flex', flex: 1, alignSelf: "center", justifyContent: "center" }}>
                        <img
                          // className="screenimg"
                          src={screen2}
                          width={this.state.width / 3}
                          height={(this.state.width / 3) * 1.4686}
                          // height="auto"
                          alt="realtime logo"
                        />

                      </div>
                      <div style={{ display: 'flex', flex: 1, alignSelf: "center", justifyContent: "center", }}>
                        <img
                          // className="screenimg"
                          src={screen1}
                          width={this.state.width / 3}
                          height={(this.state.width / 3) * 1.4686}
                          alt="realtime logo"
                        />
                      </div>
                      {/* <div style={{display: 'flex', justifyContent: "center"}}>
                        <h3 className="blue-h3">
                          No money lines, spreads, or analytics. Our focus is on the game itself.
                        </h3>
                    </div> */}
                    </div>
                  </> :
                  <>
                    <Row>
                      <Col lg={6}>
                        <h3 className="blue-h3" style={{ display: 'flex', flexDirection: "row" }}>
                          <h1 style={{ paddingRight: 10 }}><RiBasketballLine /></h1> Play by answering questions such as "Will LeBron hit his next shot?"  It’s as simple as that.
                  </h3>
                        <img
                          className="screenimg"
                          src={screen1}
                          width='80%'
                          height='auto'
                          alt="realtime logo"
                        />
                      </Col>
                      <br />
                      <Col lg={6}>
                        <img
                          className="screenimg"
                          src={screen2}
                          width='80%'
                          height='auto'
                          alt="realtime logo"
                        />
                        <h3 className="blue-h3" style={{ display: 'flex', flexDirection: "row" }}>
                          <h1 style={{ paddingRight: 10 }}><AiOutlineDollarCircle /></h1> No money lines, spreads, or analytics. Our focus is on the game itself.
                  </h3>
                      </Col>
                    </Row>
                  </>
              }
            </Container>
          </div>
          <Container>
            <br />
            <br />
            <br />
            <Row>
              {/* demo video section */}
              <Col sm={12}>
                <h1 className="header"><AiOutlineVideoCamera /> See us in action</h1>
                <br />

                <div className="embed-responsive embed-responsive-16by9" id="demo_video">
                  <video width="320" height="240" poster={banner} preload="metadata" controls>
                    <source src={vid} type="video/mp4" />
                  </video>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* website footer section */}
        <Footer />

      </div>
    );
  }
}

export default Home;
