import Image from 'next/image';
import styles from './ParkCard.module.scss';
import IconButton from '@/components/IconButton/IconButton';
import Button from '@/components/Button/Button';

export default function ParkCard() {
  return (
    <section className={styles.parkCard}>
      <div className={styles.imageDiv}>
        <Image
          alt={'main street'}
          fill
          sizes="100%"
          src={'/images/main-street.jpeg'}
          className={styles.image}
        />
      </div>
      <div className={styles.parkDetails}>
        <div className={styles.parkDetailsHeader}>
          <h2>Main Street</h2>
          <IconButton />
        </div>
        <div className={styles.parkDetailsBody}>
          <p>
            A street located upon the main entrance of Disneyland. Both sides of
            the street are lined with shops filled with food, drinks, and
            merchandise. A street located upon the main entrance of Disneyland.
            Both sides of the street are lined with shops filled with food,
            drinks, and merchandise. A street located upon the main entrance of
            Disneyland. Both sides of the street are lined with shops filled
            with food, drinks, and merchandise.
          </p>
          <div className={styles.moreInfo}>
            <Button type="button" label={'More Info'} />
          </div>
        </div>
      </div>
    </section>
  );
}
