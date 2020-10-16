import React from 'react';
import { useParams } from 'react-router-dom';

import HomeButton from './HomeButton';
import Comments from './Comments';

const SinglePost = props => {
    const { id } = useParams();
    const { posts } = props;

    const post = posts.find(post => {
        return post.id === parseInt(id) ? post : null;
    });

    return (
        <>
 
        <HomeButton />

        {!!post ? 
        (<>
            <h1>{post.post_title}</h1>
            <p>{post.post_author}</p>
            <p>{post.post_body}</p>  
        </>) : (
            <h1>Loading Post...</h1>
        )}  

        <Comments />

        </>
    )
}

export default SinglePost;