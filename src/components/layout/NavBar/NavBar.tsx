import styles from './NavBar.module.scss';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <Link href={'/'} className={styles.logo}>
        <h3>National Adventures</h3>
      </Link>
      <ul>
        <li>
          <Link href={'/'} className={styles.logo}>
            Home
          </Link>
        </li>
        <li>
          <Link href={'/favorites'} className={styles.logo}>
            Favorites
          </Link>
        </li>
      </ul>
    </nav>
  );
}
