enum CounterTypes {
    percent = "%",
    plus = "+",
}

export interface CounterProps {
    name: string;
    count: number;
    type: CounterTypes;
}

export const counterData: CounterProps[] = [
    {
        name: "Indeks zaufania",
        count: 100,
        type: CounterTypes.percent,
    },
    {
        name: "Wskaźnik skierowań",
        count: 98,
        type: CounterTypes.percent,
    },
    {
        name: "Szczęśliwi Klienci",
        count: 100,
        type: CounterTypes.percent,
    },
    {
        name: "Lata doświadczenia",
        count: 20,
        type: CounterTypes.plus,
    },
];
