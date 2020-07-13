import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './components/Home'
import Blog from './components/Blog/Blog'
import pic from './assets/logos/rt.png' // realtime text logo
import history from './history'

export default function App() {
    return (
        <Router history={history}>
            <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
                <div className="navbar" style={{ display: "flex", justifyContent: "flex-start", flexDirection: "row", flex: 1, }}>
                    <div className="navBrand" style={{ width: 150}}>
                        <Link to="/">
                            <img
                                src={pic}
                                width="150px"
                                height='auto'
                                alt="realtime logo"
                            />
                        </Link>
                    </div>
                    <div className="navLink" style={{width: 80}}>
                        <Link to="/blog" className="linkTxt" activeStyle={{ color: 'red' }}>
                            Blog
                        </Link>
                    </div>
                </div>
                <Switch>
                    <Route path="/blog">
                        <Blog />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>

    );
}