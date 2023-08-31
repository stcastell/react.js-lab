import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';

const Post = props => {

    return (
        <ul>
            {props.data.map(item => (
                <li className='post' key={item.id}>
                    <Link className='link' to={item.id}>
                        <h3 className='post-author'>{item.author}</h3>
                        <p className='post-message'>{item.post}</p>
                    </Link>
                </li>
            ))}

        </ul>
    )
}

export default Post;