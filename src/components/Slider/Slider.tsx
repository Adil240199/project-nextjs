"use client";

import { useSlider } from "@/hooks/useSlider";
import { TestimonialItem } from "../TestimonialsItem";
import { TestimonialsProps } from "@/content/testimonials";
import styles from "./Slider.module.css";

interface TestimonialsSliderProps {
  items: TestimonialsProps[];
}

const Slider: React.FC<TestimonialsSliderProps> = ({ items }) => {
  const {
    sliderRef,
    currentIndex,
    isDragging,
    handleMouseDown,
    handleMouseMove,
    handleMouseUpOrLeave,
    handleDotClick,
  } = useSlider();

  return (
    <div>
      <div
        ref={sliderRef}
        className={styles.wrapSlider}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
      >
        {items.map((item, index) => (
          <TestimonialItem {...item} key={index} />
        ))}
      </div>
      <div className={styles.dots}>
        {items.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
