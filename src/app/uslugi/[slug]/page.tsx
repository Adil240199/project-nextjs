import CTA from "@/components/CTA";
import { ServicesSlug, servicesMap } from "@/content/services";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";
import styles from "./Slug.module.css"
import Link from "next/link";

interface Params {
  slug: ServicesSlug;
}
  
interface Props {
  params: Params;
}
  


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const data = servicesMap.get(params.slug);

  if (!data) {
    return {
      title: "Страница не найдена",
      description: "К сожалению, данная страница не существует.",
    };
  }

  return {
    title: `${data.title} | Kancelaria Hasso`,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [
        {
          url: "/images/content/history.jpg",
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
      url: `/services/${params.slug}`,
    },
  };
}

const ServicePage: React.FC<Props> = async ({ params }) => {
  const data = servicesMap.get(params.slug)

  if (!data) {
    return (
      <div className={styles.nfWrapper}>
        <div className={styles.notFoundBlock}>
          <h1 className={styles.nfTitle}>
            Страница не найдена
          </h1>
          <p className={styles.nfSubtitle}>
            Извините, но мы не смогли найти запрашиваемую вами страницу.
          </p>
          <Link href="/" className={styles.linkToHome}>
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className={`container ${styles.mainContainer}`}>
      <div className={styles.headerWrapper}>
         <p className={styles.subtitle}>Nasze usługi</p>
           <h1 className={styles.mainTitle}>
              {data?.title}
           </h1>
           <p className={styles.mainDescription}>
              {data?.description || "Opis usługi jest w przygotowaniu."}
           </p>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.imageWrapper}>
          <Image
          src="/images/content/history.jpg"
          alt={data?.title || "Usługi"}
          width={1038}
          height={600}
          className={styles.image}
          />
          <div className={styles.imageOverlay}></div>
        </div>

        <div className={styles.serviceDetails}>
          <h2 className={styles.serviceHeadline}>
              {data?.service.headline || "Zakres usługi"}
          </h2>
          <ul className={styles.serviceList}>
              {data?.service.list.map((item, index) => (
                <li key={index} className={styles.serviceListItem}>
                  <span className={styles.bulletPoint}></span>
                  <span>{item}</span>
                </li>
            ))}
            </ul>
        </div>
        </div>
        <div className={styles.ctaWrap}>
          <CTA />
        </div>
    </div>
);

}

export default ServicePage;