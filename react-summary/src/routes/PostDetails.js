import { useLoaderData, Link } from 'react-router-dom';

import styles from './PostDetails.module.css';

function PostDetails() {
    const post = useLoaderData();

    if (!post) {
        return (
            <div className={styles.modal}>
                <main className={styles.details}>
                    <h1>Could not find post</h1>
                    <p>Unfortunately, the requested post could not be found.</p>
                    <p>
                        <Link to=".." className={styles.btn}>
                            Okay
                        </Link>
                    </p>
                </main>
            </div>
        );
    }
    return (
        <div className={styles.modal}>
            <main className={styles.details}>
                <p className={styles.author}>{post.author} really said:</p>
                <p className={styles.text}>{post.post}</p>
            </main>
            <Link className={styles.btn} to='/'>Back to where i came</Link>
        </div>
    );
}

export default PostDetails;

export async function loader({ params }) { 
    const response = await fetch('http://localhost:8080/posts/' + params.id);
    const data = await response.json();
    return data.post;
};