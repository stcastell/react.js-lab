import styles from './Button.module.css';
import Cart from '../../Cart/Cart'

export default function Button(props) {

    return (
        <button className={styles.button} type={props.type} onClick={props.onClick}>
            <span className={styles.icon}>
                <Cart/>
            </span>
            <span>
                {props.value}
            </span>
            <span className={styles.badge}>
                3
            </span>
        </button>
    );
};