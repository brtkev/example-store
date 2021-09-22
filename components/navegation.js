
import styles from '../styles/navegation.module.scss';

import NavegationLink from './NavegationLink';
import Searchbar from './searchbar';

function Navegation() {
    return (
        <div id={styles.container}>
            <ul id={styles.navUl}>
                <li className={styles.navLi}>
                    <NavegationLink name="home" href="/" />
                </li>
                <li className={styles.navLi}>
                    <NavegationLink name="products" href="/products" />
                </li>
                <li className={styles.navLi}>
                    <NavegationLink name="about us" href="/about" />
                </li>
                <li className={styles.navLi}>
                    <NavegationLink name="Account" href="/account" />
                </li>
                <li className={styles.navLi}>
                    <Searchbar placeholder="Find product" />
                </li>
            </ul>
        </div>
    )
}

export default Navegation
