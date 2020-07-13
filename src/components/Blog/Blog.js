import React from 'react';
import '../../App.css';
import './Blog.css'

// -- react bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// -- 

import { GiBookCover } from 'react-icons/gi'
import { BsArrowReturnLeft } from 'react-icons/bs'
import { BsPencil } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import camNewton from '../../assets/blog/camNewton.png'
import camTweet from '../../assets/blog/camNewton2.jpg'

import PreviewItem from './PreviewItem'
import Footer from '../Footer'


class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reading: false,
            title: "",
            content: "",
            blogID: "",

            blogs: {
                "1": {
                    title: "Updated odds after signing Cam Newton... crunching the numbers",
                    content: {
                        by: "Freeman Alfano",
                        img: {pic: camNewton, credit: "AP Images", sub: ""},
                        img2: {pic: camTweet, credit: "Twitter", sub: "The moment Cam Newton’s bewildering text style was brought to the forefront of sports fans."},
                        date: "July 10, 2020",
                        post:
                            "After Cam Newton inked a one-year deal with the New England Patriots late last Sunday night, the former NFL MVP has caused a major stir in the sports betting industry.\n\nFollowing the NFL Draft and the Patriots’ surprising non-selection of a quarterback, Newton was the odds-on favorite to be signed by New England at -190. That betting line turned out to be prophetic, as the Patriots ended up signing him with no other team reportedly even showing interest in the eccentric fashion aficionado. I wonder if part of his negotiations were asking for néwtôn, his iconic social media font, to be on the back of his jersey.\n\nCam is also the favorite to grab New England’s opening day starting quarterback position at -330 after previously being listed at +250. Jarrett Stidham, the second-year man out of Auburn who was the presumptive starter before Newton arrived, has +220 odds to start Week 1, while journeyman backup Brian Hoyer currently sits at +1000. It remains to be seen, however, the odds that he will wear a headscarf or not for his first New England press conference.\n\nAs for Newton’s MVP case, the 2015 winner is the only player listed at 30:1 odds to take home the trophy. For comparison’s sake, 42 year-old Florida man Tom Brady has 16:1 odds to win MVP, while last season’s Offensive Rookie of the Year Kyler Murray has 25:1 odds to win the award despite barely being able to see over his offensive line.\n\nNow with a quarterback who has already taken a team to the Super Bowl, the Patriots’ SB 55 odds are tied with the perpetual “this is our year” Dallas Cowboys at 17:1, raising a few percentage points after being listed at 20:1 back in late April. New England also has the third-highest odds to win the AFC Championship at +700 and the highest chance of winning the AFC East at +100 (sorry, Bills Mafia; better luck next year). Previously, the Buffalo Bills were favorites to win the division at +100, while the Patriots were listed at +140 at the time."
                    }

                },
                "2": {}
            }

        };

        this.readBlog = this.readBlog.bind(this);
        this.goBack = this.goBack.bind(this);

    }

    // componentDidMount() {
    //     const script = document.createElement("script");
    //     script.async = true;
    //     script.src = "https://www.retainable.app/assets/retainable/rss-embed/retainable-rss-embed.js";
    //     document.body.appendChild(script);
    //   }

    readBlog(blogID) {
        var blog = this.state.blogs[blogID]

        this.setState({ title: blog.title })
        this.setState({ content: blog.content })
        this.setState({ blogID: blogID })
        this.setState({ reading: true })

    }

    goBack() {
        this.setState({ reading: false })
        this.setState({ title: "" })
        this.setState({ content: "" })
        this.setState({ blogID: "" })
    }

    render() {

        if (this.state.reading) {

            return (
                <>
                <Container>
                    <div className="blogItem" style={{ paddingTop: 20 }}>
                        <button className="backButton" onClick={() => this.goBack()}>
                            <BsArrowReturnLeft /> Back
                        </button>
                        <div className="spacer"></div>
                        <h1 className="blogTitleLg">{this.state.title}</h1>
                        <p className="blogContent">
                            <BsPencil /> {this.state.content.by}{"\n"}
                            <FaRegCalendarAlt /> {this.state.content.date}
                        </p>
                        <br />
                        <img
                            // className="screenimg"
                            src={this.state.content.img.pic}
                            width='100%'
                            height='auto'
                            alt="blog img"
                        />
                        <p className="blogSm">Credit: {this.state.content.img.credit}</p>
                        {/* <br/><br/> */}
                        <div className="spacer"></div>
                        <p className="blogContent">{this.state.content.post}</p>
                        <div className="spacer"></div>
                    </div>
                    
                </Container>
                <Footer />
                </>

            )
        } else {

            return (
                <div className="page" style={{display: "flex", flex: 1, flexDirection: "column"}}>
                    <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                        <div className="highlightNav" style={{ backgroundColor: "#5188ed", display: "flex", justifyContent: "flex-start", flexDirection: "row", flex: 1, height: 4, }}>
                            <div style={{ backgroundColor: "#fff", opacity: 0, width: 150, height: 4, marginLeft: 15 }}>

                            </div>
                            <div style={{ width: 80, backgroundColor: "#fff", opacity: 1, height: 4, marginLeft: 25 }}>

                            </div>
                        </div>
                    </div>
                    <div className="blogBanner" style={{ display: "flex", flex: 1 }}>
                        <Container>
                            <div className="spacer"></div>
                            <Row>
                                <Col sm={12}>
                                    <div className="title centerTxt">
                                        <h1 className="iconLg"><GiBookCover /></h1>
                                    </div>
                                </Col>
                            </Row>
                            <div className="spacer"></div>
                        </Container>
                    </div>
                    <div style={{ display: "flex", flex: 2, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <br/><br/>
                        <PreviewItem
                            blogID={"1"}
                            handleClick={this.readBlog}
                            title={this.state.blogs["1"].title}
                            content={this.state.blogs["1"].content}
                        />
                    </div>
                    {/* <div id="retainable-rss-embed"
                        data-rss="https://medium.com/feed/retainable,
                                https://medium.com/feed/js-dojo,                
                                https://medium.com/feed/vue-mastery"
                        data-maxcols="4"
                        data-layout="slider"
                        data-poststyle="modal"
                        data-readmore="Read the rest"
                        data-buttonclass="btn btn-primary"
                        data-offset="-200">&#160;
                    </div> */}

                    <Footer />

                </div>


            )
        }
    }
}

export default Blog