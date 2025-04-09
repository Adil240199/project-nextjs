import { ReactElement } from 'react';
import styles from "./Buttons.module.css"

interface ButtonProps {
    icon: ReactElement;
    onClick: () => void;
    className?: string;
}

export default function SocialButton({ icon, onClick, className }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`${styles.SocialButton} ${className}`}
        >
            {icon}
        </button>
    );
}