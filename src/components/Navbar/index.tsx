"use client"
import Image from "next/image";
import styles from "./navbar.module.css";
import { navbarLinks } from "@/content/navigation";
import { OutlinedButton } from "@/components/Buttons/OutlinedButton";
import Link from "next/link";
import { useNavbar } from "@/hooks/useNavbar";
import Social from "@/components/Social";


const Navbar = () => {
  const { isOpen, handleClick, closeMenu } = useNavbar();

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.navWrapper} container`}>
        <div className={styles.imgWrapper}>
          <Image
            src="/brand/logo.svg"
            alt="Logo"
            width={250}
            height={60}
            className={styles.logo}
            priority
          />
        </div>

        {/* Десктопное меню */}
        <ul className={styles.ulDesktop}>
          {navbarLinks.map(({ title, href }, index) => (
            <li key={index}>
              <OutlinedButton text={title} href={href} />
            </li>
          ))}
        </ul>

        {/* Кнопка "Kontakt" для десктопа */}
        <div className={styles.wrapperContact}>
          <Link href="/kontakt">
            <button className={styles.buttonContact}>Kontakt</button>
          </Link>
        </div>

        {/* Иконка меню для мобильных устройств */}
        <div className={styles.wrapIconMobile}>
          <button
            onClick={handleClick}
            className={`${styles.buttonMobile} ${isOpen ? styles.rotate : ""}`}
          >
            {isOpen ? <span>&#10005;</span> : <span>&#9776;</span>}
          </button>
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.ulMobileWrap}>
          <ul className={styles.ulMobile}>
            {navbarLinks.map(({ title, href }, index) => (
              <li key={index}>
                <Link
                  href={href}
                  onClick={closeMenu}
                  className={styles.linkMobile}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Социальные ссылки */}
          <div className={styles.wrapSocial}>
            <Social />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
