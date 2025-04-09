import Image from "next/image";
import styles from "./hero.module.css"
import Title from "@/components/Title/Title";
import { heroList } from "@/content/hero";
const Hero = () => {
 return (
    <section className={`${styles.hero} container`}>
      <div className={styles.main}>
        <div className={styles.mainText}>
          <Image
           src="/icons/vector.svg"
           alt="Logo"
           width={16}
           height={16}
           className={styles.icon}
          />
          <p className={styles.text}>Twój Sukces, Nasz Priorytet</p>
        </div>
        <Title
          text="Nowoczesna i Rzetelna Księgowość dla Firm i Przedsiębiorców"
          subtext="Zaufaj doświadczeniu i wiedzy, które pomogą Ci osiągnąć stabilność finansową i sukces w biznesie"
          color1="#3D3D3D"
        />
      </div>

      <div className={styles.gridBox}>
        {heroList.map((item, index) => (
          <div key={index} className={`${styles.blockImage} ${styles[`height-${index}`]}`}>
            <Image src={`/images/content/${item.src}.jpg`} alt={item.alt} className={styles.Image}  fill />
          </div>
        ))}
      </div>
    </section>
 )
};

export default Hero;
