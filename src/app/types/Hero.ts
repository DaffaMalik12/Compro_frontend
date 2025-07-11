export interface HeroSlide {
    id: number;
    image: string;
    title: string;
    subtitle: string;
    description: string;
    overlay?: boolean; // Tanda tanya (?) berarti properti ini opsional
    buttonText?: string;
    buttonLink?: string;
  }