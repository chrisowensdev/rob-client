import React from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts';
import SinglePost from './SinglePost';

const Home = props => {
    return (
        <>
        <Route exact path="/">
            <Posts />    
        </Route> 
        <Route path="/post/:id">
            <SinglePost />
        </Route>
        </>
    )
}

export default Home;