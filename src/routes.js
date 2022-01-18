/* eslint-disable react/jsx-no-undef */
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import PrivateRoute from './auth';
import Login from "./components/pages/Login";
import Dashboard from './components/pages/Dashboard';

const Routes = () => (
    <Router>
        <Switch>
            <Route exact path='/' component={Login}/>
            <PrivateRoute path='/dashboard' component={Dashboard}/>
        </Switch>
    </Router>

);

export default Routes;