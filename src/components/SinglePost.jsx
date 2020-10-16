import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Comments from './Comments';

const SinglePost = props => {
    const { id } = useParams();

    const [post, setPost] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`http://localhost:3333/post/${id}`);
            console.log(response);
            const postData = await response.json();
            setPost(postData);
        })();
    }, [setPost, id]);


    return (
        <>
        <Link to="/">Home</Link>
            <h1>Single Post</h1>
            <p>{post.post_title}</p>
            <Comments postID={post.id}/>
        </>
    )
}

export default SinglePost;