import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styles from "./Buttons.module.css"

interface RoundedButtonProps {
  text: string;
  href: string;
  iconSrc?: string;
  iconSize?: { width: number; height: number };
}

const RoundedButton: FC<RoundedButtonProps> = ({ 
  text, 
  href, 
  iconSrc = "/icons/arrowVector.svg", 
  iconSize = { width: 13, height: 14 } 
}) => {
  return (
    <Link href={href} className={styles.linkBlock}>
      {text}
      <div className={styles.roundedImage}>
        <Image 
          src={iconSrc} 
          alt="icon" 
          width={iconSize.width} 
          height={iconSize.height} 
        />
      </div>
    </Link>
  );
};

export default RoundedButton;