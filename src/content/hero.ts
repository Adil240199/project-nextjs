export interface HeroProps {
    src: string,
    alt: string,
    className: string
 }

  export const heroList:HeroProps[] = [
    {
      src: 'routine',
      alt: 'Graph on laptop screen',
      className: 'image-size-1',
    },
    {
      src: 'routineTwo',
      alt: 'Team working on graphs and charts',
      className: 'image-size-2',
    },
    {
      src: 'routineThree',
      alt: 'Person pointing at bar chart',
      className: 'image-size-3',
    },
    {
      src: 'routineFour',
      alt: 'Hand using calculator on financial report',
      className: 'image-size-4',
    },
  ];