import Link from "next/link";
import styles from 'user/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
        <li className={styles.li}> <Link href='/user/components/login'>Login</Link> </li>
              
      </ul>
    </nav>
  );
};