
import Link from 'next/link';
import styles from '../styles/navegationLink.module.scss';

function NavegationLink(props) {

  return (
    <Link href={props.href ? props.href : "/"} >
      <a className={styles.link}>
        {props.name ? props.name : "Name"}
      </a>
    </Link>
  )
}

export default NavegationLink;
