import Title from "@/components/Title/Title";
import CTA from "@/components/CTA";
import { servicesList } from "@/content/services";
import { ServicesGridView } from "../GridItem";
import styles from "./Offers.module.css"

const Offers = () => {
  return (
    <section className={styles.section}>
      <div className={'container ${blockTitle}'}>
        <h4 className={styles.textUslugi}>Nasze usługi</h4>
        <Title
          text="Eksperckie usługi finansowe"
          subtext={"Zapoznaj się z naszą szeroką gamą usług księgowych i finansowych, których celem <br/> jest  pomoc firmom i osobom fizycznym w osiągnięciu przejrzystości finansowej i rozwoju"}
          color1='#3D3D3D'
        />
      </div>
      <div className={styles.bgWrap}>
        <ServicesGridView cards={servicesList} />
      </div>
      <CTA />
    </section>
  );
};

export default Offers;