import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const Posts = props => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`http://localhost:3333/`);
            console.log(response);
            const postData = await response.json();
            setPosts(postData);
        })();
    }, [setPosts]);

    return (
        <>
            {posts.map(post => {
                return (
                    <Link to={`/post/${post.id}`} key={post.id}>
                        <h2>{post.post_title}</h2>
                        <p>{post.post_body}</p>
                    </Link>
                )
            })}
        </>
    )
}

export default Posts;

