import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import Posts from './Posts';
import SinglePost from './SinglePost';

const Home = props => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`http://localhost:3333/`);
            const postData = await response.json();
            setPosts(postData);
        })();
    }, [setPosts]);

    return (
        <>
        <Route exact path="/">
            <Posts posts={posts}/>    
        </Route> 
        <Route path="/post/:id">
            <SinglePost posts={posts}/>
        </Route>
        </>
    )
}

export default Home;