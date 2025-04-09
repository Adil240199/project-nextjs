import Title from "@/components/Title/Title";
import { TestimonialsProps } from "@/content/testimonials";
import styles from "./Testimonials.module.css";
import Slider from "@/components/Slider/Slider";

interface TestimonialsPageProps {
  items: TestimonialsProps[];
}

const Testimonials: React.FC<TestimonialsPageProps> = ({ items }) => {
  return (
    <div className={styles.testimonials}>
      <Title
        text="Historie sukcesu klientów"
        subtext="Opinie naszych klientów na temat jakości świadczonych usług i naszego serwisu."
        color1="#FAFAFA"
        subtextColor="#C3C0C0"
      />
      <Slider items={items} />
    </div>
  );
};

export default Testimonials;
