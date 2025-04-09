export interface ProfileProps {
    name: string;
    lastname: string;
    position: string;
    experience: string;
    since: string;
    email: string;
    phone: string;
    photoUrl: string;
  }

  export const teamList: ProfileProps[] = [
    // {
    //   name: "Dorota",
    //   lastname: "Hasso-Agopsowicz",
    //   position: "Właściciel i założyciel firmy",
    //   experience: "W zawodzie 36 lat. Uzyskany Certyfikat Księgowy w 2001 r.",
    //   since: "Luty 2015 - 10 lat na rynku jako Kancelaria Podatkowa",
    //   email: "biuro@kancelariahasso.pl",
    //   phone: "+48 502 607 388",
    //   photoUrl: "expert",
    // },
    {
      name: "Małgorzata",
      lastname: "Wątek",
      position: "Główna księgowa",
      experience: "Doświadczenie zawodowe 20 lat",
      since: "W firmie od 2022 r.",
      email: "Malgorzata.watek@kancelariahasso.pl",
      phone: "+48 502 607 388",
      photoUrl: "sophiaB",
    },
    {
      name: "Joanna",
      lastname: "Olczak",
      position: "Księgowa",
      experience: "Doświadczenie zawodowe 30 lat",
      since: "W firmie od 2022 r.",
      email: "kadry@kancelariahasso.pl",
      phone: "+48 691 158 815",
      photoUrl: "michaelH",
    },
    {
      name: "Joanna",
      lastname: "Olczak",
      position: "Księgowa",
      experience: "Brak dodatkowych informacji o doświadczeniu",
      since: "W firmie od 2019 r.",
      email: "joanna.olczk@kancelariahasso.pl",
      phone: "",
      photoUrl: "michaelH",
    },
  ];
  