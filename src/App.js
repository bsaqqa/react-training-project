import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

import Routes from './router';
import WebLayoutRoute from './Layouts/WebLayout';
import EmptyLayoutRoute from "./Layouts/EmptyLayout";
import Login from "./Pages/Login";
import DashboardIndex from "./Pages/Dashboard/Index";
import DashboardLayoutRoute from "./Layouts/DashboardLayout";
import Users from "./Pages/Dashboard/Users";

function App() {
  return (
    <Router>
        <div>

            <Switch>
                {Routes.map((e,index)=>(
                    <WebLayoutRoute  key={'page-'+index} exact path={e.link} component={e.component}/>
                ))}
                <EmptyLayoutRoute  key={'page-login'} exact path="/login" component={Login}/>
                <DashboardLayoutRoute  key={'page-Dashboard'} exact path="/dashboard" component={DashboardIndex}/>
                <DashboardLayoutRoute  key={'page-Dashboard-users'} exact path="/dashboard/users"
                                       component={Users}/>

                <Route key={'page-noMatch'} exact path="*" >
                    <Redirect to="/error"/>
                </Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
