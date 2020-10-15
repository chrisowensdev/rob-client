import React from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts';

const Home = props => {
    return (
        <>
        <Route exact path="/">
            <Posts />    
        </Route> 
        <Route path="/post/:id">
            
        </Route>
        </>
    )
}

export default Home;