import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import MainPage from './pages/ForgotPassword';
import Page404 from './pages/Page404';



const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={MainPage} />
            <Route path='*' component={Page404} />           
        </Switch>
    </BrowserRouter>
);

export default Routes;