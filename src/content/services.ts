export interface ServiceItemProps {
    title: string;
    subtitle: string;
    icon: string;
    path: string;
}

export const servicesList: ServiceItemProps[] = [
    {
      title: "Zakładanie JDG",
      subtitle: "Profesjonalna pomoc w rejestracji jednoosobowej działalności gospodarczej (JDG). Doradzamy w wyborze opodatkowania, przygotowujemy dokumenty i wspieramy na każdym etapie zakładania firmy",
      icon: "cardOne",
      path: "/uslugi/zakladanie-jdg",
    },
    {
      title: "Zakładanie i obsługa spółek z o.o.",
      subtitle: "Dostarczamy strategiczne spostrzeżenia, które pomogą Twojej firmie się rozwijać. Rozpocznij działalność we właściwy sposób dzięki poradom prawnym i podatkowym.",
      icon: "cardTwo",
      path: "/uslugi/zakladanie-i-obsluga-spolek",
    },
    {
      title: "Kompleksowa Obsługa księgowa",
      subtitle: "Oferujemy fachowe porady dotyczące planowania podatkowego, strategii finansowych, dodając wartości naszym klientom.",
      icon: "cardThree",
      path: "/uslugi/kompleksowa-obsluga-ksiegowa",
    },
    {
      title: "Zeznania podatkowe w tym z dochodów z zagranicy",
      subtitle: "Niezawodne, codzienne zarządzanie transakcjami finansowymi, zapewniające aktualność i dokładność ksiąg.",
      icon: "cardFour",
      path: "/uslugi/zeznania-podatkowe-zagranica",
    },
    {
      title: "Kompleksowa obsługa kadrowo-płacowa",
      subtitle: "Spersonalizowane usługi planowania finansowego, pomagające zarządzać majątkiem, rozwijać się i chronić go dzięki dostosowanym strategiom dotyczącym emerytury, inwestycji i planowania majątku.",
      icon: "cardFive",
      path: "/uslugi/kompleksowa-obsluga-kadrowo-placowa",
    },
    {
      title: "Sporządzanie sprawozdań finansowych do KRS i KAS",
      subtitle: "Oferujemy fachowe porady dotyczące planowania podatkowego, strategii finansowych, dodając wartości naszym klientom.",
      icon: "cardSix",
      path: "/uslugi/sprawozdania-finansowe",
    },
  ];

  export enum ServicesSlug {
    jdg = "zakladanie-jdg",
    spolka = "zakladanie-i-obsluga-spolek",
    ksiegowa = "kompleksowa-obsluga-ksiegowa",
    podatkiZagraniczne = "zeznania-podatkowe-zagranica",
    kadryPlacowe = "kompleksowa-obsluga-kadrowo-placowa",
    sprawozdaniaFinansowe = "sprawozdania-finansowe",
  }
  

export interface ServicesParams {
    title: string;
    description: string;
    service: {
        headline: string;
        list: string[];
    };
}

export const servicesMap: Map<ServicesSlug, ServicesParams> = new Map([
    [ServicesSlug.jdg, {
        title: "Zakładanie JDG",
        description: "Zakładanie jednoosobowej działalności gospodarczej (JDG) to pierwszy krok dla osób, które chcą rozpocząć prowadzenie własnej firmy. Proces ten obejmuje rejestrację w Centralnej Ewidencji i Informacji o Działalności Gospodarczej (CEIDG), wybór formy opodatkowania, a także zgłoszenie do ZUS i urzędu skarbowego",
        service: {
            headline: "Nasza firma oferuje kompleksowe wsparcie w zakładaniu JDG, w tym:",
            list: [
                "pomoc w założeniu konta na e-PUAP",
                "pomoc w założeniu konta na portalu biznes.gov",
                "rejestracja JDG w ZUS",
                "dalsza obsługa księgowo-kadrowa"
            ]
        }
    }],
    [ServicesSlug.spolka, {
        title: "Zakładanie i obsługa spółek z o.o.",
        description: "Kompleksowa pomoc w zakładaniu i obsłudze spółek z ograniczoną odpowiedzialnością (sp. z o.o.), obejmująca zarówno proces rejestracji, jak i dalsze wsparcie księgowo-kadrowe.",
        service: {
            headline: "Zakładanie spółek z o.o. z naszą pomocą obejmuje:",
            list: [
                "pomoc w założeniu konta na e-PUAP",
                "pomoc w założeniu konta w e-KRS",
                "założenie spółki w trybie S-24 lub tradycyjnie (notariusz)",
                "rejestracja spółek w KRS (Krajowy Rejestr Sądowy)",
                "rejestracja spółek w US (Urząd Skarbowy, NIP-8, VAT-R, PCC-3)",
                "zgłoszenie beneficjentów rzeczywistych do CRBR",
                "dalsza obsługa księgowo-kadrowa"
            ]
        }
    }],
    [ServicesSlug.ksiegowa, {
        title: "Kompleksowa Obsługa księgowa",
        description: "Profesjonalna obsługa księgowa dla firm i przedsiębiorstw, zapewniająca zgodność z przepisami podatkowymi i rachunkowymi.",
        service: {
            headline: "Zakres usług księgowych obejmuje:",
            list: [
                "prowadzenie ksiąg handlowych",
                "prowadzenie książki przychodów i rozchodów",
                "prowadzenie rozliczeń ryczałtu",
                "prowadzenie rozliczeń z Urzędem Skarbowym"
            ]
        }
    }],
    [ServicesSlug.podatkiZagraniczne, {
        title: "Zeznania podatkowe w tym z dochodów z zagranicy",
        description: "Pomoc w przygotowaniu i składaniu rocznych zeznań podatkowych, uwzględniając dochody z różnych źródeł, w tym zagraniczne.",
        service: {
            headline: "Oferujemy wsparcie w zakresie:",
            list: [
                "Rozliczanie PIT-ów rocznych (dochody z pracy, JDG, wynajmu, obrotu papierami wartościowymi, sprzedaż nieruchomości) w tym dochody z zagranicy",
                "Rozliczanie ulg podatkowych",
                "Elektroniczne złożenie zeznania podatkowego"
            ]
        }
    }],
    [ServicesSlug.kadryPlacowe, {
        title: "Kompleksowa obsługa kadrowo-płacowa",
        description: "Wsparcie w zakresie obsługi kadrowo-płacowej, w tym przygotowywanie dokumentów pracowniczych, rozliczenia podatkowe i zgłoszenia do ZUS.",
        service: {
            headline: "Zakres obsługi kadrowo-płacowej obejmuje:",
            list: [
                "sporządzanie oraz rozliczanie umów o pracę",
                "sporządzanie świadectw pracy, zaświadczeń o okresie zatrudnienia i wynagrodzeniu pracowników i innych dokumentów związanych z zatrudnieniem",
                "zakładanie i prowadzenie akt osobowych",
                "przygotowywanie rocznych rozliczeń podatkowych (PIT-11, PIT-8B) a także roczne: PIT-4R i PIT-8AR",
                "obsługa umów zleceń, umów o dzieło",
                "rejestrację przedsiębiorstwa i jego pracowników w Urzędzie Skarbowym i ZUS",
                "sporządzanie i składanie deklaracji podatkowych oraz ubezpieczeniowych",
                "Obsługa PFRON",
                "Pomoc w razie kontroli pracowniczych (PIP, ZUS)",
                "Pomoc w sprawach BHP - szkolenia/zaświadczenia"
            ]
        }
    }],
    [ServicesSlug.sprawozdaniaFinansowe, {
        title: "Sporządzanie sprawozdań finansowych do KRS i KAS",
        description: "Przygotowanie oraz składanie sprawozdań finansowych zgodnie z obowiązującymi przepisami.",
        service: {
            headline: "Zakres usług obejmuje:",
            list: [
                "Obligatoryjnie sprawozdanie składamy raz w roku",
                "Możliwość sporządzenia sprawozdania za dowolny okres i w każdym czasie na indywidualne potrzeby klienta"
            ]
        }
    }]
]);
