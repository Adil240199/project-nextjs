"use client";
import { useState } from "react";
import styles from "../components/FeaturedServices/FeaturedS.module.css";
import { ServicesGridView } from "@/components/GridItem";
import { servicesList } from "@/content/services";

export default function FeaturedServicesClient() {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => setIsExpanded((prev) => !prev);

  return (
    <>
      <ServicesGridView cards={servicesList} limit={isExpanded ? servicesList.length : 3} />
      <button onClick={toggleExpand} className={styles.button}>
        <span>{isExpanded ? "Zamknij" : "Zobać wszystkie"}</span>
        {isExpanded ? "" : <img src="/icons/arrowtoLeft.svg" alt="arrow icon" />}
      </button>
    </>
  );
}
