import Image from "next/image";
import styles from "./DaveStory.module.css"
const DaveStory = () => {
  return (
    <section className={styles.section}>
      <h1 className={`font-playfair ${styles.mainTitle}`}>
        Historia o tym, jak Dave przeszedł długą drogę, aby zostać neobankiem
      </h1>

      <ul className={styles.list}>
        <li>FINTECH</li>
        <li>APR 4, 2023</li>
        <li>PRZEZ Ashleya Vance’a</li>
      </ul>

      <Image
        src="/images/content/history.jpg"
        alt="imagenewspaper"
        width={1038}
        height={480}
        className={styles.imgHistory}
      />

      <div className={styles.blockArticles}>
        <ArticleSection
          title="Pytania i odpowiedzi z założycielem Dave’a, Jasonem Wilkiem"
          content={`Tuż przed krachem Silicon Valley Bank rozmawiałem z Jasonem Wilkiem, założycielem i dyrektorem generalnym neobanku Dave, na temat działalności tej firmy. 
          Byłem zaintrygowany, ponieważ neobank – który uważał Marka Cubana za jednego ze swoich inwestorów jako firmę prywatną – obrał, jak niektórzy mogliby powiedzieć, 
          wsteczną drogę, aby stać się neobankiem. Zamiast zaczynać od oferowania czeków i oszczędności, udało się.`}
        />

        <ArticleSection
          title="W przyszłość"
          content={`JW: Jest to trudne miejsce dla rozwijających się firm, które mogą mieć dostęp do większej ilości kapitału, aby go ostatecznie pozyskać, 
          ponieważ koszt kapitału jest znacznie droższy ze względu na stopy procentowe.`}
        />

        <ArticleSection
          title="Co stanie się dalej?"
          content={`W zeszłym roku odpadliśmy od 8 do 10 kwartałów. Teraz dzieli nas od 4 do 6 kwartałów, kiedy spodziewamy się, że spółka będzie rentowna. 
          Byliśmy już wcześniej w 2018 i 2019 roku, więc byliśmy tam już wcześniej.`}
        />

        <ArticleSection
          title="Jak sztuczna inteligencja ma się do tego wszystkiego?"
          content={`Poprawiliśmy nasz silnik sztucznej inteligencji, który jest w stanie bardzo dokładnie wykryć czyjeś dochody i zrozumieć, jak ryzykowne może być przekazanie 
          komuś pieniędzy, zanim ta osoba otrzyma zapłatę. Dzięki temu silnikowi AI obniżyliśmy stawki domyślne do około 2%.`}
        />
      </div>
    </section>
  );
};

interface ArticleSectionProps {
  title: string;
  content: string;
}

const ArticleSection: React.FC<ArticleSectionProps> = ({ title, content }) => (
  <div>
    <h2 className={styles.titleArticle}>{title}</h2>
    <p className={styles.textContent}>{content}</p>
  </div>
);

export default DaveStory;