import { ElementType } from "react";
import { FaLinkedin, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export type IconName = "linkedin" | "facebook" | "instagram" | "whatsapp";

export interface SocialItemProps {
    icon: IconName;
    link: string;
}

export const iconMap: Record<IconName, ElementType> = {
    linkedin: FaLinkedin,
    facebook: FaFacebook,
    instagram: FaInstagram,
    whatsapp: FaWhatsapp,
};

export const socialItems: SocialItemProps[] = [
    { icon: "linkedin", link: "https://linkedin.com" },
    { icon: "facebook", link: "https://www.facebook.com" },
    { icon: "instagram", link: "https://www.instagram.com" },
    { icon: "whatsapp", link: "#" },
];
