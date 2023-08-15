import React from 'react';
import './Post.css';

const Post = props => {

    return (
        <ul>
            {props.data.map(item => (
                <li className='post' key={item.id}>
                    <h3 className='post-author'>{item.author}</h3>
                    <p className='post-message'>{item.post}</p>
                </li>
            ))}
            
        </ul>
    )
}

export default Post;