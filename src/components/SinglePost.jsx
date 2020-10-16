import React, { useState, useEffect } from 'react';
import  { useParams } from 'react-router-dom';

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
            <h1>Single Post</h1>
            <p>{post.post_title}</p>
        </>
    )
}

export default SinglePost;