import styles from  './Header.module.css';

const Header = props => { 

    const clickHandler = () => { 
        props.onActivatePostInput(true);
    }

    return (
        <div className={styles.header_container}>
            <button className={styles.add_post_button} onClick={clickHandler}>Add new post</button>
        </div>
    );
}

export default Header;