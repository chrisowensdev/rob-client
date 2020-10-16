import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Comments from './Comments';

const HomeButton = styled.div`
    background-color: #3298dc;
    border: 1px solid #fff;
    border-radius: 4px;
    margin: 20px auto;
    padding: 10px;
    width: 100px;

    &:hover {
        background-color: #fff;
        border: 1px solid #3298dc;
    }
`;

const CommentSection = styled.div`
    border: 1px solid #000;
    margin: 30px;
    text-align: left;
`;

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
        <Link to="/">
            <HomeButton>
                Home
            </HomeButton>
        </Link>
            <h1>{post.post_title}</h1>
            <p>{post.post_author}</p>
            <p>{post.post_body}</p>
            <CommentSection>
            <Comments postID={post.id}/>
            </CommentSection>
            
        </>
    )
}

export default SinglePost;