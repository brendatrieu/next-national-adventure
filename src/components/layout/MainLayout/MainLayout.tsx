import NavBar from '../NavBar/NavBar';
import styles from './MainLayout.module.scss';

export default function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.body}>{children}</div>
    </div>
  );
}
