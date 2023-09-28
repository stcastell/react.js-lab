import styles from './AvailableMeals.module.css';

import Card from '../UI/Card/Card';

export default function AvailableMeals(props) {

    return (
        <section className={styles.meals}>
            <Card>
                <ul>
                    {props.data.map(item => {
                        return (
                            <li key={item.id}>{item.name}</li>
                        );
                    })}
                </ul>
            </Card>
        </section>
    );
};