import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const CommentSection = styled.div`
    border: 1px solid #000;
    margin: 30px;
    text-align: left;
`;

const Comments = props => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`http://localhost:3333/comments/${id}`);
            const commentData = await response.json();
            setComments(commentData);
        })();
    }, [setComments, id]);
    return (

        
        <>
        <CommentSection>
            {comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <h3>{comment.comment_title}</h3>
                        <p>{comment.comment_author}</p>
                        <p>{comment.comment_body}</p>
                    </div>
                )
            })}
            </CommentSection>
        </>
        )
}

export default Comments;