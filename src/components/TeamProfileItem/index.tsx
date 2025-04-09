import { ProfileProps } from "@/content/team";
import { getFullName } from "@/utils/formatters";
import Image from "next/image";
import styles from "./TeamProfileItem.module.css"

export const TeamProfileItem: React.FC<ProfileProps> = ({
    name,
    lastname,
    position,
    photoUrl,
}) => {

    return (
        <figure className={styles.blockTeamItem}>
            <Image src={`images/team/${photoUrl}.svg`} alt={name} width={300} height={355} className={styles.teamImg} />
            <figcaption className={styles.textImg}>
                <h4 className="font-playfair">{getFullName(name, lastname)}</h4>
                <p>{position}</p>
            </figcaption>
        </figure>
    )
}