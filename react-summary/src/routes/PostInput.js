import { useNavigate, Form, redirect } from 'react-router-dom';
import styles from './PostInput.module.css';

const PostInput = props => {

    const cancelRoute = useNavigate();

    const cancelClickHandler = () => {
        cancelRoute('/');
    }



    return (
        <div className={styles.post_input_container}>
            <Form method='post' className={styles['post-input']}>


                <label htmlFor='username'>Username:</label>
                <input required id='username' name='author' type='text' placeholder='Username'></input><br />


                <label htmlFor='post'>Post:</label>
                <input required id='post' name='post' type='text' placeholder='Type your post here!'></input><br />


                <div className={styles['input-button-container']}>
                    <button type='submit' className={styles.post}>Post</button>

                    <button className={styles.cancel} onClick={cancelClickHandler}>Cancel</button>
                </div>


            </Form>
        </div>

    );
}

export default PostInput;

export async function action({ request }) { 
    
    const formData = await request.formData();
    const postData = Object.fromEntries(formData);

    await fetch('http://localhost:8080/posts', {
        method: 'POST',
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        }

    });
    return (redirect('/'));
}