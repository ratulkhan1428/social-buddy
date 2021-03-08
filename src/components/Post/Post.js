import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
    const {id, title, body} = props.post;
    const history = useHistory();
    const showComments = id => {
        const url = `post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h1>This is Post</h1>
            <h3><strong>id: {id}</strong> {title}</h3>
            <p>{body}</p>
            {/* <Link to={`post/${id}`}>
                <button>Show Comments</button>
            </Link> */}
            <button onClick={() => showComments(id)}>Show Comments</button>
        </div>
    );
};

export default Post;