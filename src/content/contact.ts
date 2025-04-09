export interface InfoItemProps {
    icon: string;
    label: string;
    value: string;
}

export const detailItems: InfoItemProps[] = [
    {
        icon: "/icons/locAdres.svg",
        label: "Nasz adres",
        value: "Kłodzko, Bohaterów Getta 10/1, 57-300",
    },
    {
        icon: "/icons/locSchedule.svg",
        label: "Godziny pracy",
        value: "Pn - Pt: 09:00 - 18:00",
    },
    {
        icon: "/icons/locNumber.svg",
        label: "Telefon",
        value: "+48 502 607 388",
    },
    {
        icon: "/icons/locEmail.svg",
        label: "E-mail",
        value: "biuro@kancelariahasso.pl",
    },
];