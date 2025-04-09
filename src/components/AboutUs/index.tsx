import { AboutUsProps } from '@/content/aboutUs';
import Image from 'next/image';
import styles from './AboutUs.module.css';

export default function AboutUs({ title, subtitle, description, imageSrc }: AboutUsProps) {
  return (
    <div className={`container ${styles.blockAbout}`}>
      <p className={styles.subtitle}>{subtitle}</p>
      <h1 className={styles.mainText}>{title}</h1>
      <div className={`flexCenter ${styles.blockSpan}`}>
        <div className={styles.blockText}>
          <span className={styles.spanLine} />
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.blockImage}>
        <span className={styles.circle}/>
        <span className={styles.circle}/>
          <Image
            src={`/icons/${imageSrc}.webp`}
            alt="imageAbout"
            width={485}
            height={490}
            className={styles.Image}
          />
        </div>
      </div>
    </div>
  );
}