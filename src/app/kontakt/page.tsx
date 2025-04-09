
import { ContactDetails } from "@/components/ContactDetails";
import { ContactForm } from "@/components/ContactForm";
import { GoogleMaps } from "@/components/MapJs/GoogleMaps";
import { GoogleMapsWrapper } from "@/components/MapJs/GoogleMapsWrapper";
import Title from "@/components/Title/Title";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Kontakt | Kancelaria Hasso',
  description: 'Oferujemy kompleksowe usługi księgowe, doradztwo podatkowe oraz zarządzanie finansami. Skontaktuj się z nami, aby uzyskać więcej informacji.',
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    title: 'Kontakt | Kancelaria Hasso',
    description: 'Oferujemy kompleksowe usługi księgowe, doradztwo podatkowe oraz zarządzanie finansami. Skontaktuj się z nami, aby uzyskać więcej informacji.',
    url: '/kontakt',
    type: 'website',
    images: [
      {
        url: '/brand/seo-image.png',
        width: 1200,
        height: 630,
        alt: 'Kontakt z Kancelarią Hasso',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontakt | Kancelaria Hasso',
    description: 'Oferujemy kompleksowe usługi księgowe, doradztwo podatkowe oraz zarządzanie finansami.',
    images: ['/brand/seo-image.png'],
  },
};

const ContactPage = () => {
  return (
    <section className='container contactPage'>
      <Title
        text="Nasza lokalizacja i wskazówki"
        subtext="Znajdź nas w naszej dogodnej lokalizacji, łatwo dostępnej i centralnie położonej."
        color1='#3D3D3D'
      />
      <GoogleMapsWrapper>
        <GoogleMaps />
      </GoogleMapsWrapper>
      <div className="kontaktDetails">
        <ContactDetails />
        <span className="spanKotakt"></span>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactPage;