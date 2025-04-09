import styles from "./Forms.module.css"
interface InputFieldProps {
    type: string;
    placeholder: string;
    value?: string;
    onChange?: (value: string) => void;
  }
  
  export const InputField: React.FC<InputFieldProps> = ({ type, placeholder, value, onChange }) => (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange?.(e.target.value)}
      className={styles.inputField}
    />
  );
  