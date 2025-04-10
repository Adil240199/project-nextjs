import React from "react";
import Image from "next/image";
import { TestimonialsProps } from "@/content/testimonials";
import styles from "./TestimonialsItem.module.css"

export const TestimonialItem: React.FC<TestimonialsProps> = ({
    description,
    author,
    position,
    imageSrc,
}) => {
    return (
        <div className={styles.container}>
            <Image
                src="/icons/group.svg"
                alt="group"
                width={56}
                height={36}
                className={styles.iconItem}
            />
            <div className={styles.contentText}>
                <p className={styles.underText}>
                    {description}
                </p>
                <div className={styles.blockItem}>
                    <div className={styles.contentImage}>
                        <Image
                            src={`/images/testimonials/${imageSrc}.webp`}
                            alt="testimnial image"
                            width={35}
                            height={35}
                            style={{ height: "fit-content" }}
                        />
                    </div>
                    <p className={styles.textAuthor}>{author}</p>
                    <p className={styles.textPos}>{position}</p>
                </div>
            </div>
        </div>
    );
};
