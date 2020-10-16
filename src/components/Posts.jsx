import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PostList = styled.div`
    border: 1px solid #000;
    margin: 10px 30px;
    padding: 20px;
    text-align: left;

    &:hover {
        background-color: #DCDCDC;
    }
`

const Posts = props => {
    const { posts } = props;
    return (
        <>
        <h1>Blog Posts</h1>
        <Link to="/createpost">Create a post</Link>
            {posts.map(post => {
                return (
                    <Link to={`/post/${post.id}`} key={post.id} >
                        <PostList>
                        <h2>{post.post_title}</h2>
                        </PostList>
                    </Link>
                )
            })}
        </>
    )
}

export default Posts;



