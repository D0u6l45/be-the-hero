import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Logon from './pages/Logon'
import Register from './pages/Register';


export default function Routes(){
        return(

             <BrowserRouter>
            <Switch>
            <Route  patch="/" exact  component={Logon} />
             <Route  patch="/register" component={Register}/>
            </Switch>
           </BrowserRouter>
        );


}