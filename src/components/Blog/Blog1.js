
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



class Blog1 extends React.Component {
    componentDidMount() {
        this.props.minimize()
        window.scrollTo(0, 0)
    }

    componentWillUnmount() {
        this.props.reset()
    }
    render() {
        return (
            <Container>
                <div className="blogItem">
                    {/* <button className="backButton" onClick={() => this.props.reset()}>
                        <BsArrowReturnLeft /> Back
                    </button> */}
                    <div className="spacer"></div>
                    <h1 className="blogTitleLg">
                        Updated odds after signing Cam Newton... crunching the numbers
                    </h1>
                    <p className="blogContent">
                        <BsPencil /> Freeman Alfano {"\n"}
                        <FaRegCalendarAlt /> July 10, 2020
                    </p>
                    <br />
                    <img
                        // className="screenimg"
                        src={camNewton}
                        width='100%'
                        height='auto'
                        alt="blog img"
                    />
                    <p className="blogSm">Credit: AP Images</p>
                    {/* <br/><br/> */}
                    <div className="spacer"></div>
                    <p className="blogContent">
                        After Cam Newton inked a one-year deal with the New England Patriots late last Sunday night, the former NFL MVP has caused a major stir in the sports betting industry.
                    </p>
                    <p className="blogContent">
                        Following the NFL Draft and the Patriots’ surprising non-selection of a quarterback, Newton was the odds-on favorite to be signed by New England at -190. That betting line turned out to be prophetic, as the Patriots ended up signing him with no other team reportedly even showing interest in the eccentric fashion aficionado. I wonder if part of his negotiations were asking for néwtôn, his iconic social media font, to be on the back of his jersey.
                    </p>
                    <p className="blogContent">
                        Cam is also the favorite to grab New England’s opening day starting quarterback position at -330 after previously being listed at +250. Jarrett Stidham, the second-year man out of Auburn who was the presumptive starter before Newton arrived, has +220 odds to start Week 1, while journeyman backup Brian Hoyer currently sits at +1000. It remains to be seen, however, the odds that he will wear a headscarf or not for his first New England press conference.
                    </p>
                    <p className="blogContent">
                        As for Newton’s MVP case, the 2015 winner is the only player listed at 30:1 odds to take home the trophy. For comparison’s sake, 42 year-old Florida man Tom Brady has 16:1 odds to win MVP, while last season’s Offensive Rookie of the Year Kyler Murray has 25:1 odds to win the award despite barely being able to see over his offensive line.
                    </p>
                    <p className="blogContent">
                        Now with a quarterback who has already taken a team to the Super Bowl, the Patriots’ SB 55 odds are tied with the perpetual “this is our year” Dallas Cowboys at 17:1, raising a few percentage points after being listed at 20:1 back in late April. New England also has the third-highest odds to win the AFC Championship at +700 and the highest chance of winning the AFC East at +100 (sorry, Bills Mafia; better luck next year). Previously, the Buffalo Bills were favorites to win the division at +100, while the Patriots were listed at +140 at the time.
                    </p>
                    <div className="spacer"></div>
                </div>

            </Container>
        )
    }
}

export default Blog1