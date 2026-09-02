import styles from './Banner.module.scss';

interface BannerProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
}

export default function Banner(props: BannerProps) {
  const { label, title, description, imageSrc } = props;

  return (
    <div className={styles.banner}>
      {imageSrc && <img src={imageSrc} alt={title} className={styles.img} />}
      <div className={styles.content}>
        <h2 className={styles.label}>{label}</h2>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
