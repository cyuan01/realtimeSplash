import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home'
import Blog from './components/Blog/Blog'
import BlogNav from './components/Blog/BlogNav'
import ThankYou from './components/Referral/ThankYou'
import pic from './assets/logos/rt.png' // realtime text logo
import history from './history'

// class App extends React.Component {
  function App() {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         resetBlog: -1
    //     };
    //     this.blogRef = React.createRef();
    // };


    // render() {


        return (
            <Router history={history}>
                <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                    <div className="navbar" style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", flex: 1, }}>
                        <div className="navBrand" style={{ width: 150 }}>
                            <Link to="/">
                                <img
                                    src={pic}
                                    width="150px"
                                    height='auto'
                                    alt="realtime logo"
                                />
                            </Link>
                        </div>
                        <div className="navLink" style={{ width: 80 }}>
                            <Link onClick={()=> {
                                // if (this.blogRef.current != null) {
                                //     this.blogRef.current.reset()
                                // }
                            }} to="/blog" className="linkTxt" activeStyle={{ color: 'red' }}>
                                Blog
                        </Link>
                        </div>
                    </div>
                    <Switch>

                        {/* <Route path="/blog">
                            <BlogNav />
                        </Route> */}
                        {/* redirect to external blog */}
                        {/* <Route 
                        path='/blog' 
                        component={() => { 
                            window.location.replace('https://blog.realtimesports.io');
                            // window.location.href = 'https://www.bmwusa.com/'; 
                            return null;
                       }}                       
                    /> */}
                        {/* <Route path="/">
                            <Home />
                        </Route> */}
                        <Route exact path="/" component={Home} />
                        <Route path='/blog' component={BlogNav} />
                        <Route path='/thankyou' component={ThankYou} />
                    </Switch>
                </div>
            </Router>

        );
    // }
}
export default App