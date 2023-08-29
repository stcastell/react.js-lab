import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

const Header = props => { 

    const route = useNavigate();

    const clickHandler = () => { 
        route('./add-post');
    }

    return (
        <div className={styles.header_container}>
            <button to='./add-post' className={styles.add_post_button} onClick={clickHandler}>Add new post</button>
        </div>
    );
}

export default Header;