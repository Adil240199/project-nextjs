import Title from "@/components/Title/Title";
import CTA from "@/components/CTA";
import InstagramWidget from "../InstagramWidget";
import styles from "./FinTrends.module.css"

export default function FinTrends() {
  return (
    <div className={styles.finTrends}>
      <Title 
          text="Bądź na bieżąco z najnowszymi trendami w księgowości" 
          subtext="Odkryj eksperckie spostrzeżenia, trendy i praktyczne import dotyczące optymalizacji finansów osobistych i firmowych."
          color1="#313131" 
          subtextColor="#7A7575"  
         />
      <InstagramWidget/>
      <CTA/>

    </div>
  );
} 