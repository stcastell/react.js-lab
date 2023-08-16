import React, { useState } from 'react';
import styles from './PostInput.module.css';

const PostInput = props => {
    const [user, setUser] = useState('');
    const userChangeHandler = e => {
        setUser(e.target.value);
    }

    const [post, setPost] = useState('');
    const postChangeHandler = e => {
        setPost(e.target.value);
    }

    const submitHandler = e => {
        e.preventDefault();
        props.onAddItem({ author: user, post: post, id: Math.random() });
        setUser('');
        setPost('');
    }

    const cancelClickHandler = () => {
        props.onActivatePostInput(false);
    }



    return (
        <form className={styles['post-input-container']} onSubmit={submitHandler}>

            
            <label htmlFor='username'>Username:</label>
            <input required id='username' type='text' placeholder='Username' onChange={userChangeHandler} value={user}></input><br />

            
            <label htmlFor='post'>Post:</label>
            <input required id='post' type='text' placeholder='Type your post here!' onChange={postChangeHandler} value={post}></input><br />

            
            <div className={styles['input-button-container']}>
                <button type='submit' className={styles.post}>Post</button>

                <button className={styles.cancel} onClick={cancelClickHandler}>Cancel</button>
            </div>


        </form>
    );
}

export default PostInput;