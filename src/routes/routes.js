


import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home' ;
import DataBaseApp from '../containers/DataBaseApp' ; 
import AboutMe from '../containers/AboutMe'; 

function routes() {
    return (
        <div>
            <Route path="/" exact render={() => <Home/> }/>
            <Route path="/app" exact  render={() => <DataBaseApp/> } />
            <Route path="/about-me" exact render={() => <AboutMe/> } />
        </div>
    )
}

export default routes
