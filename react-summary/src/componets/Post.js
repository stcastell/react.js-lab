import React from 'react';
import './Post.css';

const Post = props => { 

    return (
        <div className='post'>
            <h3 className='post-author'>{props.postAuthor}</h3>
            <p className='post-message'>{props.postMessage}</p>
        </div>
    )
}

export default Post;