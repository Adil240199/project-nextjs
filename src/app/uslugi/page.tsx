import Offers from "@/components/Offers";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Uslugi | Kancelaria Hasso',
    description: 'Uslugi ksiegowy',
    icons: {
      icon: '/favicon.png',
    },
  };

const ServicesPage = () => { return <Offers/> }

export default ServicesPage;