"use client";

import { TimelineItem } from "@/content/timeline";
import { useState } from "react";
import styles from "./Timeline.module.css"
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';


interface TimelineProps {
    data: TimelineItem[];
}

export function Timeline({ data }: TimelineProps) {
    const [isAnimating, setIsAnimating] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : data.length - 1));
            setIsAnimating(false);
        }, 300);
    };

    const handleNextClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex < data.length - 1 ? prevIndex + 1 : 0));
            setIsAnimating(false);
        }, 300);
    };

    const currentItem = data[currentIndex];
    
    return (
        <div className={`${styles.Timeline} flexCenter`}>
          <div className={`${styles.block} ${isAnimating ? styles.opacity0 : styles.opacity100}`}>
            <p className={styles.text}>{currentItem.description}</p>
          </div>
          <div className={styles.blockButton}>
            <button onClick={handlePrevClick} className={styles.button} >
              <FaArrowLeft className={styles.arrow} />
            </button>
            <p className={`${styles.block} ${isAnimating ? styles.opacity0 : styles.opacity100}`}>
              {currentItem.date}
            </p>
            <button onClick={handleNextClick} className={styles.button} >
                    <FaArrowRight className={styles.arrow} />
                </button>
          </div>
        </div>
    );
}
