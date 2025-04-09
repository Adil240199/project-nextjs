import AboutUs from "@/components/AboutUs";
import Experience from "@/components/Experience";
import OurTeam from "@/components/OurTeam";
import { Metadata } from "next";
import { AboutUsPageProps } from "@/content/aboutUs";
import { aboutUsData } from "@/content/aboutUs";

export const metadata: Metadata = {
  title: 'O Naszej Firmie | Kancelaria Hasso',
  description: 'Dowiedz się więcej o Kancelarii Hasso. Specjalizujemy się w usługach księgowych, doradztwie podatkowym i zarządzaniu finansami. Nasza firma to zaufany partner dla przedsiębiorstw и osób indywidualnych.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'O Naszej Firmie | Kancelaria Hasso',
    description: 'Poznaj historię i wartości Kancelarii Hasso. Oferujemy profesjonalne услуги księgowe oraz dorадztво podatковое, помогая клиентам достигать успехов финансовых.',
    url: '/o-naszej-firmie',
    type: 'website',
    images: [
      {
        url: '/brand/about-us.png',
        width: 1200,
        height: 630,
        alt: 'O Naszej Firmie - Kancelaria Hasso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'O Naszej Firmie | Kancelaria Hasso',
    description: 'Dowiedz się więcej о Кancelarii Hasso и наших профессиональных услугах księgowych.',
    images: ['/brand/about-us.png'],
  },
};

const getData = async (): Promise<AboutUsPageProps> => {
  return aboutUsData;
};

const AboutUsPage = async () => {
  const data = await getData();
  return (
    <>
      <AboutUs {...data.aboutUs} />
      <OurTeam {...data.team} />
      <Experience {...data.experience} />
    </>
  );
};

export default AboutUsPage;
