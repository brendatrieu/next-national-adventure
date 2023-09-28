import Image from 'next/image';
import { Oswald, Source_Sans_3 } from 'next/font/google';

export const oswald = Oswald({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-oswald',
});
export const sourceSans3 = Source_Sans_3({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-sourcesans3',
});

export default function Home() {
  return <main className={oswald.className}>hello</main>;
}
