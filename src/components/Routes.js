import React from 'react';
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Demo from './Demo'
import { Router, Route, browserHistory } from 'react-router';

class Routes extends React.Component {
    render() {
        return(
            <div>
                <Router history={browserHistory}>
                    <Route path="/" component={Demo}>
                        <Route path="/home" component={Home}/>
                        <Route path="/about" component={About}/>
                        <Route path="/contact" component={Contact}/>
                    </Route>
                </Router>

            </div>
        )}
}
export default Routes