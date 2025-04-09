import Title from "@/components/Title/Title"
import styles from "./FeaturedS.module.css"
import FeaturedServicesClient from "@/hooks/useFeaturedServices"

export default function FeaturedServices() {
    return (
      <div className={styles.FeaturedSBlock}>
        <Title
          text="Nasze Kompleksowe Usługi Księgowo-Kadrowe"
          subtext="Od prowadzenia księgowości po obsługę kadrowo-płacową – oferujemy szeroki zakres usług, które ułatwiają zarządzanie finansami i zapewniają pełną zgodność z przepisami. Dzięki indywidualnemu podejściu dbamy o każdy szczegół, byś mógł skupić się na rozwoju swojego biznesu"
          color1="#FDFDFD"
          color2="#E6B366"
          subtextColor="#fff"
        />
        <FeaturedServicesClient />
      </div>
    )
  }