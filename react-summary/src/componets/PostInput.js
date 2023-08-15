import React from 'react';
import './PostInput.css';

const PostInput = props => { 

    const clickHandler = () => { 

    }

    return (
        <div className='post-input-container'>

            <label htmlFor='username'>Username:</label>
            <input id='username' type='text' placeholder='Username' ></input><br/>

            <label htmlFor='post'>Post:</label>
            <input id='post' type='text' placeholder='Type your post here!'></input><br />
            
            <button onClick={clickHandler}>Post</button>

        </div>
    );
}

export default PostInput;