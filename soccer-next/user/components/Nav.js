import Link from "next/link";
import styles from 'user/styles/Nav.module.css'


export default function Nav(){
  return (
    <nav className={styles.nav}>
             <ul>
        <li className={styles.li}> <Link href='/user/sign-up'>Login</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-in'>Sign-in</Link> </li>
             <li className={styles.li}> <Link href='/user/user-list'>User-List</Link> </li>     
      </ul>
    </nav>
  );
};