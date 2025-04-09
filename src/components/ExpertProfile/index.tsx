import Title from "@/components/Title/Title";
import styles from "./ExpertProfile.module.css"
import Image from "next/image";
import RoundedButton from "@/components/Buttons/RoundedButton";
import { Timeline } from "@/components/Timeline";
import { historyEvents } from "@/content/timeline";
import { expertFeatures } from "@/content/expertFeature";

const ExpertProfile = () => {
  return (
    <section className={`${styles.expertPBlock} container`}>
      <Title
        text="Poznaj swojego eksperta księgowego"
        subtext="Z ponad 36-letnim doświadczeniem w branży księgowej i finansowej, Dorota Hasso-Agopsowicz, wraz z doświadczonym zespołem, zapewnia kompleksową obsługę, dostosowaną do potrzeb firm oraz osób prywatnych"
        color1="#313131"
        subtextColor="#797575"
      />
      <div className={`${styles.flexBox} flexCenter`}>
        <div className={styles.wrapImage}>
          <div className={styles.blockImage}>
            <span className={styles.circleLeft}></span>
            <span className={styles.circleRight}></span>
            <Image
              src="/images/content/experts.jpg"
              alt="experts"
              width={485}
              height={490}
              className={styles.imageExpert}
            />
          </div>
        </div>

        <div className={styles.blockInfo}>
          <h2 className={styles.mainText}>Przekrocz swoje cele</h2>
          <p className={styles.subtext}>Przekrocz swoje cele finansowe Dzięki dogłębnej wiedzy w branży księgowej wspieramy naszych klientów w osiąganiu ich celów finansowych</p>
          <ul className={styles.list}>
            {expertFeatures.map((feature, index) => (
              <li key={index}>
                <div className={styles.wrapIcon}>
                  <Image
                    src={feature.icon}
                    alt="check-icon"
                    width={7}
                    height={5}
                    className={styles.icon}
                  />
                </div>
                {feature.text}
              </li>
            ))}
          </ul>
          <RoundedButton text="Poznaj nasz zespół" href="/zespol#team"/>
        </div>
      </div>
      <Timeline data={historyEvents}/>
    </section>
  )
}

export default ExpertProfile;