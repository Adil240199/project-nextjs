import Image from 'next/image';
import React from 'react';
import styles from "./GridItem.module.css"
import { ServiceItemProps } from "@/content/services";
import Link from 'next/link';

interface GridItemProps {
  cards: ServiceItemProps[];
  limit?: number;
}

export const ServicesGridView: React.FC<GridItemProps> = ({ cards, limit }) => {
  const displayedCards = cards.slice(0, limit || 6);

  return (
    <div className={`${styles.servicesGrid} container`}>
      {displayedCards.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </div>
  );
};

const GridItem: React.FC<ServiceItemProps> = ({ title, subtitle, icon, path, }) => (
    <Link href={{ pathname: path, query: { title: title } }} as={path} passHref>
      <div className={styles.gridItemWrap}>
        <div className={styles.gridItem}>
          <Image
            src={`/icons/${icon}.svg`}
            alt={title}
            width={68}
            height={68}
            className={styles.ImageItem}
          />
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.subTitle}>{subtitle}</p>
        </div>
      </div>
    </Link>
  )

