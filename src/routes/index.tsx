import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    );
};

export default Routes;
