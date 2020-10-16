import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';

const Comments = props => {
    const { id } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async function() {
            const response = await fetch(`http://localhost:3333/comments/${id}`);
            console.log(response);
            const commentData = await response.json();
            setComments(commentData);
        })();
    }, [setComments, id]);
    return (
        <>
            {comments.map(comment => {
                return(
                    <div key={comment.id}>
                        <h3>{comment.comment_title}</h3>
                    </div>
                )
            })}
        </>
        )
}

export default Comments;