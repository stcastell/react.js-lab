import './Header.css';

const Header = props => { 

    const clickHandler = () => { 
        props.onActivatePostInput(true);
    }

    return (
        <>
            <button onClick={clickHandler}>Add new post</button>
        </>
    );
}

export default Header;