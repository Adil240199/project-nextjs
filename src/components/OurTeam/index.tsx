"use client"
import Image from 'next/image';
import Title from "@/components/Title/Title";
import { TeamProps } from '@/content/aboutUs';
import { TeamProfileItem } from '@/components/TeamProfileItem';
import { getFullName } from '@/utils/formatters';
import styles from "./OurTeam.module.css"
import { useSlider } from '@/hooks/useSlider';

export default function OurTeam({ title, subtitle, owner, staff }: TeamProps) {
  const { sliderRef, handleMouseDown, handleMouseMove, handleMouseUpOrLeave} = useSlider();
  
  const handlers = {
    onMouseDown: handleMouseDown,
    onMouseMove: handleMouseMove,
    onMouseUp: handleMouseUpOrLeave,
    onMouseLeave: handleMouseUpOrLeave,
  };
  return (
    <section id="team" className={styles.section}>
      <div className={styles.wrapper}>
        <Title
          text={title}
          subtext={subtitle}
          color1="#FAFAFA"
          subtextColor="#FDFDFD"
        />

        <div className={styles.blockOwner}>
          <div className={styles.blockFrame}>
            <figure className={styles.figure}>
              <Image src={`images/team/${owner.profile.photoUrl}.svg`} alt={owner.profile.name} width={300} height={355} className={styles.imgOwner}/>
              <figcaption className={styles.textImg}>
                <h4 className="font-playfair">{getFullName(owner.profile.name, owner.profile.lastname)}</h4>
                <p>{owner.profile.position}</p>
              </figcaption>
            </figure>
          </div>

          <div className={styles.blockSkills}>
            <h4 className={`fontRoboto ${styles.titleSkill}`}>{owner.skils.headline}</h4>
            <p className={styles.decription}>{owner.skils.description}</p>
          </div>
        </div>


        <div ref={sliderRef} className={styles.sliderContainer} {...handlers}>
          {staff.map((profile, index) => (
            <TeamProfileItem {...profile} key={index} />
          ))}
        </div>
      </div>

    </section>
  )
}