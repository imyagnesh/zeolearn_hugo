import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import Details from './pages/Details'
import NotFound from './pages/NotFound'

const PrivateRoute = ({ component: Component, ...rest }) => {
    return <Route 
        {...rest}
        render={(props) => {
            if(rest.authenticated) {
                return  <Component {...props} />
            } else {
                return <Redirect to={{ pathname: '/' }} />
            }
        } } />
} 

const route = () => {
    return (
        <Router>
        <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>
                            <Link to="/details">Details</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} name="yagnesh" />}  />
                    <PrivateRoute path="/about" component={About} authenticated={false} />
                    <PrivateRoute path="/details" key="abc" component={Details} authenticated={true} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default route
