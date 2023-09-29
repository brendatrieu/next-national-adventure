import styles from './Button.module.scss';

export default function Button({
  label,
  type,
}: {
  label: string;
  type: 'button' | 'submit';
}) {
  return (
    <button type={type} className={styles.button}>
      {label}
    </button>
  );
}
