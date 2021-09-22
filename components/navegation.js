
import styles from '../styles/navegation.module.scss';
import vercelImage from '../public/vercel.svg';

import Image from 'next/image'
import NavegationLink from './NavegationLink';
import Searchbar from './searchbar';

function Navegation() {
    return (
        <div id={styles.container}>
            <ul id={styles.navUl}>
                <li className={styles.navLi}>
                    <div className={styles.imageContainer}>
                        <Image id={styles.vercelImage} src={vercelImage} alt="logo"></Image>
                    </div>
                    {/* <NavegationLink name="products" href="/products" /> */}
                </li>
                <li className={styles.navLi}>
                    <NavegationLink name="products" href="/products" />
                </li>
                <li className={styles.navLi}>
                    <NavegationLink name="us" href="/us" />
                </li>
                <li className={styles.navLi}>
                    <NavegationLink name="Account" href="/account" />
                </li>
                <li className={styles.navLi}>
                    <Searchbar placeholder="look product." />
                </li>
            </ul>
        </div>
    )
}

export default Navegation
