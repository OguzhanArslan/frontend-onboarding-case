import Button from '@/components/Button';
import Stickers, { type Sticker } from '@/components/Stickers';

import styles from './Banner.module.scss';

interface BannerProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  stickers?: readonly Sticker[] | undefined;
}

export default function Banner(props: BannerProps) {
  const { label, title, description, imageSrc, stickers } = props;

  return (
    <div className={styles.banner}>
      <div className={styles.content} data-banner-content>
        <h2 className={styles.label}>{label}</h2>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <Button>Learn More</Button>
      </div>

      {imageSrc && (
        <div className={styles.media}>
          <img
            src={imageSrc}
            alt={title}
            className={styles.hero}
            data-banner-image
          />

          <Stickers items={stickers} />
        </div>
      )}
    </div>
  );
}
