import styles from "./Forms.module.css"
interface TextAreaFieldProps {
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
  }
  
export const TextAreaField: React.FC<TextAreaFieldProps> = ({ placeholder, value, onChange }) => (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={styles.textField}
    ></textarea>
);
  