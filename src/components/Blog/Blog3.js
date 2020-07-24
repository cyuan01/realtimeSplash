
import React from 'react';
import '../../App.css';
import './Blog.css'

// -- react bootstrap imports
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// -- 

import { BsPencil } from 'react-icons/bs'
import { FaRegCalendarAlt } from 'react-icons/fa'
import celticsBanner18 from '../../assets/blog/celticsBanner18.png'



class Blog3 extends React.Component {

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
                        +1700??: The Biggest Sleeper of The NBA Bubble
                    </h1>
                    <p className="blogContent">
                        <BsPencil /> Freeman Alfano {"\n"}
                        <FaRegCalendarAlt /> July 23, 2020
                    </p>
                    <br />
                    <img
                        style={{display: 'flex', marginLeft: 'auto', marginRight: 'auto'}}
                        // className="screenimg"
                        src={celticsBanner18}
                        width='50%'
                        height='auto'
                        alt="blog img"
                    />
                    {/* <p className="blogSm">Credit: Ezra Shaw, Getty Images</p> */}
                    {/* <br/><br/> */}
                    <div className="spacer"></div>
                    <p className="blogContent">
                        The Boston Celtics started off the 2019-20 season with less than stellar expectations after losing center Al Horford and flat-earther point guard Kyrie Irving in free agency. That all changed after “Cardiac” Kemba Walker joined the team and youngster Jayson Tatum emerged into a superstar.  At the same time, though, this was never a team considered in the same echelon of the Milwaukee Bucks or the two Los Angeles teams, with championship odds of just +1700 (even though they really should be).  Here’s why the Celtics can emerge as potential bubble busters for those three favorites.
                    </p>
                    <p className="blogSubtitle"> 
                        1. Jayson Tatum in MVP form
                    </p>
                    <p className="blogContent">
                        The biggest key to the Celtics’ postseason contention status is how well Tatum can play. Once memed by NBA fans as the promising youngster who learned how to be a ball hog from Kobe Bryant, the now-22-year-old emerged as a legitimate MVP-type player late in the season. After the All-Star break in mid-February, Tatum averaged an efficient 30 points per game while playing All-NBA-level defense against his competition. As long as Tatum continues his hot shooting and shutdown defense, there’s no reason to believe the C’s can’t win it all.
                    </p>
                    <p className="blogSubtitle"> 
                        2. A healthy Kemba Walker
                    </p>
                    <p className="blogContent">
                        Aside from Tatum, former Charlotte point guard Kemba Walker is the team’s most potent offensive threat. While we all know the player that Kemba can be, he is nursing some knee soreness at the moment. But assuming Walker returns to his normal self while easing himself into action during bubble camp, Boston will return to action with the best point guard in the Eastern Conference and one of the most dynamic duos in the NBA.
                    </p>
                    <p className="blogSubtitle"> 
                        3. The Lord of Time
                    </p>
                    <p className="blogContent">
                        While Jaylen Brown, Gordon Hayward, and Marcus Smart are all key contributors for the Celtics, there is one additional piece that could bring a record-setting 18th championship to Boston. Robert Williams, AKA the Time Lord, has had a mostly forgettable NBA career thus far. After sleeping through his introductory press conference with the team, the Celtics’ big man has flashed his elite athleticism and shot-blocking ability at times, but has been hindered by injuries, inexperience, and lack of playing time. 
                    </p>
                    <p className="blogContent">
                        With the Celtics lacking in bench scoring, a now healthy, “freak of nature” in Williams could be a Clint Capela-type player for Boston. He would add to an already elite-level defense with terrific rim protecting abilities while catching lobs from Hayward or Kemba on the other end of the floor as defenses key in on them and Tatum. For the Celtics and the Time Lord, the time is now to shock the world and win an NBA championship. 
                    </p>
                    <div className="spacer"></div>
                </div>

            </Container>
        )
    }
}

export default Blog3