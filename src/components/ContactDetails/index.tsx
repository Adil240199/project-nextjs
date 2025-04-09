import { detailItems, InfoItemProps } from "@/content/contact";
import Image from "next/image";
import styles from "./ContactDetails.module.css"

export const ContactDetails = () => {
  const DetailItem: React.FC<InfoItemProps> = ({ icon, label, value }) => (
    <div className={styles.flexBlock}>
      <div className={styles.wrapImg}>
        <Image src={icon} alt={label} width={32} height={32} className={styles.icon} />
      </div>
      <div className={styles.textBlock}>
        <h4 className={styles.title}>{label}</h4>
        <p className={styles.text}>{value}</p>
      </div>
    </div>
  );

  return (
    <div className={styles.gridBlock}>
      {detailItems.map((item, index) => (
        <DetailItem
          key={index}
          icon={item.icon}
          label={item.label}
          value={item.value}
        />
      ))}
    </div>
  );
};