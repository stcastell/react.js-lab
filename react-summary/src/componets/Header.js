import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = props => { 

    // const clickHandler = () => { 
    //     props.onActivatePostInput(true);
    // }

    return (
        <div className={styles.header_container}>
            <Link to='/add-post' className={styles.add_post_button} /*onClick={clickHandler}*/>Add new post</Link>
        </div>
    );
}

export default Header;