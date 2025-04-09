import { ProfileProps, teamList } from "./team";

export interface TeamProps {
  title: string;
  subtitle: string;
  owner: {
    profile: ProfileProps;
    skils: {
      headline: string;
      description: string;
    }
  },
  staff: ProfileProps[];
}

export interface ExperienceProps {
  title: string;
  subtitle: string;
  imageSrc: string;
  list: {
    title: string;
    description: string;
    items: string[];
  }
}

export interface AboutUsProps {
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export interface AboutUsPageProps {
  aboutUs: AboutUsProps;
  team: TeamProps;
  experience: ExperienceProps;
}

export const aboutUsData: AboutUsPageProps = {
  aboutUs: {
    title: "O Naszej firmie",
    subtitle: "Kim jesteśmy?",
    description:
      "Witamy w Kancelarii Podatkowej Dorota Hasso-Agopsowicz – miejscu, gdzie Twoje finanse i sprawy kadrowe są w najlepszych rękach. Od 2 lutego 2015 roku świadczymy kompleksowe usługi księgowe i kadrowe, wspierając zarówno firmy, jak i osoby prywatne w zarządzaniu finansami oraz formalnościami. Nasze wieloletnie doświadczenie oraz indywidualne podejście do każdego klienta pozwalają nam podejmować nawet najbardziej skomplikowane wyzwania. Stawiamy na elastyczność, terminowość i wysoką jakość, dzięki czemu możesz mieć pewność, że Twoje sprawy są prowadzone z najwyższą starannością. Nieustannie się rozwijamy, śledząc zmieniające się przepisy oraz wprowadzając innowacyjne rozwiązania, by zapewnić Ci profesjonalną obsługę na najwyższym poziomie. Naszym celem jest nie tylko odciążenie Cię z obowiązków księgowo-kadrowych, ale także wsparcie w podejmowaniu decyzji, które przyniosą realne korzyści. Zaufaj doświadczeniu i pasji, które stoją za naszym sukcesem. Razem możemy zadbać o Twoją przyszłość finansową.",
    imageSrc: "imageAbout"
  },

  team: {
    title: "Nasz Zespół",
    subtitle:
      "Poznaj ludzi, którzy codziennie dbają o Twój spokój w zakresie finansów i kadr.",
    owner: {
      profile: {
        name: "Dorota",
        lastname: "Hasso-Agopsowicz",
        position: "Właściciel i założyciel firmy",
        experience: "W zawodzie 36 lat. Uzyskany Certyfikat Księgowy w 2001 r.",
        since: "Luty 2015 - 10 lat na rynku jako Kancelaria Podatkowa",
        email: "biuro@kancelariahasso.pl",
        phone: "+48 502 607 388",
        photoUrl: "expert",
      },
      skils: {
        headline: "Przekrocz swoje cele",
        description:
          "Z wykształcenia i zamiłowania księgowa, która od 2015 roku prowadzi z sukcesem Kancelarię Podatkową. W zawodzie od 36 lat, zdobyła ogromne doświadczenie, które pozwala jej sprostać nawet najbardziej skomplikowanym wyzwaniom księgowo-podatkowym. Uzyskała Certyfikat Księgowy w 2001 roku, co dodatkowo potwierdza jej wysokie kompetencje zawodowe. Specjalizuje się w podatkach dochodowych oraz zagadnieniach związanych z kadrami i płacami. Zawsze otwarta na nowe wyzwania, dba o każdy szczegół, aby klienci czuli się w pełni zaopiekowani. Prywatnie szczęśliwa mężatka, mama dwójki dorosłych dzieci i babcia. Pasjonatka podróży i literatury, która chętnie dzieli się swoją wiedzą przy filiżance dobrej kawy.",
      },
    },
    staff: teamList,
  },
  experience: {
    title: "Nasze Doświadczenie",
    subtitle: "Nasza wiedza specjalistyczna i mocne strony",
    imageSrc: "expertStrengths",
    list: {
      title: "Wartości, które definiują naszą pracę",
      description:
        "Dzięki udokumentowanemu doświadczeniu w dostarczaniu wysokiej jakości rozwiązań księgowych nasza firma obsługuje firmy i osoby prywatne od ponad 20 lat. Te mocne strony wyróżniają nas i pozwalają nam konsekwentnie dostarczać wartość naszym klientom.",
      items: [
        "Rozwiązania księgowe szyte na miarę.",
        "Sprawdzone strategie podatkowe.",
        "Podejście nastawione na klienta.",
        "Ochrona danych finansowych za pomocą najwyższej klasy środków bezpieczeństwa.",
      ],
    },
  },
};
