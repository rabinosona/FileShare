import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainModule from '../MainModule/MainModule'
import SignUp from '../MainModule/components/SignUpComponent';

export default class Application extends React.Component {
    render() {
        return (<Router>
            <div>
                <Route exact path="/" component={MainModule} />
                <Route path='/signup' component={SignUp}></Route>
            </div>
        </Router>);
    }
}