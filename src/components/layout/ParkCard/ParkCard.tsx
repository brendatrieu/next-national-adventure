import Image from 'next/image';
import styles from './ParkCard.module.scss';
import IconButton from '@/components/IconButton/IconButton';
import Button from '@/components/Button/Button';

export default function ParkCard({
  imageSrc,
  imageDesc,
  parkName,
  parkDesc,
}: {
  imageSrc: string;
  imageDesc: string;
  parkName: string;
  parkDesc: string;
}) {
  return (
    <section className={styles.parkCard}>
      <div className={styles.imageDiv}>
        <Image
          alt={imageDesc}
          fill
          sizes="100%"
          src={imageSrc}
          className={styles.image}
        />
      </div>
      <div className={styles.parkDetails}>
        <div className={styles.parkDetailsHeader}>
          <h2>{parkName}</h2>
          <IconButton />
        </div>
        <div className={styles.parkDetailsBody}>
          <div className={styles.description}>
            <p>{parkDesc}</p>
          </div>
          <div className={styles.moreInfo}>
            <Button type="button" label={'More Info'} />
          </div>
        </div>
      </div>
    </section>
  );
}
