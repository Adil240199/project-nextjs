import Link from 'next/link';
import styles from "./Buttons.module.css"

interface OutlinedButtonProps {
  href: string;
  text: string;
}

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className={styles.OutlinedButton}>
      {text}
    </Link>
  );
};
