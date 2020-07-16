
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
import jamesHarden from '../../assets/blog/jamesHarden.png'



class Blog2 extends React.Component {

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
                        Three Reasons James Harden Will Dominate the NBA Bubble
                    </h1>
                    <p className="blogContent">
                        <BsPencil /> Freeman Alfano {"\n"}
                        <FaRegCalendarAlt /> July 16, 2020
                    </p>
                    <br />
                    <img
                        // className="screenimg"
                        src={jamesHarden}
                        width='100%'
                        height='auto'
                        alt="blog img"
                    />
                    <p className="blogSm">Credit: Ezra Shaw, Getty Images</p>
                    {/* <br/><br/> */}
                    <div className="spacer"></div>
                    <p className="blogContent">
                        The Houston Rockets’ title hopes, now listed at +1300 odds, live and die with their ball-hogging, stepback-shooting, foul-seeking superstar in James Harden. Here’s how the bearded baller could get even better during the shortened season in Orlando.
                    </p>
                    <p className="blogSubtitle"> 
                        1. Strip Clubs (or lack thereof)
                    </p>
                    <p className="blogContent">
                        During the 22-team NBA bubble season in Orlando’s Disney World Resort, players will be allowed to golf, go on boating excursions, and ride Space Mountain if they meet the height threshold (sorry, Tacko). However, these athletes will not be able to spend their nights throwing dollar bills at pole dancers, as the kid-friendly theme park does not contain a strip club (shocker). Although Harden is a frequent flyer of these clubs and has his jersey retired at a local Houston strip joint, they actually have a negative effect on his play.
                    </p>
                    <p className="blogContent">
                        In fact, a Redditor last November conducted a study detailing the positive correlation between Harden’s below average games and the opposing team’s city’s average strip club rating. With no gentleman’s clubs available at Disney, he may just never have a bad game. 
                    </p>
                    <p className="blogSubtitle"> 
                        2. Slim Harden
                    </p>
                    <p className="blogContent">
                        The former MVP has always seemed a bit chubby for NBA standards, but, after following an intense training regimen throughout quarantine that involved mountain running to the point of vomit, he looks more like an Olympic swimmer than a basketball player. This transformation could increase the level of his once meme-worthy defensive effort and allow Harden to play big-time playoff minutes without fatigue..
                    </p>
                    <p className="blogSubtitle"> 
                        3. No Fans
                    </p>
                    <p className="blogContent">
                        The notorious flopper has made about 50 more free throws this season (619) than the player with the second-most free throw attempts in the league in Giannis Antetokounmpo (570). This absurd discrepancy will be even more pronounced in the bubble, where there will be no fans holding up head cutouts of various celebrities, belly dancing, or hurling ruthless insults at players in hopes of a free postgame Frosty.
                    </p>
                    <p className="blogContent">
                        For Harden, who is shooting 86 percent at the line this season, this unprecedented environment could push him to or over the 90 percent threshold, an elite club deemed only for the Steph Currys and Steve Nashes of free throw shooting royalty. And for the Rockets, whose leading scorer takes nearly 12 free throws per game, this could be the difference between a championship and a choke job in the playoffs. 
                    </p>
                    <hr/>
                    <p className="blogContent">
                        When you combine this potential for elite free throw shooting with the newfound improvements to his body, you’re looking at a player who could approach a 40 point-per-game scoring average while holding his own on the defensive end. That thought alone should terrify the rest of the league, whose only players in its history to average over 34 points per game on a Finals run were… *checks notes* LeBron and MJ. The Rockets just have to hope he’ll be reading Bible verses instead of getting virtual lap dances in his hotel room, and they could be hoisting the Larry O’B in a few months.
                    </p>
                    <div className="spacer"></div>
                </div>

            </Container>
        )
    }
}

export default Blog2