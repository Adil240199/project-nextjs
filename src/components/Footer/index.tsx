import { navbarLinks, policyLinks } from "@/content/navigation";
import Link from "next/link";
import styles from "./Footer.module.css"
import Image from "next/image";
import Social from "@/components/Social";

const Footer = () => {
  return (
    <footer id="footer" className={styles.footer} >
      <div className="container">
        <div className={styles.block}>
          <div className="blockMedia">
            <Image
              src="/brand/logoDark.svg"
              alt="Kancelaria Podatkowa Logo"
              width={250}
              height={60}
              className={styles.logo}
            />
            <p className={styles.textMedia}>Media społecznościowe</p>
            <Social />
          </div>

          <div className={styles.grid}>
            <div>
              <h4 className={styles.bold}>Firma</h4>
              <ul className={styles.list}>
                {navbarLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                 ))}
               </ul>
            </div>

            <div>
              <h4 className={styles.bold}>Prywatność</h4>
              <ul className={styles.list}>
                {policyLinks.map((item, index) => (
                  <li key={index}>
                    <Link href={item.href}>{item.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>

        <div className={styles.footerInfo}>
          <p>Copyright © Dorota Hasso-Agopsowicz 2024. All Rights Reserved.</p>
          <a href="https://nelcosoft.pl" target="_blank">Developed By Nelcosoft</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer