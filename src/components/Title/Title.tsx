import React from 'react';
import styles from "./Title.module.css"

interface TitleProps {
  text: string;
  subtext: string;
  color1: string;
  color2?: string;
  subtextColor?: string;
}

const Title: React.FC<TitleProps> = ({ text, subtext, color1, color2, subtextColor }) => {
  const words = text.split(' ');
  const firstWords = words.slice(0, 2).join(' ');
  const remainingWords = words.slice(2).join(' ');

  return (
    <div className={styles.titleBlock}>
      <h1 className={`${styles.title} font-playfair`}>
        <span style={{ color: color1 }}>{firstWords}</span>{' '}
        {remainingWords && (
          <span style={{ color: color2 || color1 }}>{remainingWords}</span>
        )}
      </h1>
      <p className={styles.subtext} style={{ color: subtextColor || 'black' }}>{subtext}</p>    </div>
  );
};

export default Title;