import styles from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import Button from '../../UI/Button/Button';

export default function Header() {

    const clickHandler = () => { 
        alert('a')
    }

    return (
        <>
            <header className={styles.header}>
                <h1>React Meals</h1>
                <Button value='My Cart' onClick={clickHandler}/>
            </header>
            <div className={styles.main_image}>
                <img src={mealsImg} alt='Food'/>
            </div>
        </>
    );
};