import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PostInput.module.css';

const PostInput = props => {

    const cancelRoute = useNavigate();

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
        props.onActivatePostInput(false);
    }

    const cancelClickHandler = () => {
        // props.onActivatePostInput(false);
        cancelRoute('..');
    }



    return (
        <div className={styles.post_input_container}>
            <form className={styles['post-input']} onSubmit={submitHandler}>


                <label htmlFor='username'>Username:</label>
                <input required id='username' type='text' placeholder='Username' onChange={userChangeHandler} value={user}></input><br />


                <label htmlFor='post'>Post:</label>
                <input required id='post' type='text' placeholder='Type your post here!' onChange={postChangeHandler} value={post}></input><br />


                <div className={styles['input-button-container']}>
                    <button type='submit' className={styles.post}>Post</button>

                    <button className={styles.cancel} onClick={cancelClickHandler}>Cancel</button>
                </div>


            </form>
        </div>

    );
}

export default PostInput;