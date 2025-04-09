import Link from "next/link";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <div className={`container ${styles.wrapCta}`}>
      <div className={styles.CTA}>
        {["wrapSpan", "wrapSpanTop"].map((cls) => (
          <div key={cls} className={styles[cls]}>
            <span className={styles.span}></span>
          </div>
        ))}

        <div className={styles.blockTitle}>
          <h3 className={styles.mainText}>Zadzwoń teraz</h3>
          <p className={styles.text}>
            Zbudujmy razem silniejszą przyszłość finansową. Skontaktuj się z
            nami, aby uzyskać spersonalizowaną konsultację już dziś.
          </p>
        </div>

        <Link href="/kontakt" className={styles.linkKontakt}>
          Kontakt
        </Link>
      </div>
    </div>
  );
};

export default CTA;