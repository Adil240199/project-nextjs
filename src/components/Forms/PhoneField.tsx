import styles from "./Forms.module.css"
interface PhoneInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const PhoneField: React.FC<PhoneInputProps> = ({ value, onChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/[^\d]/g, "");
    let formattedPhone = "+48";

    /* Format phone number*/
    if (input.length > 2) formattedPhone += ` ${input.substring(2, 5)}`;
    if (input.length > 5) formattedPhone += ` ${input.substring(5, 8)}`;
    if (input.length > 8) formattedPhone += ` ${input.substring(8, 11)}`;

    console.log("Formatted Phone:", formattedPhone);
    onChange(formattedPhone);
  };

  return (
    <input
      type="tel"
      value={value}
      onChange={handleInputChange}
      placeholder="+48 512 345 678"
      className={styles.phoneField}
    />
  );
};
