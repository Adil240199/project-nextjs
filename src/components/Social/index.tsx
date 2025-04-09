"use client"
import styles from "./Social.module.css"
import SocialButton from "../Buttons/SocialButton";
import { iconMap, socialItems } from "@/content/social";


export const Social = () => {
    const handleOpen = (link: string) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <div className={styles.social}>
            {socialItems.map((item, index) => {
              const IconComponent = iconMap[item.icon];

              return (
                  <SocialButton
                      key={index}
                      icon={<IconComponent className={styles.socIcon} />}
                      onClick={() => handleOpen(item.link)}
                      className="h-6 w-6 hover:opacity-75"
                  />
              );
            })}
        </div>
    );
};

export default Social;