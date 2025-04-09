import Image from 'next/image';
import Title from "@/components/Title/Title";
import CTA from '@/components/CTA';
import { ExperienceProps } from '@/content/aboutUs';
// import Counter from '../Counter';
import { counterData } from '@/content/counter';
import styles from "./Experience.module.css"
export default function Experience({
  title,
  subtitle,
  imageSrc,
  list
}: ExperienceProps) {
  return (
    <section className={`container ${styles.section}`}>
      <Title
        text={title}
        subtext={subtitle}
        color1="#3D3D3D"
        subtextColor="#3D3D3D"
      />

      <div className={`flexCenter ${styles.wrapper}`}>

        <div className={styles.wrapImg}>
          <span className={styles.frameUp}></span>
          <span className={styles.frameBt}></span>
          <Image
            src={`images/content/${imageSrc}.svg`}
            alt="strengths"
            width={505}
            height={506}
            className={styles.imgProgress}
          />
        </div>

        <div className={styles.blockValues}>
          <h4 className={`font-roboto ${styles.valTitle}`}>
            Wartości, które definiują <span style={{ color: '#E6B366' }}>naszą pracę</span>
          </h4>
          <p className={styles.description}>{list.description}</p>
          <ul className={styles.list}>
            {list.items.map((text, index) => (
              <li key={index} className={styles.listItem}>
                <div className={styles.wrapIcon}>
                  <Image src="/icons/Icon.svg" alt="check-icon" width={7} height={5} className={styles.icon}/>
                </div>
                {text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* <Counter data={counterData} /> */}
      <CTA />
    </section>
  )
}