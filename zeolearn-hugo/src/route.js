import React, { lazy, Suspense} from 'react'
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
// import loadable from '@loadable/component'
// import Home from './pages/Home'
// import About from './pages/About'
// import Details from './pages/Details'
import NotFound from './pages/NotFound'
const home = "./pages/Home"

const HomeAsync = lazy(() => import(`${home}`))
const AboutAsync = lazy(() => import('./pages/About'))
const DetailsAsync = lazy(() => import('./pages/Details'))

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
                <Suspense fallback={<h1>Loading...</h1>}>
                    <Switch>
                        <Route exact path="/" render={(props) => <HomeAsync {...props} name="yagnesh" />}  />
                        <PrivateRoute path="/about" component={AboutAsync} authenticated={true} />
                        <PrivateRoute path="/details" key="abc" component={DetailsAsync} authenticated={true} />
                        <Route component={NotFound} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    )
}

export default route
