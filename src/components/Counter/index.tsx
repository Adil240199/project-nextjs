import { CounterProps } from "@/content/counter";
import styles from "./Counter.module.css"
interface CounterComponentProps {
  data: CounterProps[];
}

export default function Counter({ data }: CounterComponentProps) {
  return (
    <div className={styles.container}>
      <div className={styles.gridWrap}>
        {data.map((item, index) => (
          <div className={styles.flexWrap} key={index}>
            <span className={styles.span}></span>
            <div>
              <h6 className={styles.title}>
                {item.count}
                {item.type}
              </h6>
              <p className={styles.text}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}