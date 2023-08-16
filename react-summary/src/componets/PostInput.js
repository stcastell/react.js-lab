import React, {useState} from 'react';
import './PostInput.css';

const PostInput = props => { 
    const [user, setUser] = useState('');
    const userChangeHandler = e => { 
        setUser(e.target.value);
    }

    const [post, setPost] = useState('');
    const postChangeHandler = e => {
        setPost(e.target.value);
    }

    const clickHandler = () => { 
        props.onAddItem({author:user, post:post, id:Math.random()})
    }

    return (
        <div className='post-input-container'>

            <label htmlFor='username'>Username:</label>
            <input id='username' type='text' placeholder='Username' onChange={userChangeHandler}></input><br/>

            <label htmlFor='post'>Post:</label>
            <input id='post' type='text' placeholder='Type your post here!' onChange={postChangeHandler}></input><br />
            
            <button onClick={clickHandler}>Post</button>

        </div>
    );
}

export default PostInput;